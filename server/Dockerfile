# Base image
FROM python:3.11-slim

# Work directory
WORKDIR /app

# Copy requirements first (for caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Model train - this will create model.pkl and tfidf.pkl in the ml directory
# RUN python ml/train.py

# Copy the trained model and vectorizer (if already trained locally)
COPY ml/model.pkl ml/model.pkl
COPY ml/tfidf.pkl ml/tfidf.pkl

# Port expose
EXPOSE 8000

# Server start
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]


# Build the Docker image
# docker build -t fakeguard-api .

# Run the container
# docker run -p 8000:8000 fakeguard-api