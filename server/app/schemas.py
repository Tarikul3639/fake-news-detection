from pydantic import BaseModel, Field

class NewsInput(BaseModel):
    text: str = Field(..., min_length=20, description="News article text")

class PredictionResponse(BaseModel):
    prediction: str          # "FAKE" or "REAL"
    confidence: float        # 0-100
    word_count: int
    char_count: int