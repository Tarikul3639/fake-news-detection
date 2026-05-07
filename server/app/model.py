import pickle
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, 'ml', 'model.pkl')
TFIDF_PATH = os.path.join(BASE_DIR, 'ml', 'tfidf.pkl')

def load_model():
    with open(MODEL_PATH, 'rb') as f:
        model = pickle.load(f)
    with open(TFIDF_PATH, 'rb') as f:
        tfidf = pickle.load(f)
    return model, tfidf

# Note: Load the model as soon as the app starts, so that it doesn't have to be loaded on every request.
model, tfidf = load_model()