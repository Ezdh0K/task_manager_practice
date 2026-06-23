import pymorphy3, re

morph = pymorphy3.MorphAnalyzer()

def normalize_text(text: str) -> list[str]:
    text = text.lower()
    text = re.sub("[^\w\s]", "", text)

    words = text.split()

    lemmas = []
    for word in words:
        lemma = morph.parse(word)[0].normal_form
        lemmas.append(lemma)
    
    return lemmas