import puppeteer from 'puppeteer';
import fs from 'fs';

const TOTAL_PAGES = 18;
const BASE_URL = (p) => `https://www.quizme.co.il/quiz-discussion/423?p=${p}`;
const OUTPUT_FILE = 'quiz_423_questions.json';

async function main() {
    console.log("Starting browser...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    const allQuestions = [];

    for (let p = 1; p <= TOTAL_PAGES; p++) {
        console.log(`Scraping page ${p}/${TOTAL_PAGES}...`);
        try {
            await page.goto(BASE_URL(p), { waitUntil: 'networkidle2', timeout: 60000 });

            // Extract data in the browser context
            const questions = await page.evaluate(() => {
                const results = [];
                document.querySelectorAll('.Question').forEach(q => {
                    // Get question ID
                    const idLink = q.querySelector('.Question__days-ago a');
                    const idMatch = idLink ? idLink.textContent.match(/\d+/) : null;
                    const id = idMatch ? parseInt(idMatch[0]) : null;

                    // Get question text
                    const questionEl = q.querySelector('h2');
                    const questionText = questionEl ? questionEl.textContent.trim() : '';

                    let correctAnswer = '';
                    const wrongAnswers = [];

                    // Loop over all rows in the answers table
                    q.querySelectorAll('table tr').forEach(row => {
                        const cells = row.querySelectorAll('td');
                        if (cells.length < 2) return;

                        // The text of the answer is usually in the last cell
                        const answerCell = cells[cells.length - 1];
                        let answerText = answerCell.textContent.trim();
                        // Remove nested tags text if any, but since we use textContent, we just need to avoid taking icon names
                        // The answer text is sometimes nested, but textContent gets it all.
                        const iconTexts = ['done', 'close', 'gavel', 'mood_bad', 'share'];
                        if (!answerText || answerText.length < 2 || iconTexts.includes(answerText)) return;

                        // Remove material icons text from the answer string just in case
                        iconTexts.forEach(icon => {
                            answerText = answerText.replace(new RegExp(`^${icon}\\s*`), '').replace(new RegExp(`\\s*${icon}$`), '').trim();
                        });

                        // Look for the "done" icon in this row
                        let hasDone = false;
                        row.querySelectorAll('.material-icons').forEach(icon => {
                            if (icon.textContent.trim() === 'done') {
                                hasDone = true;
                            }
                        });

                        if (hasDone) {
                            correctAnswer = answerText;
                        } else {
                            wrongAnswers.push(answerText);
                        }
                    });

                    if (id && questionText) {
                        results.push({
                            id,
                            question: questionText,
                            correct_answer: correctAnswer,
                            wrong_answers: wrongAnswers
                        });
                    }
                });
                return results;
            });

            console.log(`Found ${questions.length} questions.`);
            allQuestions.push(...questions);

        } catch (e) {
            console.error(`Error on page ${p}:`, e.message);
        }
    }

    await browser.close();

    // Remove duplicates just in case
    const seen = new Set();
    const unique = allQuestions.filter(q => {
        if (seen.has(q.id)) return false;
        seen.add(q.id);
        return true;
    });

    // Check how many are missing correct answers
    const missingCorrect = unique.filter(q => !q.correct_answer).length;

    console.log(`\nTotal unique questions: ${unique.length}`);
    console.log(`Questions missing correct answer: ${missingCorrect}`);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(unique, null, 2), 'utf-8');
    console.log(`Saved to ${OUTPUT_FILE}`);
}

main().catch(console.error);
