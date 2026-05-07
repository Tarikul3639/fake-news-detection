import pandas as pd
import pickle
import re
import string
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

def clean_text(text):
    text = text.lower()
    text = re.sub(r'\[.*?\]', '', text)
    text = re.sub(r'https?://\S+|www\.\S+', '', text)
    text = re.sub(r'<.*?>+', '', text)
    text = re.sub(r'[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub(r'\n', '', text)
    text = re.sub(r'\w*\d\w*', '', text)
    return text

def train():
    print("Loading datasets...")
    fake = pd.read_csv('datasets/Fake.csv')
    true = pd.read_csv('datasets/True.csv')

    fake['class'] = 0
    true['class'] = 1

    data = pd.concat([fake, true], axis=0)
    data = data.drop(['title', 'subject', 'date'], axis=1)
    data = data.sample(frac=1, random_state=42).reset_index(drop=True)

    print("Cleaning text...")
    data['text'] = data['text'].apply(clean_text)

    X = data['text']
    y = data['class']

    print("Vectorizing...")
    tfidf = TfidfVectorizer(max_features=5000)
    X_tfidf = tfidf.fit_transform(X)

    X_train, X_test, y_train, y_test = train_test_split(
        X_tfidf, y, test_size=0.2, random_state=42, stratify=y
    )

    print("Training Random Forest...")
    model = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    print("\n=== Evaluation ===")
    print(classification_report(y_test, y_pred, target_names=['Fake', 'Real']))

    print("Saving model and vectorizer...")
    with open('ml/model.pkl', 'wb') as f:
        pickle.dump(model, f)

    with open('ml/tfidf.pkl', 'wb') as f:
        pickle.dump(tfidf, f)

    print("Done! model.pkl and tfidf.pkl saved.")

if __name__ == '__main__':
    train()

# Note: Train command run form the server directory
# python -m ml.train