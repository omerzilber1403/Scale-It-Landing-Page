// QuizMe Scraper v2 - Node.js (built-in fetch only, no npm packages needed)
// Scrapes quiz #423 from quizme.co.il and saves to JSON
// Fixes: HTML entity decoding, icon text leaking into answers

const TOTAL_PAGES = 18;
const BASE_URL = (p) => `https://www.quizme.co.il/quiz-discussion/423?p=${p}`;
const OUTPUT_FILE = 'quiz_423_questions.json';

const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'he,en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
};

// Known Material Icons text to skip
const MATERIAL_ICONS = new Set([
    'done', 'close', 'gavel', 'mood', 'mood_bad', 'share',
    'sentiment_very_satisfied', 'sentiment_very_dissatisfied',
    'favorite', 'star', 'check', 'clear', 'cancel', 'add',
    'delete', 'edit', 'info', 'warning', 'error', 'help',
    'thumb_up', 'thumb_down', 'flag', 'report'
]);

function decodeHtmlEntities(str) {
    return str
        .replace(/&amp;#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)))
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)))
        .replace(/&amp;#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
        .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
        .replace(/&amp;amp;/g, '&')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&apos;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .trim();
}

function stripTags(html) {
    return html.replace(/<[^>]+>/g, '').trim();
}

function parseQuestions(html) {
    const questions = [];

    // Split the page into question blocks by the .Question div boundary
    const parts = html.split(/(?=<div[^>]+class="[^"]*\bQuestion\b[^"]*")/i);

    for (const part of parts) {
        if (!part.match(/class="[^"]*\bQuestion\b[^"]*"/)) continue;

        // Extract question ID
        const idMatch = part.match(/שאלה\s*#(\d+)/);
        const id = idMatch ? parseInt(idMatch[1]) : null;
        if (!id) continue;

        // Extract question text from <h2>
        const h2Match = part.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
        if (!h2Match) continue;
        const questionText = decodeHtmlEntities(stripTags(h2Match[1]));
        if (!questionText) continue;

        let correctAnswer = '';
        const wrongAnswers = [];

        // Find the answers table
        const tableMatch = part.match(/<table[\s\S]*?<\/table>/i);
        if (!tableMatch) continue;
        const tableHTML = tableMatch[0];

        // Parse each row
        const trMatches = [...tableHTML.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
        for (const trMatch of trMatches) {
            const rowHTML = trMatch[1];

            // Check for correct answer: a <span class="material-icons">done</span>
            // The "done" icon specifically marks the correct answer
            const hasDone = /class="material-icons"[^>]*>done<\/span>/.test(rowHTML) ||
                /class="[^"]*material-icons[^"]*"[^>]*>\s*done\s*<\/span>/.test(rowHTML);

            // Extract all td contents, filter out icon-only tds
            const tds = [...rowHTML.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)];
            let answerText = '';

            for (const td of tds) {
                // Remove all tags to get raw text
                const raw = stripTags(td[1]).trim();
                // Skip if it's a known icon text or empty or just whitespace
                if (!raw || MATERIAL_ICONS.has(raw.toLowerCase().replace(/\s+/g, '_'))) continue;
                if (MATERIAL_ICONS.has(raw.toLowerCase())) continue;
                // Skip very short single-word strings that look like icon names
                if (raw.length < 2) continue;
                answerText = decodeHtmlEntities(raw);
                break;
            }

            if (!answerText) continue;

            if (hasDone) {
                correctAnswer = answerText;
            } else {
                // Don't add duplicates
                if (!wrongAnswers.includes(answerText)) {
                    wrongAnswers.push(answerText);
                }
            }
        }

        questions.push({
            id,
            question: questionText,
            correct_answer: correctAnswer,
            wrong_answers: wrongAnswers
        });
    }

    return questions;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const allQuestions = [];

    for (let page = 1; page <= TOTAL_PAGES; page++) {
        const url = BASE_URL(page);
        process.stdout.write(`Scraping page ${page}/${TOTAL_PAGES}... `);

        try {
            const resp = await fetch(url, { headers: HEADERS });
            if (!resp.ok) {
                console.log(`FAILED (HTTP ${resp.status})`);
                continue;
            }
            const html = await resp.text();
            const questions = parseQuestions(html);
            console.log(`${questions.length} questions`);
            allQuestions.push(...questions);
        } catch (err) {
            console.log(`ERROR: ${err.message}`);
        }

        await sleep(500);
    }

    // Remove duplicates by id
    const seen = new Set();
    const unique = allQuestions.filter(q => {
        if (seen.has(q.id)) return false;
        seen.add(q.id);
        return true;
    });

    // Sort by ID
    unique.sort((a, b) => a.id - b.id);

    console.log(`\nTotal unique questions: ${unique.length}`);

    // Count questions with missing correct answer
    const missing = unique.filter(q => !q.correct_answer).length;
    if (missing > 0) {
        console.log(`WARNING: ${missing} questions have no detected correct answer (may use a different icon).`);
    }

    const { writeFileSync } = await import('fs');
    writeFileSync(OUTPUT_FILE, JSON.stringify(unique, null, 2), 'utf-8');
    console.log(`Saved to ${OUTPUT_FILE}`);

    // Print summary of first 5
    console.log('\nSample (first 5 questions):');
    unique.slice(0, 5).forEach(q => {
        console.log(`  [${q.id}] ${q.question.substring(0, 60)}...`);
        console.log(`    ✓ ${q.correct_answer}`);
        console.log(`    ✗ ${q.wrong_answers.join(' | ')}`);
        console.log();
    });
}

main().catch(console.error);
