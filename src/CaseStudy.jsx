import { useState } from "react";

const COLORS = {
  bg: "#FAFAF8",
  surface: "#FFFFFF",
  text: "#1A1A1A",
  textMuted: "#6B6B6B",
  textLight: "#9B9B9B",
  accent: "#2D5F2D",
  accentLight: "#E8F0E8",
  accentMid: "#4A8B4A",
  border: "#E8E6E3",
  borderLight: "#F0EEEB",
  red: "#C4483E",
  redLight: "#FDF0EF",
  amber: "#B8860B",
  amberLight: "#FFF8E7",
  green: "#2D5F2D",
  greenLight: "#E8F0E8",
  blue: "#3B6B9E",
  blueLight: "#EBF2F8",
  wireframe: "#F5F4F2",
  wireframeBorder: "#D4D1CC",
  wireframeAccent: "#8B8680",
};

const SectionLabel = ({ children }) => (
  <div style={{
    fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: COLORS.accent,
    marginBottom: 12,
  }}>{children}</div>
);

const SectionTitle = ({ children }) => (
  <h2 style={{
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 32,
    fontWeight: 700,
    color: COLORS.text,
    margin: "0 0 16px 0",
    lineHeight: 1.2,
  }}>{children}</h2>
);

const Body = ({ children, style = {} }) => (
  <p style={{
    fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
    fontSize: 16,
    lineHeight: 1.7,
    color: COLORS.textMuted,
    margin: "0 0 16px 0",
    ...style,
  }}>{children}</p>
);

const Divider = () => (
  <div style={{ width: 48, height: 2, background: COLORS.accent, margin: "40px 0", opacity: 0.4 }} />
);

const Card = ({ children, style = {} }) => (
  <div style={{
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 8,
    padding: 24,
    ...style,
  }}>{children}</div>
);

const MetricCard = ({ value, label, color = COLORS.accent }) => (
  <div style={{
    textAlign: "center",
    padding: "20px 16px",
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 8,
    flex: 1,
    minWidth: 140,
  }}>
    <div style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: 36,
      fontWeight: 700,
      color,
      marginBottom: 4,
    }}>{value}</div>
    <div style={{
      fontFamily: "'Source Sans 3', sans-serif",
      fontSize: 13,
      color: COLORS.textMuted,
      lineHeight: 1.4,
    }}>{label}</div>
  </div>
);

const PainPointCard = ({ number, title, description, stat }) => (
  <div style={{
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 8,
    padding: 24,
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
  }}>
    <div style={{
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: COLORS.redLight,
      color: COLORS.red,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 14,
      fontWeight: 700,
      flexShrink: 0,
    }}>{number}</div>
    <div>
      <div style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 16,
        fontWeight: 600,
        color: COLORS.text,
        marginBottom: 6,
      }}>{title}</div>
      <div style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: 14,
        color: COLORS.textMuted,
        lineHeight: 1.6,
      }}>{description}</div>
      {stat && (
        <div style={{
          marginTop: 10,
          padding: "6px 10px",
          background: COLORS.redLight,
          borderRadius: 4,
          display: "inline-block",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          color: COLORS.red,
          fontWeight: 600,
        }}>{stat}</div>
      )}
    </div>
  </div>
);

