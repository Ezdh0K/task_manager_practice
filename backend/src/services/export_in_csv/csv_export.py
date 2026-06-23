import requests, os, csv
from pathlib import Path

PORT = os.environ.get('PORT', 5000)
BASE_DIR = Path(__file__).resolve().parent

def save_in_file(auth_header=None):
    headers = {}
    if auth_header:
        headers['Authorization'] = auth_header  # 👈 прокидываем Bearer <token>

    response = requests.get(f"http://localhost:{PORT}/tasks", headers=headers)
    response.raise_for_status()
    tasks = response.json()

    if not tasks:
        return None

    file_path = BASE_DIR / 'my_tasks.csv'

    with open(file_path, 'w', newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=tasks[0].keys())
        writer.writeheader()
        writer.writerows(tasks)

    return str(file_path)