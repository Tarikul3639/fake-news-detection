"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { PredictionResult } from "../app/page";

interface Props {
    result: PredictionResult;
    wordCount: number;
}

export default function ResultCard({ result, wordCount }: Props) {
    const [barWidth, setBarWidth] = useState(0);
    const isFake = result.prediction === "FAKE";
    const conf = parseFloat(result.confidence.toString());

    useEffect(() => {
        // Animate bar on mount
        const t = setTimeout(() => setBarWidth(conf), 100);
        return () => clearTimeout(t);
    }, [conf]);

    return (
        <div
            className={`
        mt-6 rounded-2xl border overflow-hidden
        animate-in fade-in slide-in-from-bottom-2 duration-300
        ${isFake
                    ? "border-red-500/30 bg-red-950/20"
                    : "border-green-500/30 bg-green-950/20"
                }`}
        >
            {/* Header */}
            <div className="flex items-center gap-4 px-5 pt-5 pb-4">
                <div
                    className={`
            w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0
            ${isFake ? "bg-red-500/20" : "bg-green-500/20"}`}
                >
                    {isFake ? (
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                    ) : (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                    )}
                </div>
                <div>
                    <p
                        className={`text-xl font-bold font-mono tracking-tight ${isFake ? "text-red-400" : "text-green-400"
                            }`}
                    >
                        {result.prediction} NEWS
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                        {isFake
                            ? "This article shows signs of misinformation"
                            : "This article appears to be credible content"}
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div
                className={`h-px mx-5 ${isFake ? "bg-red-500/20" : "bg-green-500/20"}`}
            />

            {/* Confidence bar */}
            <div className="px-5 py-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                        Confidence score
                    </span>
                    <span className="text-xs font-mono font-bold text-gray-300">
                        {conf.toFixed(1)}%
                    </span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${isFake ? "bg-red-500" : "bg-green-500"
                            }`}
                        style={{ width: `${barWidth}%` }}
                    />
                </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3 px-5 pb-5">
                <StatCard label="Model" value="Log. Reg." mono />
                <StatCard label="Words" value={wordCount.toString()} />
                <StatCard
                    label="Risk level"
                    value={conf >= 90 ? "High" : conf >= 75 ? "Medium" : "Low"}
                    color={
                        isFake
                            ? conf >= 90
                                ? "text-red-400"
                                : "text-yellow-400"
                            : "text-green-400"
                    }
                />
            </div>
        </div>
    );
}

function StatCard({
    label,
    value,
    mono = false,
    color = "text-white",
}: {
    label: string;
    value: string;
    mono?: boolean;
    color?: string;
}) {
    return (
        <div className="bg-gray-900/60 rounded-xl px-4 py-3 border border-gray-800/50">
            <p className="text-[11px] text-gray-600 uppercase tracking-widest mb-1">
                {label}
            </p>
            <p
                className={`text-base font-bold ${color} ${mono ? "font-mono text-sm" : ""
                    }`}
            >
                {value}
            </p>
        </div>
    );
}