const PersonaCard = ({ name, age, role, schools, quote, needs, frustrations }) => (
  <Card style={{ flex: 1, minWidth: 280 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: COLORS.accentLight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Playfair Display', serif",
        fontSize: 18,
        color: COLORS.accent,
        fontWeight: 700,
      }}>{name[0]}</div>
      <div>
        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: 16, color: COLORS.text }}>{name}, {age}</div>
        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: COLORS.textLight }}>{role} · Applying to {schools} schools</div>
      </div>
    </div>
    <div style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: 14,
      fontStyle: "italic",
      color: COLORS.textMuted,
      padding: "12px 16px",
      background: COLORS.wireframe,
      borderLeft: `3px solid ${COLORS.accent}`,
      borderRadius: "0 4px 4px 0",
      marginBottom: 16,
      lineHeight: 1.6,
    }}>"{quote}"</div>
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: COLORS.green, marginBottom: 6, fontWeight: 600 }}>Needs</div>
      {needs.map((n, i) => (
        <div key={i} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: COLORS.textMuted, lineHeight: 1.5, paddingLeft: 12, position: "relative" }}>
          <span style={{ position: "absolute", left: 0 }}>·</span> {n}
        </div>
      ))}
    </div>
    <div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: COLORS.red, marginBottom: 6, fontWeight: 600 }}>Frustrations</div>
      {frustrations.map((f, i) => (
        <div key={i} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: COLORS.textMuted, lineHeight: 1.5, paddingLeft: 12, position: "relative" }}>
          <span style={{ position: "absolute", left: 0 }}>·</span> {f}
        </div>
      ))}
    </div>
  </Card>
);

// Wireframe components
const WireframeBar = ({ width = "60%", height = 10, color = COLORS.wireframeBorder }) => (
  <div style={{ width, height, borderRadius: 3, background: color, flexShrink: 0 }} />
);

const StatusBadge = ({ status }) => {
  const config = {
    complete: { bg: COLORS.greenLight, color: COLORS.green, label: "Complete" },
    "in-progress": { bg: COLORS.amberLight, color: COLORS.amber, label: "In Progress" },
    "not-started": { bg: COLORS.redLight, color: COLORS.red, label: "Not Started" },
    missing: { bg: COLORS.redLight, color: COLORS.red, label: "Missing" },
  };
  const c = config[status];
  return (
    <span style={{
      padding: "3px 8px",
      borderRadius: 4,
      background: c.bg,
      color: c.color,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      fontWeight: 600,
    }}>{c.label}</span>
  );
};

const SupplementRow = ({ school, essay, shortAns, portfolio, deadline, status }) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 0.8fr 0.8fr 0.9fr 0.8fr",
    padding: "10px 14px",
    borderBottom: `1px solid ${COLORS.borderLight}`,
    alignItems: "center",
    fontSize: 12,
    fontFamily: "'Source Sans 3', sans-serif",
  }}>
    <div style={{ fontWeight: 600, color: COLORS.text }}>{school}</div>
    <div style={{ color: COLORS.textMuted }}>{essay}</div>
    <div style={{ color: COLORS.textMuted }}>{shortAns}</div>
    <div style={{ color: COLORS.textMuted }}>{portfolio}</div>
    <div style={{ color: COLORS.textMuted }}>{deadline}</div>
    <div><StatusBadge status={status} /></div>
  </div>
);

// User flow node
const FlowNode = ({ label, sublabel, type = "default" }) => {
  const styles = {
    default: { bg: COLORS.surface, border: COLORS.border, color: COLORS.text },
    action: { bg: COLORS.accentLight, border: COLORS.accent, color: COLORS.accent },
    decision: { bg: COLORS.amberLight, border: COLORS.amber, color: COLORS.amber },
    outcome: { bg: COLORS.greenLight, border: COLORS.green, color: COLORS.green },
    problem: { bg: COLORS.redLight, border: COLORS.red, color: COLORS.red },
  };
  const s = styles[type];
  return (
    <div style={{
      padding: "10px 16px",
      borderRadius: type === "decision" ? 0 : 8,
      background: s.bg,
      border: `2px solid ${s.border}`,
      textAlign: "center",
      transform: type === "decision" ? "rotate(0deg)" : "none",
      minWidth: 120,
    }}>
      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, fontWeight: 600, color: s.color }}>{label}</div>
      {sublabel && <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: COLORS.textMuted, marginTop: 2 }}>{sublabel}</div>}
    </div>
  );
};

