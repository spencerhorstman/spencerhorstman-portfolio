import { useState } from "react";
import CaseStudy from "./CaseStudy.jsx";
import ProspectCaseStudy from "./ProspectCaseStudy.jsx";

const fonts = {
  serif: "'Playfair Display', Georgia, serif",
  sans: "'Source Sans 3', 'Source Sans Pro', sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

function HomePage({ onNavigate }) {
  return (
    <div style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{
        background: "#1A1A1A",
        padding: "80px 40px 60px",
        textAlign: "center",
      }}>
        <div style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#888",
          marginBottom: 20,
        }}>Product Management Portfolio</div>
        <h1 style={{
          fontFamily: fonts.serif,
          fontSize: 48,
          fontWeight: 700,
          color: "#FFFFFF",
          margin: "0 auto 16px",
          lineHeight: 1.15,
        }}>Spencer Horstman</h1>
        <p style={{
          fontFamily: fonts.sans,
          fontSize: 16,
          color: "#999",
          maxWidth: 540,
          margin: "0 auto 8px",
          lineHeight: 1.6,
        }}>Product Manager with 9 years of domain expertise in edtech and higher education.</p>
        <p style={{
          fontFamily: fonts.sans,
          fontSize: 15,
          color: "#666",
          margin: "0 auto",
        }}>spencerhorstman@gmail.com · Valley Glen, CA</p>
      </div>

      {/* Case Studies */}
      <div style={{
        maxWidth: 820,
        margin: "0 auto",
        padding: "60px 24px 80px",
      }}>
        <div style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#2D5F2D",
          marginBottom: 24,
        }}>Case Studies</div>

        {/* Common App Card */}
        <div
          onClick={() => onNavigate("commonapp")}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E8E6E3",
            borderRadius: 12,
            padding: 32,
            marginBottom: 20,
            cursor: "pointer",
            transition: "box-shadow 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <span style={{
                  padding: "4px 10px", borderRadius: 4, background: "#E8F0E8",
                  fontFamily: fonts.mono, fontSize: 10, fontWeight: 600, color: "#2D5F2D",
                }}>Product Redesign</span>
                <span style={{
                  padding: "4px 10px", borderRadius: 4, background: "#EBF2F8",
                  fontFamily: fonts.mono, fontSize: 10, fontWeight: 600, color: "#3B6B9E",
                }}>UX Improvement</span>
              </div>
              <h2 style={{
                fontFamily: fonts.serif,
                fontSize: 26,
                fontWeight: 700,
                color: "#1A1A1A",
                margin: "0 0 8px",
                lineHeight: 1.2,
              }}>Redesigning the Common App Supplement Experience</h2>
              <p style={{
                fontFamily: fonts.sans,
                fontSize: 15,
                color: "#6B6B6B",
                lineHeight: 1.6,
                margin: 0,
              }}>A unified supplement dashboard that reduces missed requirements and helps 1M+ students manage their college applications with confidence.</p>
            </div>
            <div style={{
              fontFamily: fonts.sans,
              fontSize: 14,
              fontWeight: 600,
              color: "#2D5F2D",
              whiteSpace: "nowrap",
              paddingTop: 4,
            }}>Read Case Study →</div>
          </div>
        </div>

        {/* Prospect Card */}
        <div
          onClick={() => onNavigate("prospect")}
          style={{
            background: "#FFFFFF",
            border: "1px solid #E8E6E3",
            borderRadius: 12,
            padding: 32,
            marginBottom: 20,
            cursor: "pointer",
            transition: "box-shadow 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <span style={{
                  padding: "4px 10px", borderRadius: 4, background: "#E3EDF4",
                  fontFamily: fonts.mono, fontSize: 10, fontWeight: 600, color: "#1B4965",
                }}>0 → 1 Concept</span>
                <span style={{
                  padding: "4px 10px", borderRadius: 4, background: "#F0ECF5",
                  fontFamily: fonts.mono, fontSize: 10, fontWeight: 600, color: "#6B4C9A",
                }}>Mobile App</span>
              </div>
              <h2 style={{
                fontFamily: fonts.serif,
                fontSize: 26,
                fontWeight: 700,
                color: "#1A1A1A",
                margin: "0 0 8px",
                lineHeight: 1.2,
              }}>Prospect — The College Admissions Co-Pilot</h2>
              <p style={{
                fontFamily: fonts.sans,
                fontSize: 15,
                color: "#6B6B6B",
                lineHeight: 1.6,
                margin: 0,
              }}>A mobile-first app that helps students build balanced school lists and write standout supplements — democratizing access to admissions guidance.</p>
            </div>
            <div style={{
              fontFamily: fonts.sans,
              fontSize: 14,
              fontWeight: 600,
              color: "#1B4965",
              whiteSpace: "nowrap",
              paddingTop: 4,
            }}>Read Case Study →</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "fixed",
        top: 20,
        left: 20,
        zIndex: 1000,
        padding: "8px 16px",
        background: "rgba(255,255,255,0.95)",
        border: "1px solid #E8E6E3",
        borderRadius: 8,
        cursor: "pointer",
        fontFamily: fonts.sans,
        fontSize: 13,
        fontWeight: 600,
        color: "#1A1A1A",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      ← Portfolio
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (target) => {
    setPage(target);
    window.scrollTo(0, 0);
  };

  if (page === "commonapp") {
    return (
      <>
        <BackButton onClick={() => navigate("home")} />
        <CaseStudy />
      </>
    );
  }

  if (page === "prospect") {
    return (
      <>
        <BackButton onClick={() => navigate("home")} />
        <ProspectCaseStudy />
      </>
    );
  }

  return <HomePage onNavigate={navigate} />;
}
