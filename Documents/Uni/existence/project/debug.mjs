// Debug script - check what HTML structure the answers table uses
const url = 'https://www.quizme.co.il/quiz-discussion/423?p=1';
const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
};

const resp = await fetch(url, { headers: HEADERS });
const html = await resp.text();

// Find first Question block
const qStart = html.indexOf('class="Question"');
const qEnd = html.indexOf('class="Question"', qStart + 1);
const block = html.slice(qStart - 5, qEnd - 5 > qStart ? qEnd - 5 : qStart + 3000);

// Find the table within
const tableStart = block.indexOf('<table');
const tableEnd = block.indexOf('</table>') + 8;
const table = block.slice(tableStart, tableEnd);

console.log('=== TABLE HTML for first question ===');
console.log(table);

// Show all material-icons spans
const iconMatches = [...html.matchAll(/<span[^>]*class="[^"]*material-icons[^"]*"[^>]*>([\s\S]*?)<\/span>/gi)];
const uniqueIcons = new Set(iconMatches.map(m => m[1].trim()));
console.log('\n=== All unique material-icons text values ===');
console.log([...uniqueIcons]);
