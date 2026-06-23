from .normalize import normalize_text
from text_analyze.utils.keywords import (
    work, study, house, personal, health, social, other,
    low, middle, high
)

CATEGORIES = {
    'work': work,
    'study': study,
    'house': house,
    'personal': personal,
    'health': health,
    'social': social,
    'other': other
}

PRIORITIES = {
    'low': low,
    'middle': middle,
    'high': high
}

def get_best_match(words: list[str], groups: dict):
    words_set = set(words)
    best_name = None
    best_score = 0
    for name, keywords in groups.items():
        score = len(words_set & set(keywords))
        if score > best_score:
            best_score = score
            best_name = name
    return best_name

def analyze_task(text: str):
    words = normalize_text(text)
    category = get_best_match(words, CATEGORIES)
    priority_level = get_best_match(words, PRIORITIES)
    return {
        "category": category or "general",
        "priority": priority_level or "low"
    }