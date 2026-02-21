import requests
from bs4 import BeautifulSoup
import json
import time

BASE_URL = "https://www.quizme.co.il/quiz-discussion/423?p={}"
TOTAL_PAGES = 18

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept-Language": "he,en;q=0.9",
}

all_questions = []

for page in range(1, TOTAL_PAGES + 1):
    url = BASE_URL.format(page)
    print(f"Scraping page {page}/{TOTAL_PAGES}: {url}")
    
    try:
        resp = requests.get(url, headers=HEADERS, timeout=15)
        resp.raise_for_status()
    except Exception as e:
        print(f"  ERROR fetching page {page}: {e}")
        continue

    soup = BeautifulSoup(resp.text, "html.parser")
    question_blocks = soup.select(".Question")
    
    print(f"  Found {len(question_blocks)} questions on page {page}")
    
    for block in question_blocks:
        # Get question ID
        id_link = block.select_one(".Question__days-ago a")
        q_id = None
        if id_link:
            import re
            m = re.search(r'\d+', id_link.get_text())
            if m:
                q_id = int(m.group())
        
        # Get question text
        h2 = block.select_one("h2")
        question_text = h2.get_text(strip=True) if h2 else ""
        
        correct_answer = ""
        wrong_answers = []
        
        # Parse answer rows from table
        for row in block.select("tr"):
            # Check if this row has the "done" checkmark icon
            icons = row.select(".material-icons")
            is_correct = any(icon.get_text(strip=True) == "done" for icon in icons)
            
            # Get the answer text - usually in the last td
            tds = row.select("td")
            if not tds:
                continue
            
            # Skip rows that are only icons
            # Get all text from tds, filter out icon text
            answer_text = ""
            for td in tds:
                # Remove icon spans to get clean text
                for icon in td.select(".material-icons"):
                    icon.decompose()
                text = td.get_text(strip=True)
                if text:
                    answer_text = text
                    break
            
            if not answer_text:
                continue
            
            if is_correct:
                correct_answer = answer_text
            else:
                wrong_answers.append(answer_text)
        
        if q_id and question_text:
            all_questions.append({
                "id": q_id,
                "question": question_text,
                "correct_answer": correct_answer,
                "wrong_answers": wrong_answers
            })
    
    time.sleep(0.5)  # Be polite

print(f"\nTotal questions scraped: {len(all_questions)}")

output_path = "quiz_423_questions.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(all_questions, f, ensure_ascii=False, indent=2)

print(f"Saved to {output_path}")
