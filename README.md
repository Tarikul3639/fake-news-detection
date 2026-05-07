# FakeGuard — Fake News Detection API

A FastAPI-based REST API for detecting fake news using Machine Learning. Trained on **44,898** labeled news articles using **Logistic Regression** with **TF-IDF** vectorization.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | FastAPI |
| ML Model | Logistic Regression (scikit-learn) |
| Vectorizer | TF-IDF (max_features=5000) |
| Language | Python 3.11 |
| Server | Uvicorn |
| Container | Docker |

---

## Project Structure

```
server/
├── app/
│   ├── main.py          # FastAPI app, routes, CORS
│   ├── model.py         # Model & vectorizer loader
│   ├── schemas.py       # Pydantic request/response models
│   └── utils.py         # Text cleaning function
├── artifacts/
│   ├── confusion_matrices.png
│   └── model_comparison.png
├── datasets/
│   ├── Fake.csv
│   └── True.csv
├── ml/
│   ├── model.pkl        # Trained model (generated)
│   ├── tfidf.pkl        # TF-IDF vectorizer (generated)
│   └── train.py         # Training script
├── notebooks/
│   └── Fake_News_Detection.ipynb
├── .dockerignore
├── Dockerfile
├── requirements.txt
└── README.md
```

---

## Getting Started

### Prerequisites

- Python 3.11+
- pip

### 1. Install dependencies

```bash
cd server
pip install -r requirements.txt
```

### 2. Train the model

> Run this once. Generates `ml/model.pkl` and `ml/tfidf.pkl`.

```bash
cd server
python -m ml.train
```

### 3. Start the server

```bash
# Run from server/ root
uvicorn app.main:app --reload --port 8000
```

Server running at → `http://localhost:8000`
Swagger UI → `http://localhost:8000/docs`

---

## API Reference

### `GET /`
Health check.

**Response:**
```json
{
  "status": "ok",
  "message": "FakeGuard API is running"
}
```

---

### `GET /health`
Server health status.

**Response:**
```json
{
  "status": "healthy"
}
```

---

### `POST /predict`
Predict whether a news article is fake or real.

**Request body:**
```json
{
  "text": "Paste your full news article text here..."
}
```

**Response:**
```json
{
  "prediction": "FAKE",
  "confidence": 91.23,
  "word_count": 142,
  "char_count": 874
}
```

| Field | Type | Description |
|---|---|---|
| `prediction` | `string` | `"FAKE"` or `"REAL"` |
| `confidence` | `float` | Confidence score (0–100) |
| `word_count` | `int` | Number of words in input |
| `char_count` | `int` | Number of characters in input |

---

## Docker

### Build & Run

```bash
# Build image
docker build -t fakeguard-api .

# Run container
docker run -p 8000:8000 fakeguard-api
```

### Recommended: Pre-train before building

Train the model locally first, then build Docker without re-training:

```bash
# Step 1 — train locally
cd ml && python train.py

# Step 2 — build (faster, no dataset needed inside image)
cd .. && docker build -t fakeguard-api .
```

---

## Model Performance

| Model | Accuracy | Precision | Recall | F1 Score |
|---|---|---|---|---|
| Logistic Regression | ~98.9% | ~99.0% | ~98.8% | ~98.9% |
| Passive Aggressive | ~99.4% | ~99.5% | ~99.2% | ~99.3% |
| Random Forest | ~98.7% | ~98.8% | ~98.6% | ~98.7% |
| Naive Bayes | ~94.2% | ~95.1% | ~93.2% | ~94.1% |

> Logistic Regression is used in production because it supports `predict_proba()` for confidence scores.

---

## Dataset

- **Source:** [Kaggle — Fake and Real News Dataset](https://www.kaggle.com/clmentbisaillon/fake-and-real-news-dataset)
- **Fake news articles:** 23,481
- **Real news articles:** 21,417
- **Total:** 44,898

---

## Frontend

Next.js + TypeScript frontend is in the `client/` directory.

```ts
// client/src/app/page.tsx
const res = await fetch("http://localhost:8000/predict", { ... });
```

---

## Author

**Tarikul Islam**
- Portfolio: [tarikul-islam.me](https://tarikul-islam.me)
- GitHub: [@tarikul3639](https://github.com/tarikul3639)
- LinkedIn: [tarikul3639](https://linkedin.com/in/tarikul3639)

---

## License

Academic project — Data Mining Course, Bangladesh University of Business and Technology (BUBT).