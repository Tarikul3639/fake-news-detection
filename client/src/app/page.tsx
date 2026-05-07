"use client";

import { useState, useCallback } from "react";
import axios from "axios";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";
import ResultCard from "@/components/ResultCard";
import ExampleChips from "@/components/ExampleChips";
// import ApiNote from "@/components/ApiNote";

export type PredictionResult = {
  prediction: "FAKE" | "REAL";
  confidence: number;
};

export type Status = "idle" | "loading" | "done" | "error";

export default function Home() {
  // ── Config ───────────────────────────────────────────────────────────────
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ── State ───────────────────────────────────────────────────────────────
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  // ── Handlers ──────────────────────────────────────────────────────────
  const handleAnalyze = useCallback(async () => {
    if (!text.trim() || text.length < 20) return;

    setStatus("loading");
    setResult(null);

    try {
      const { data } = await axios.post<PredictionResult>(
        `${API_URL}/predict`,
        { text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResult(data);
      setStatus("done");
    } catch {
      // Demo mode fallback — works without Python backend
      const demo = demoPredict(text);
      setResult(demo);
      setStatus("done");
    }
  }, [text]);

  const handleClear = useCallback(() => {
    setText("");
    setResult(null);
    setStatus("idle");
  }, []);

  const handleExample = useCallback((sample: string) => {
    setText(sample);
    setResult(null);
    setStatus("idle");
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-2xl mx-auto px-5">
        <Header />

        <TextInput
          value={text}
          onChange={setText}
          onAnalyze={handleAnalyze}
          onClear={handleClear}
          isLoading={status === "loading"}
        />

        {status === "loading" && <LoadingSkeleton />}

        {status === "done" && result && (
          <ResultCard
            result={result}
            wordCount={text.trim().split(/\s+/).length}
          />
        )}

        <ExampleChips onSelect={handleExample} />
        {/* <ApiNote /> */} {/* Optional: Instructions for connecting backend */}
      </div>
    </main>
  );
}

// ─── Demo mode (no backend needed) ──────────────────────────────────────────
function demoPredict(text: string): PredictionResult {
  const t = text.toLowerCase();

  const fakeSignals = [
    "breaking",
    "secret",
    "they don't want",
    "globalist",
    "big pharma",
    "shocking",
    "exposed",
    "mainstream media",
    "cover-up",
    "wake up",
    "share before deleted",
  ];

  const score = fakeSignals.filter((s) => t.includes(s)).length;
  const exclamations = (text.match(/!/g) || []).length;
  const capsWords = (text.match(/\b[A-Z]{4,}\b/g) || []).length;

  const isFake =
    score >= 2 || exclamations >= 4 || capsWords >= 3;

  const confidence = isFake
    ? Math.min(72 + score * 5 + exclamations * 2, 98)
    : Math.min(76 + Math.floor(Math.random() * 18), 97);

  return {
    prediction: isFake ? "FAKE" : "REAL",
    confidence,
  };
}

function LoadingSkeleton() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-800 bg-gray-900 p-5 animate-pulse">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 bg-gray-800 rounded-xl" />

        <div className="space-y-2 flex-1">
          <div className="h-5 bg-gray-800 rounded-lg w-32" />
          <div className="h-3 bg-gray-800 rounded-lg w-48" />
        </div>
      </div>

      <div className="h-2 bg-gray-800 rounded-full mb-4" />

      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-16 bg-gray-800 rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}