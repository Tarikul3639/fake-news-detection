export default function ApiNote() {
    return (
        <div className="mt-5 flex gap-3 items-start px-4 py-3 rounded-xl bg-blue-950/30 border border-blue-500/20">
            <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#60a5fa"
                strokeWidth={2}
                className="shrink-0 mt-0.5"
            >
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" d="M12 16v-4M12 8h.01" />
            </svg>
            <p className="text-xs text-gray-500 leading-relaxed">
                Connect your Python FastAPI backend at{" "}
                <code className="font-mono text-blue-400 text-[11px] bg-blue-950/50 px-1.5 py-0.5 rounded">
                    http://localhost:8000/predict
                </code>{" "}
                for real predictions. Currently running in demo mode without a backend.
                Run:{" "}
                <code className="font-mono text-blue-400 text-[11px] bg-blue-950/50 px-1.5 py-0.5 rounded">
                    uvicorn api:app --reload
                </code>
            </p>
        </div>
    );
}