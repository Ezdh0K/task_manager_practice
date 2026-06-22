import requests, os, csv
PORT = os.environ.get('PORT', 4000)

response = requests.get(f"http://localhost:{PORT}:/tasks")
tasks = response.json()

def save_in_file(text):
    with open('my_tasks.csv', 'w', newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(
            file,
            fieldnames=text[0].keys()
        )

        writer.writeheader()
        writer.writerows(text)
    
save_in_file(tasks)