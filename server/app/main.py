from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import NewsInput, PredictionResponse
from app.model import model, tfidf
from app.utils import clean_text
import os
from dotenv import load_dotenv
load_dotenv()

app = FastAPI(
    title="FakeGuard API",
    description="ML-powered fake news detection API",
    version="1.0.0",
)

origins = os.getenv("CORS_ORIGINS", "").split(",") if os.getenv("CORS_ORIGINS") else []
print(f"Allowed CORS origins: {origins}")  # Debugging statement to check CORS origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "ok", "message": "FakeGuard API is running"}

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.post("/predict", response_model=PredictionResponse)
def predict(news: NewsInput):
    print(f"Received news for prediction: {news.text[:60]}... (length: {len(news.text)})")
    try:
        cleaned = clean_text(news.text)

        if not cleaned.strip():
            raise HTTPException(status_code=400, detail="Text is empty after cleaning")

        vectorized = tfidf.transform([cleaned])
        prediction = model.predict(vectorized)[0]
        probability = model.predict_proba(vectorized)[0]
        confidence = round(float(max(probability)) * 100, 2)

        return PredictionResponse(
            prediction="REAL" if prediction == 1 else "FAKE",
            confidence=confidence,
            word_count=len(news.text.strip().split()),
            char_count=len(news.text),
        )

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))