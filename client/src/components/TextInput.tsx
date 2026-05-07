"use client";

interface Props {
    value: string;
    onChange: (v: string) => void;
    onAnalyze: () => void;
    onClear: () => void;
    isLoading: boolean;
}

export default function TextInput({
    value,
    onChange,
    onAnalyze,
    onClear,
    isLoading,
}: Props) {
    const canAnalyze = value.trim().length >= 20 && !isLoading;

    return (
        <>
            <div className="mb-8">
                {/* Title */}
                <h1 className="text-3xl font-semibold text-white leading-tight mb-2">
                    Is this news real?
                </h1>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Paste any news article below. Our machine learning model trained on{" "}
                    <span className="text-gray-300 font-medium">44,898 articles</span> will
                    detect whether it's fake or real with a confidence score.
                </p>
            </div>
            {/* Textarea and buttons */}
            <div className="mb-2">
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">
                    News article text
                </label>

                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={
                        "Paste a news article here to analyze...\n\ne.g. WASHINGTON — The Senate voted Thursday to pass a bipartisan bill..."
                    }
                    rows={7}
                    className="w-full resize-y rounded-xl px-4 py-3 bg-gray-900 border-2 border-gray-800 text-sm text-white placeholder-gray-600 leading-relaxed font-sans focus:outline-none focus:border-red-500 focus:border-2 focus:shadow-xs focus:shadow-red-500 transition-colors duration-150"
                />

                {/* Char counter */}
                <div className="flex justify-between items-center mt-1.5 mb-4">
                    <span className="text-xs text-gray-600">
                        {value.length < 20 && value.length > 0 && (
                            <span className="text-yellow-600">
                                Minimum 20 characters required
                            </span>
                        )}
                    </span>
                    <span className="text-xs font-mono text-gray-600">
                        {value.length} Chars · {value.trim() ? value.trim().split(/\s+/).length : 0} Words
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={onAnalyze}
                        disabled={!canAnalyze}
                        className="flex-1 py-3 px-5 rounded-md bg-red-500 hover:bg-red-600 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all duration-150 cursor-pointer"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <LoadingDots />
                                Analyzing...
                            </span>
                        ) : (
                            "Analyze Article"
                        )}
                    </button>

                    <button
                        onClick={onClear}
                        disabled={isLoading}
                        className="px-5 py-3 rounded-md bg-transparent border border-gray-800 hover:bg-gray-900 hover:border-gray-700 text-gray-400 hover:text-gray-200 text-sm font-medium transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </>
    );
}

function LoadingDots() {
    return (
        <span className="flex gap-1 items-center">
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                />
            ))}
        </span>
    );
}