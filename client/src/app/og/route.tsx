import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(_req: NextRequest) {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "#0a0a0a",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Red left bar */}
                <div style={{ position: "absolute", left: 0, top: 0, width: "6px", height: "630px", background: "#E24B4A" }} />

                {/* Grid lines */}
                <div style={{ position: "absolute", top: "210px", left: 0, right: 0, height: "1px", background: "#1a1a1a" }} />
                <div style={{ position: "absolute", top: "420px", left: 0, right: 0, height: "1px", background: "#1a1a1a" }} />
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "800px", width: "1px", background: "#1a1a1a" }} />

                {/* ── Left content ── */}
                <div style={{ display: "flex", flexDirection: "column", padding: "190px 0 0 80px" }}>

                    {/* Logo */}
                    <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                        <div style={{
                            width: "72px", height: "72px", background: "#E24B4A",
                            borderRadius: "16px", display: "flex", alignItems: "center",
                            justifyContent: "center", fontSize: "36px",
                        }}>
                            📰
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontFamily: "monospace", fontSize: "46px", fontWeight: 700, color: "#ffffff", letterSpacing: "-1px", lineHeight: "1" }}>
                                FakeGuard
                            </span>
                            <span style={{ fontSize: "14px", color: "#555555", letterSpacing: "4px", marginTop: "6px" }}>
                                FAKE NEWS DETECTOR
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ width: "480px", height: "1px", background: "#222222", marginTop: "28px" }} />

                    {/* Headline */}
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "28px", gap: "0px" }}>
                        <span style={{ fontSize: "40px", fontWeight: 600, color: "#ffffff", lineHeight: "1.15" }}>
                            Is this news real?
                        </span>
                        <span style={{ fontSize: "21px", color: "#666666", marginTop: "12px", lineHeight: "1.5" }}>
                            Paste any article. Get instant fake or real
                        </span>
                        <span style={{ fontSize: "21px", color: "#666666", lineHeight: "1.5" }}>
                            verdict with confidence score.
                        </span>
                    </div>

                    {/* Stats */}
                    <div style={{ display: "flex", gap: "14px", marginTop: "44px" }}>
                        {[
                            { label: "TRAINED ON", value: "44,898" },
                            { label: "F1 SCORE", value: "99.3%" },
                            { label: "MODEL", value: "ML" },
                        ].map((s) => (
                            <div
                                key={s.label}
                                style={{
                                    background: "#111111", border: "1px solid #222222",
                                    borderRadius: "12px", padding: "14px 22px",
                                    display: "flex", flexDirection: "column", alignItems: "center", gap: "5px",
                                }}
                            >
                                <span style={{ fontSize: "11px", color: "#555555", letterSpacing: "1px" }}>{s.label}</span>
                                <span style={{ fontFamily: "monospace", fontSize: "22px", fontWeight: 700, color: "#E24B4A" }}>{s.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right card ── */}
                <div style={{
                    position: "absolute", right: "72px", top: "150px",
                    width: "356px", background: "#111111", border: "1px solid #1e1e1e",
                    borderRadius: "20px", padding: "28px",
                    display: "flex", flexDirection: "column", gap: "16px",
                }}>
                    {/* FAKE */}
                    <div style={{
                        background: "#1a0808", border: "1px solid #3a1212",
                        borderRadius: "14px", padding: "18px 20px",
                        display: "flex", flexDirection: "column", gap: "12px",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ fontSize: "26px" }}>🚨</span>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ fontFamily: "monospace", fontSize: "20px", fontWeight: 700, color: "#E24B4A" }}>FAKE NEWS</span>
                                <span style={{ fontSize: "12px", color: "#7a3333" }}>Signs of misinformation detected</span>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <div style={{ background: "#2a1515", borderRadius: "3px", height: "5px", width: "100%", display: "flex" }}>
                                <div style={{ background: "#E24B4A", borderRadius: "3px", height: "5px", width: "82%" }} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "11px", color: "#555555" }}>Confidence</span>
                                <span style={{ fontSize: "11px", color: "#E24B4A", fontFamily: "monospace" }}>82.4%</span>
                            </div>
                        </div>
                    </div>

                    {/* REAL */}
                    <div style={{
                        background: "#081a0c", border: "1px solid #123a18",
                        borderRadius: "14px", padding: "18px 20px",
                        display: "flex", flexDirection: "column", gap: "12px",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ fontSize: "26px" }}>✅</span>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ fontFamily: "monospace", fontSize: "20px", fontWeight: 700, color: "#639922" }}>REAL NEWS</span>
                                <span style={{ fontSize: "12px", color: "#3a7a44" }}>Credible content verified</span>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <div style={{ background: "#152a18", borderRadius: "3px", height: "5px", width: "100%", display: "flex" }}>
                                <div style={{ background: "#639922", borderRadius: "3px", height: "5px", width: "95%" }} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "11px", color: "#555555" }}>Confidence</span>
                                <span style={{ fontSize: "11px", color: "#639922", fontFamily: "monospace" }}>95.1%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* URL bottom right */}
                <div style={{
                    position: "absolute", bottom: "28px", right: "48px",
                    fontFamily: "monospace", fontSize: "14px", color: "#333333",
                }}>
                    fakeguard.vercel.app
                </div>
            </div>
        ),
        { width: 1200, height: 630 }
    );
}