const FlowArrow = ({ direction = "down", label }) => (
  <div style={{
    display: "flex",
    flexDirection: direction === "down" ? "column" : "row",
    alignItems: "center",
    gap: 0,
    padding: direction === "down" ? "4px 0" : "0 4px",
  }}>
    <div style={{
      width: direction === "down" ? 2 : 24,
      height: direction === "down" ? 24 : 2,
      background: COLORS.wireframeBorder,
    }} />
    {label && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: COLORS.textLight, padding: "0 6px" }}>{label}</div>}
    <div style={{
      width: 0, height: 0,
      borderLeft: direction === "down" ? "5px solid transparent" : "none",
      borderRight: direction === "down" ? "5px solid transparent" : "5px solid transparent",
      borderTop: direction === "down" ? `6px solid ${COLORS.wireframeBorder}` : "5px solid transparent",
      borderBottom: direction !== "down" ? `6px solid ${COLORS.wireframeBorder}` : "none",
      ...(direction === "right" ? { borderLeft: `6px solid ${COLORS.wireframeBorder}`, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderRight: "none" } : {}),
    }} />
  </div>
);

// RICE Table
const RICERow = ({ feature, reach, impact, confidence, effort, score, rank }) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: "2fr 0.6fr 0.6fr 0.6fr 0.6fr 0.7fr",
    padding: "10px 14px",
    borderBottom: `1px solid ${COLORS.borderLight}`,
    alignItems: "center",
    fontSize: 13,
    fontFamily: "'Source Sans 3', sans-serif",
    background: rank === 1 ? COLORS.greenLight : "transparent",
  }}>
    <div>
      <span style={{ fontWeight: 600, color: COLORS.text }}>{feature}</span>
      {rank === 1 && <span style={{ marginLeft: 8, padding: "2px 6px", borderRadius: 3, background: COLORS.green, color: "#fff", fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}>P0</span>}
      {rank === 2 && <span style={{ marginLeft: 8, padding: "2px 6px", borderRadius: 3, background: COLORS.amber, color: "#fff", fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}>P1</span>}
      {rank === 3 && <span style={{ marginLeft: 8, padding: "2px 6px", borderRadius: 3, background: COLORS.blue, color: "#fff", fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}>P2</span>}
    </div>
    <div style={{ textAlign: "center", color: COLORS.textMuted }}>{reach}</div>
    <div style={{ textAlign: "center", color: COLORS.textMuted }}>{impact}</div>
    <div style={{ textAlign: "center", color: COLORS.textMuted }}>{confidence}%</div>
    <div style={{ textAlign: "center", color: COLORS.textMuted }}>{effort}</div>
    <div style={{ textAlign: "center", fontWeight: 700, color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>{score}</div>
  </div>
);

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", fontFamily: "'Source Sans 3', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        background: "#1A1A1A",
        padding: "80px 40px 60px",
        textAlign: "center",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#7BA97B",
          marginBottom: 20,
        }}>Product Case Study</div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 44,
          fontWeight: 700,
          color: "#FFFFFF",
          margin: "0 auto 16px",
          maxWidth: 700,
          lineHeight: 1.15,
        }}>Redesigning the Common App Supplement Experience</h1>
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: 18,
          color: "#999",
          maxWidth: 560,
          margin: "0 auto 32px",
          lineHeight: 1.6,
        }}>How a unified supplement dashboard could reduce missed requirements and help 1M+ students manage their college applications with confidence.</p>
        <div style={{
          display: "flex",
          gap: 32,
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          {[["Spencer Horstman", "Product Manager"], ["9 Years", "Domain Expertise"], ["100+", "Students Advised"]].map(([val, label], i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#fff", fontWeight: 700 }}>{val}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#666", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Executive Summary */}
        <SectionLabel>Executive Summary</SectionLabel>
        <SectionTitle>The Problem</SectionTitle>
        <Body>The Common Application serves over 1 million students annually, yet its supplement tracking experience remains one of its most significant usability gaps. Each member institution structures its supplemental requirements differently within the platform — essays, short-answer questions, portfolio uploads, and activity-specific prompts are placed inconsistently from school to school, with no standardized taxonomy or unified view.</Body>
        <Body>For students applying to 10–20 schools, this creates a fragmented experience where requirements are easy to miss, progress is difficult to track, and the cognitive load of managing dozens of disparate supplements across varying deadlines leads to preventable errors — errors that can cost students admission to their target schools.</Body>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "24px 0 32px" }}>
          <MetricCard value="1M+" label="Students use Common App annually" />
          <MetricCard value="~40%" label="Apply to 7+ schools" color={COLORS.amber} />
          <MetricCard value="900+" label="Member institutions" />
          <MetricCard value="0" label="Unified supplement views" color={COLORS.red} />
        </div>

        <Divider />

        {/* Pain Points */}
        <SectionLabel>Research & Discovery</SectionLabel>
        <SectionTitle>Pain Points from the Field</SectionTitle>
        <Body>These findings are drawn from 9 years of direct observation working with 100+ students through the Common App process. Each pain point represents a pattern observed repeatedly across cohorts, not isolated incidents.</Body>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "24px 0" }}>
          <PainPointCard
            number="1"
            title="Supplements Are Invisible Until It's Too Late"
            description="Students add a school to their list and see the main application, but supplemental requirements are buried within each school's section. Many don't discover a required essay until days before a deadline — especially for schools added later in the cycle."
            stat="Observed in ~60% of student cohorts"
          />
          <PainPointCard
            number="2"
            title="No Unified View Across Schools"
            description="There is no single screen where a student can see all supplement requirements across all their schools. To check status, they must click into each school individually — a tedious process that discourages regular review."
            stat="Avg. student checks each school only 2-3x before deadline"
          />
          <PainPointCard
            number="3"
            title="Completion Status Is Hard to Track"
            description="For a student applying to 15 schools, tracking which supplements are done, which are in draft, and which haven't been started requires manual record-keeping (spreadsheets, notebooks). The platform provides no aggregate progress view."
            stat="Students managing 10-20 parallel applications"
          />
          <PainPointCard
            number="4"
            title="Non-Standardized Supplement Placement"
            description="School A might place its essay supplement under 'Writing,' School B under 'Questions,' and School C on an entirely different tab. This inconsistency means students can't build a mental model of where to look, increasing the chance of missing requirements."
            stat="Varies across 900+ member institutions"
          />
        </div>

        <Divider />

        {/* Personas */}
        <SectionLabel>User Personas</SectionLabel>
        <SectionTitle>Who We're Designing For</SectionTitle>
        <Body>Two primary personas emerge from direct consulting experience. While both use the Common App, their needs and failure modes differ significantly.</Body>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "24px 0" }}>
          <PersonaCard
            name="Maya"
            age={17}
            role="High-achieving, self-directed applicant"
            schools={16}
            quote="I thought I'd finished all my Stanford supplements, but two days before the deadline I realized there was a short-answer section I'd completely missed."
            needs={[
              "See all requirements across schools at a glance",
              "Track completion status without a separate spreadsheet",
              "Know immediately when a newly added school has supplements",
            ]}
            frustrations={[
              "Different schools organize supplements in different places",
              "No alerts for incomplete supplements near deadlines",
              "Has to click into each school individually to check progress",
            ]}
          />
          <PersonaCard
            name="David"
            age={45}
            role="Parent / sponsor monitoring progress"
            schools="12 (his daughter's)"
            quote="I have no way to see if she's actually done everything. I just have to trust the spreadsheet she showed me two weeks ago."
            needs={[
              "High-level view of daughter's completion progress",
              "Confidence that nothing is missing before submission",
              "Visibility without micromanaging the actual content",
            ]}
            frustrations={[
              "No parent-facing progress dashboard",
              "Can't verify completion without looking over her shoulder",
              "Deadline anxiety with no structured way to track",
            ]}
          />
        </div>

        <Divider />

        {/* User Flows */}
        <SectionLabel>Current vs. Proposed Flow</SectionLabel>
        <SectionTitle>User Journey Comparison</SectionTitle>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", margin: "24px 0" }}>
          {/* Current Flow */}
          <Card style={{ flex: 1, minWidth: 300 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: COLORS.red,
              marginBottom: 16,
            }}>Current State</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
              <FlowNode label="Add School" sublabel="to My Colleges list" />
              <FlowArrow />
              <FlowNode label="Open School Page" sublabel="Click into individual school" />
              <FlowArrow />
              <FlowNode label="Hunt for Supplements" sublabel="Check each tab/section" type="problem" />
              <FlowArrow />
              <FlowNode label="Found Something?" sublabel="Or maybe not..." type="decision" />
              <FlowArrow label="repeat x 15 schools" />
              <FlowNode label="Manually Track" sublabel="Spreadsheet / notebook" type="problem" />
              <FlowArrow />
              <FlowNode label="Submit & Hope" sublabel="Nothing was missed" type="problem" />
            </div>
          </Card>

          {/* Proposed Flow */}
          <Card style={{ flex: 1, minWidth: 300 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: COLORS.green,
              marginBottom: 16,
            }}>Proposed State</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
              <FlowNode label="Add School" sublabel="to My Colleges list" />
              <FlowArrow />
              <FlowNode label="Auto-Detect Supplements" sublabel="Dashboard populates instantly" type="action" />
              <FlowArrow />
              <FlowNode label="Supplement Dashboard" sublabel="All schools, one view" type="action" />
              <FlowArrow />
              <FlowNode label="Track Progress" sublabel="Real-time status per item" type="outcome" />
              <FlowArrow />
              <FlowNode label="Deadline Alerts" sublabel="Proactive notifications" type="outcome" />
              <FlowArrow />
              <FlowNode label="Submit with Confidence" sublabel="Verified complete" type="outcome" />
            </div>
          </Card>
        </div>

        <Divider />

        {/* Solution Design */}
        <SectionLabel>Solution Design</SectionLabel>
        <SectionTitle>The Supplement Dashboard</SectionTitle>
        <Body>The core proposal is a centralized Supplement Dashboard — a new top-level navigation item that aggregates all supplemental requirements across a student's entire college list into a single, filterable, trackable view.</Body>

        {/* Wireframe Tabs */}
        <div style={{ margin: "24px 0" }}>
          <div style={{ display: "flex", gap: 0, marginBottom: 0 }}>
            {[
              ["dashboard", "Dashboard View"],
              ["detail", "School Detail"],
              ["alerts", "Alert System"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: "10px 20px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  fontWeight: activeTab === key ? 700 : 400,
                  color: activeTab === key ? COLORS.accent : COLORS.textLight,
                  background: activeTab === key ? COLORS.surface : COLORS.wireframe,
                  border: `1px solid ${COLORS.border}`,
                  borderBottom: activeTab === key ? `1px solid ${COLORS.surface}` : `1px solid ${COLORS.border}`,
                  borderRadius: "6px 6px 0 0",
                  cursor: "pointer",
                  marginRight: -1,
                  position: "relative",
                  zIndex: activeTab === key ? 1 : 0,
                }}
              >{label}</button>
            ))}
          </div>

          {/* Dashboard Wireframe */}
          {activeTab === "dashboard" && (
            <Card style={{ borderRadius: "0 8px 8px 8px", borderTop: `1px solid ${COLORS.border}` }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: COLORS.textLight, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em" }}>Wireframe: Supplement Dashboard</div>

              {/* Progress Bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, padding: "16px", background: COLORS.wireframe, borderRadius: 8 }}>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, fontWeight: 600, color: COLORS.text, whiteSpace: "nowrap" }}>Overall Progress</div>
                <div style={{ flex: 1, height: 12, background: COLORS.borderLight, borderRadius: 6, overflow: "hidden" }}>
                  <div style={{ width: "58%", height: "100%", background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accentMid})`, borderRadius: 6 }} />
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700, color: COLORS.accent }}>58%</div>
              </div>

              {/* Filter Bar */}
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {["All Schools", "Incomplete", "Due This Week", "Due This Month"].map((f, i) => (
                  <div key={i} style={{
                    padding: "5px 12px",
                    borderRadius: 4,
                    background: i === 0 ? COLORS.accentLight : COLORS.wireframe,
                    border: `1px solid ${i === 0 ? COLORS.accent : COLORS.border}`,
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: 12,
                    color: i === 0 ? COLORS.accent : COLORS.textMuted,
                    fontWeight: i === 0 ? 600 : 400,
                  }}>{f}</div>
                ))}
              </div>

              {/* Table Header */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr 0.8fr 0.8fr 0.9fr 0.8fr",
                padding: "8px 14px",
                background: COLORS.wireframe,
                borderRadius: "6px 6px 0 0",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                fontWeight: 600,
                color: COLORS.textLight,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                <div>School</div>
                <div>Essays</div>
                <div>Short Ans.</div>
                <div>Portfolio</div>
                <div>Deadline</div>
                <div>Status</div>
              </div>

              <SupplementRow school="Stanford University" essay="2 of 3 done" shortAns="0 of 2" portfolio="N/A" deadline="Jan 2" status="in-progress" />
              <SupplementRow school="Columbia University" essay="1 of 1 done" shortAns="3 of 3" portfolio="Uploaded" deadline="Jan 1" status="complete" />
              <SupplementRow school="MIT" essay="0 of 5" shortAns="0 of 1" portfolio="N/A" deadline="Jan 5" status="not-started" />
              <SupplementRow school="University of Michigan" essay="1 of 2 done" shortAns="N/A" portfolio="N/A" deadline="Feb 1" status="in-progress" />
              <SupplementRow school="NYU" essay="0 of 1" shortAns="0 of 2" portfolio="Required" deadline="Jan 5" status="not-started" />

              <div style={{ marginTop: 16, padding: 12, background: COLORS.amberLight, borderRadius: 6, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 16 }}>⚠</span>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: COLORS.amber }}>
                  <strong>3 schools</strong> have incomplete supplements due within 7 days
                </div>
              </div>
            </Card>
          )}

          {/* School Detail Wireframe */}
          {activeTab === "detail" && (
            <Card style={{ borderRadius: "0 8px 8px 8px", borderTop: `1px solid ${COLORS.border}` }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: COLORS.textLight, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em" }}>Wireframe: School Detail — Stanford University</div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: COLORS.text }}>Stanford University</div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: COLORS.textMuted }}>Deadline: January 2 · Regular Decision</div>
                </div>
                <div style={{
                  padding: "8px 16px",
                  borderRadius: 6,
                  background: COLORS.amberLight,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  fontWeight: 600,
                  color: COLORS.amber,
                }}>4 of 6 items remaining</div>
              </div>

              {/* Supplement items */}
              {[
                { type: "Essay", title: "Intellectual Vitality (250 words)", status: "complete" },
                { type: "Essay", title: "Meaningful Experience (250 words)", status: "in-progress" },
                { type: "Essay", title: "Letter to Roommate (250 words)", status: "not-started" },
                { type: "Short Answer", title: "What matters most to you? (50 words)", status: "not-started" },
                { type: "Short Answer", title: "Five words that describe you", status: "not-started" },
                { type: "Activity", title: "Arts Portfolio (optional)", status: "not-started" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderBottom: `1px solid ${COLORS.borderLight}`,
                  background: item.status === "complete" ? COLORS.greenLight : "transparent",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      border: `2px solid ${item.status === "complete" ? COLORS.green : COLORS.border}`,
                      background: item.status === "complete" ? COLORS.green : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 12,
                    }}>{item.status === "complete" ? "✓" : ""}</div>
                    <div>
                      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, fontWeight: 600, color: COLORS.text }}>{item.title}</div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: COLORS.textLight, textTransform: "uppercase" }}>{item.type}</div>
                    </div>
                  </div>
                  <StatusBadge status={item.status} />
                </div>
              ))}
            </Card>
          )}

          {/* Alerts Wireframe */}
          {activeTab === "alerts" && (
            <Card style={{ borderRadius: "0 8px 8px 8px", borderTop: `1px solid ${COLORS.border}` }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: COLORS.textLight, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em" }}>Wireframe: Proactive Alert System</div>

              {[
                { urgency: "critical", icon: "🔴", title: "MIT has 6 incomplete supplements", subtitle: "Deadline in 3 days — Jan 5", action: "Go to MIT supplements →" },
                { urgency: "warning", icon: "🟡", title: "Stanford supplement discovered", subtitle: "A short-answer section was added after you started your application", action: "Review new requirement →" },
                { urgency: "info", icon: "🔵", title: "Similar prompts detected across 3 schools", subtitle: "Stanford, Columbia, and NYU have overlapping essay prompts — consider reusing content", action: "View comparison →" },
                { urgency: "success", icon: "🟢", title: "Columbia University — all supplements complete", subtitle: "Ready for final review and submission", action: "Review & submit →" },
              ].map((alert, i) => {
                const colors = {
                  critical: { bg: COLORS.redLight, border: COLORS.red, text: COLORS.red },
                  warning: { bg: COLORS.amberLight, border: COLORS.amber, text: COLORS.amber },
                  info: { bg: COLORS.blueLight, border: COLORS.blue, text: COLORS.blue },
                  success: { bg: COLORS.greenLight, border: COLORS.green, text: COLORS.green },
                };
                const c = colors[alert.urgency];
                return (
                  <div key={i} style={{
                    padding: "16px",
                    background: c.bg,
                    borderLeft: `4px solid ${c.border}`,
                    borderRadius: "0 6px 6px 0",
                    marginBottom: 12,
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ fontSize: 14 }}>{alert.icon}</span>
                      <div>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, fontWeight: 600, color: COLORS.text }}>{alert.title}</div>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: COLORS.textMuted, marginTop: 2 }}>{alert.subtitle}</div>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, fontWeight: 600, color: c.text, marginTop: 8, cursor: "pointer" }}>{alert.action}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Card>
          )}
        </div>

        <Divider />

        {/* Prioritization */}
        <SectionLabel>Prioritization</SectionLabel>
        <SectionTitle>RICE Framework</SectionTitle>
        <Body>Features are scored using the RICE framework (Reach × Impact × Confidence ÷ Effort) to determine build order. Reach is measured as percentage of Common App users affected per quarter. Impact is scored 0.5–3. Effort is in engineer-months.</Body>

        <Card style={{ margin: "24px 0", padding: 0, overflow: "hidden" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 0.6fr 0.6fr 0.6fr 0.6fr 0.7fr",
            padding: "10px 14px",
            background: COLORS.wireframe,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            fontWeight: 600,
            color: COLORS.textLight,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}>
            <div>Feature</div>
            <div style={{ textAlign: "center" }}>Reach</div>
            <div style={{ textAlign: "center" }}>Impact</div>
            <div style={{ textAlign: "center" }}>Conf.</div>
            <div style={{ textAlign: "center" }}>Effort</div>
            <div style={{ textAlign: "center" }}>Score</div>
          </div>
          <RICERow feature="Supplement Dashboard (aggregate view)" reach="80%" impact={3} confidence={90} effort="3 mo" score="72" rank={1} />
          <RICERow feature="Deadline-based alert system" reach="80%" impact={2} confidence={85} effort="2 mo" score="68" rank={2} />
          <RICERow feature="Standardized supplement taxonomy" reach="70%" impact={3} confidence={70} effort="5 mo" score="29" rank={3} />
          <RICERow feature="Prompt similarity detection" reach="40%" impact={1} confidence={60} effort="4 mo" score="6" rank={0} />
          <RICERow feature="Parent/sponsor progress view" reach="30%" impact={1.5} confidence={50} effort="3 mo" score="8" rank={0} />
        </Card>

        <Body>The Supplement Dashboard scores highest because it addresses all four pain points simultaneously with relatively contained engineering effort — it's a read-only aggregation layer over data that already exists in the platform. The alert system is a natural second phase that builds on the dashboard's data model.</Body>

        <Divider />

        {/* Success Metrics */}
        <SectionLabel>Success Metrics</SectionLabel>
        <SectionTitle>How We'd Measure Impact</SectionTitle>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "24px 0" }}>
          {[
            { metric: "Incomplete Submission Rate", current: "~12%", target: "<5%", desc: "Students who submit with missing supplements" },
            { metric: "Supplement Discovery Time", current: "Avg. 4+ sessions", target: "<1 session", desc: "Time to identify all requirements for a new school" },
            { metric: "Dashboard Engagement", current: "N/A", target: ">70% WAU", desc: "Weekly active usage of supplement dashboard" },
            { metric: "Late Supplement Completion", current: "~25% within 48hrs", target: "<10%", desc: "Supplements completed within 48 hours of deadline" },
          ].map((m, i) => (
            <Card key={i} style={{ padding: 20 }}>
              <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 15, fontWeight: 600, color: COLORS.text, marginBottom: 8 }}>{m.metric}</div>
              <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: COLORS.textMuted, marginBottom: 12 }}>{m.desc}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  padding: "4px 10px",
                  borderRadius: 4,
                  background: COLORS.redLight,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  fontWeight: 600,
                  color: COLORS.red,
                }}>{m.current}</div>
                <div style={{ color: COLORS.textLight, fontSize: 16 }}>→</div>
                <div style={{
                  padding: "4px 10px",
                  borderRadius: 4,
                  background: COLORS.greenLight,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  fontWeight: 600,
                  color: COLORS.green,
                }}>{m.target}</div>
              </div>
            </Card>
          ))}
        </div>

        <Divider />

        {/* Risks & Tradeoffs */}
        <SectionLabel>Risks & Tradeoffs</SectionLabel>
        <SectionTitle>What Could Go Wrong</SectionTitle>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "24px 0" }}>
          {[
            { risk: "Institutional resistance to standardization", mitigation: "Phase 1 (Dashboard) doesn't require any changes from schools — it aggregates existing data. Standardization is Phase 3 and can be incremental.", severity: "Medium" },
            { risk: "Data accuracy for supplement detection", mitigation: "Build a verification step where students confirm detected supplements. Use school-reported data as the source of truth with a feedback loop for corrections.", severity: "High" },
            { risk: "Scope creep into full application redesign", mitigation: "The dashboard is scoped as a read-only overlay. It pulls data from existing school pages without modifying the core application flow.", severity: "Low" },
          ].map((r, i) => (
            <Card key={i} style={{ display: "flex", gap: 16 }}>
              <div style={{
                padding: "4px 10px",
                borderRadius: 4,
                background: r.severity === "High" ? COLORS.redLight : r.severity === "Medium" ? COLORS.amberLight : COLORS.greenLight,
                color: r.severity === "High" ? COLORS.red : r.severity === "Medium" ? COLORS.amber : COLORS.green,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                fontWeight: 600,
                height: "fit-content",
                whiteSpace: "nowrap",
              }}>{r.severity}</div>
              <div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 15, fontWeight: 600, color: COLORS.text, marginBottom: 4 }}>{r.risk}</div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: COLORS.textMuted, lineHeight: 1.6 }}>{r.mitigation}</div>
              </div>
            </Card>
          ))}
        </div>

        <Divider />

        {/* About */}
        <div style={{ textAlign: "center", padding: "40px 0 20px" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: COLORS.accent, marginBottom: 12 }}>About the Author</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: COLORS.text, marginBottom: 8 }}>Spencer Horstman</div>
          <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 15, color: COLORS.textMuted, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Product Manager with 9 years of experience in educational consulting. This case study is informed by direct observation of 100+ students navigating the Common Application process across multiple admissions cycles.
          </div>
          <div style={{ marginTop: 16, fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, color: COLORS.textLight }}>
            spencerhorstman@gmail.com · Valley Glen, CA
          </div>
        </div>
      </div>
    </div>
  );
}
