import { useState } from "react";

const C = {
  bg: "#F8F8FA", surface: "#FFFFFF", text: "#1A1A1A", muted: "#6B6B6B",
  light: "#9B9B9B", accent: "#1B4965", accentLight: "#E3EDF4", accentMid: "#3A7CA5",
  border: "#E3E1DE", borderLight: "#EEECE9",
  red: "#C4483E", redLight: "#FDF0EF", amber: "#B8860B", amberLight: "#FFF8E7",
  green: "#2D5F2D", greenLight: "#E8F0E8", blue: "#3B6B9E", blueLight: "#EBF2F8",
  purple: "#6B4C9A", purpleLight: "#F0ECF5",
  wire: "#F5F4F2", wireBorder: "#D4D1CC",
};

const fonts = {
  serif: "'Playfair Display', Georgia, serif",
  sans: "'Source Sans 3', 'Source Sans Pro', sans-serif",
  mono: "'JetBrains Mono', 'SF Mono', monospace",
};

const Label = ({ children }) => (
  <div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: C.accent, marginBottom: 12 }}>{children}</div>
);
const Title = ({ children }) => (
  <h2 style={{ fontFamily: fonts.serif, fontSize: 32, fontWeight: 700, color: C.text, margin: "0 0 16px 0", lineHeight: 1.2 }}>{children}</h2>
);
const Body = ({ children, style = {} }) => (
  <p style={{ fontFamily: fonts.sans, fontSize: 16, lineHeight: 1.7, color: C.muted, margin: "0 0 16px 0", ...style }}>{children}</p>
);
const Divider = () => (
  <div style={{ width: 48, height: 2, background: C.accent, margin: "40px 0", opacity: 0.4 }} />
);
const Card = ({ children, style = {} }) => (
  <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: 24, ...style }}>{children}</div>
);

// Phone wireframe wrapper
const PhoneFrame = ({ children, label }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
    <div style={{
      width: 280, minHeight: 500, background: C.surface, borderRadius: 28,
      border: `2px solid ${C.border}`, padding: "40px 0 24px", position: "relative", overflow: "hidden",
      boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
    }}>
      {/* Notch */}
      <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 80, height: 24, background: C.text, borderRadius: 12 }} />
      <div style={{ padding: "0 16px", height: "100%" }}>
        {children}
      </div>
    </div>
    {label && <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.light, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>}
  </div>
);

// Mini status chips
const Chip = ({ label, color, bg }) => (
  <span style={{ padding: "3px 8px", borderRadius: 10, background: bg, color, fontFamily: fonts.mono, fontSize: 9, fontWeight: 600 }}>{label}</span>
);

const MetricCard = ({ value, label, color = C.accent }) => (
  <div style={{ textAlign: "center", padding: "18px 14px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, flex: 1, minWidth: 130 }}>
    <div style={{ fontFamily: fonts.serif, fontSize: 34, fontWeight: 700, color, marginBottom: 4 }}>{value}</div>
    <div style={{ fontFamily: fonts.sans, fontSize: 12, color: C.muted, lineHeight: 1.4 }}>{label}</div>
  </div>
);

const PersonaCard = ({ name, age, role, context, quote, needs, frustrations, initial }) => (
  <Card style={{ flex: 1, minWidth: 260 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
      <div style={{ width: 42, height: 42, borderRadius: "50%", background: C.accentLight, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fonts.serif, fontSize: 18, color: C.accent, fontWeight: 700 }}>{initial}</div>
      <div>
        <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 15, color: C.text }}>{name}, {age}</div>
        <div style={{ fontFamily: fonts.sans, fontSize: 12, color: C.light }}>{role} · {context}</div>
      </div>
    </div>
    <div style={{ fontFamily: fonts.serif, fontSize: 13, fontStyle: "italic", color: C.muted, padding: "10px 14px", background: C.wire, borderLeft: `3px solid ${C.accent}`, borderRadius: "0 4px 4px 0", marginBottom: 14, lineHeight: 1.6 }}>"{quote}"</div>
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontFamily: fonts.mono, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: C.green, marginBottom: 5, fontWeight: 600 }}>Needs</div>
      {needs.map((n, i) => <div key={i} style={{ fontFamily: fonts.sans, fontSize: 12, color: C.muted, lineHeight: 1.5, paddingLeft: 10, position: "relative" }}><span style={{ position: "absolute", left: 0 }}>·</span> {n}</div>)}
    </div>
    <div>
      <div style={{ fontFamily: fonts.mono, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: C.red, marginBottom: 5, fontWeight: 600 }}>Frustrations</div>
      {frustrations.map((f, i) => <div key={i} style={{ fontFamily: fonts.sans, fontSize: 12, color: C.muted, lineHeight: 1.5, paddingLeft: 10, position: "relative" }}><span style={{ position: "absolute", left: 0 }}>·</span> {f}</div>)}
    </div>
  </Card>
);

// RICE table
const RICERow = ({ feature, reach, impact, confidence, effort, score, priority }) => (
  <div style={{
    display: "grid", gridTemplateColumns: "2fr 0.6fr 0.6fr 0.6fr 0.6fr 0.7fr",
    padding: "10px 14px", borderBottom: `1px solid ${C.borderLight}`, alignItems: "center", fontSize: 13,
    fontFamily: fonts.sans, background: priority === "P0" ? C.accentLight : "transparent",
  }}>
    <div>
      <span style={{ fontWeight: 600, color: C.text }}>{feature}</span>
      {priority && <span style={{ marginLeft: 8, padding: "2px 6px", borderRadius: 3, color: "#fff", fontSize: 9, fontFamily: fonts.mono,
        background: priority === "P0" ? C.accent : priority === "P1" ? C.amber : C.blue }}>{priority}</span>}
    </div>
    <div style={{ textAlign: "center", color: C.muted }}>{reach}</div>
    <div style={{ textAlign: "center", color: C.muted }}>{impact}</div>
    <div style={{ textAlign: "center", color: C.muted }}>{confidence}%</div>
    <div style={{ textAlign: "center", color: C.muted }}>{effort}</div>
    <div style={{ textAlign: "center", fontWeight: 700, color: C.accent, fontFamily: fonts.mono }}>{score}</div>
  </div>
);

export default function ProspectCaseStudy() {
  const [activeScreen, setActiveScreen] = useState("onboarding");

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1B4965 0%, #2D6A8E 50%, #3A7CA5 100%)", padding: "80px 40px 60px", textAlign: "center" }}>
        <div style={{ fontFamily: fonts.mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>Product Case Study · 0-to-1 Concept</div>
        <div style={{ fontFamily: fonts.serif, fontSize: 56, fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: "-0.01em" }}>Prospect</div>
        <h1 style={{ fontFamily: fonts.serif, fontSize: 28, fontWeight: 400, fontStyle: "italic", color: "rgba(255,255,255,0.85)", margin: "0 auto 20px", maxWidth: 600, lineHeight: 1.3 }}>The college admissions co-pilot every student deserves, not just the ones who can afford a private consultant.</h1>
        <p style={{ fontFamily: fonts.sans, fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>A mobile-first app that helps students build balanced school lists and write standout supplements, powered by AI guidance and real admissions intelligence.</p>
        <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
          {[["Spencer Horstman", "Product Manager"], ["0 → 1", "Product Concept"], ["Mobile-First", "Web Accessible"]].map(([v, l], i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: fonts.serif, fontSize: 20, color: "#fff", fontWeight: 700 }}>{v}</div>
              <div style={{ fontFamily: fonts.mono, fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Market Opportunity */}
        <Label>Market Opportunity</Label>
        <Title>The Access Gap in College Admissions</Title>
        <Body>Every year, approximately 3.7 million students graduate from U.S. high schools. Of those, roughly 2 million apply to four-year colleges. The vast majority navigate this process with minimal guidance. The average public school counselor manages 400+ students, leaving most with fewer than 20 minutes of individual college advising per year.</Body>
        <Body>Meanwhile, families who can afford private consultants (charging $5,000–$25,000+) receive personalized list-building, essay coaching, and application strategy. This creates a two-tier system where access to guidance, not ability, determines outcomes. Prospect exists to close that gap.</Body>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", margin: "24px 0 28px" }}>
          <MetricCard value="3.7M" label="U.S. high school graduates annually" />
          <MetricCard value="400:1" label="Avg. student-to-counselor ratio" color={C.red} />
          <MetricCard value="$200B+" label="Higher ed market size" color={C.amber} />
          <MetricCard value="<20min" label="Avg. college advising per student/year" color={C.red} />
        </div>

        <Card style={{ margin: "0 0 24px", padding: 20, background: C.accentLight, border: `1px solid ${C.accent}30` }}>
          <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.accent, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, fontWeight: 600 }}>The Insight</div>
          <div style={{ fontFamily: fonts.serif, fontSize: 18, color: C.text, lineHeight: 1.5, fontStyle: "italic" }}>"After 9 years of consulting, I realized the biggest value I provide isn't expertise. It's structure. I help students see which schools actually fit them, spot the overlap in their essay prompts, and stay on track. That's not magic. It's a system, and systems can scale."</div>
          <div style={{ fontFamily: fonts.sans, fontSize: 13, color: C.muted, marginTop: 8 }}>— Spencer Horstman</div>
        </Card>

        <Divider />

        {/* Pain Points */}
        <Label>Research & Discovery</Label>
        <Title>What Goes Wrong Without Guidance</Title>
        <Body>These findings draw from 9 years of direct observation across 100+ students. They represent systemic failures in how students approach the admissions process without structured support.</Body>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "24px 0" }}>
          {[
            { icon: "🎯", title: "Prestige-Driven List Building", desc: "Students select schools based on brand recognition and rankings rather than fit. Lists are top-heavy with reaches, leaving students vulnerable to rejections across the board.", area: "List Building", color: C.red },
            { icon: "⚖️", title: "Unbalanced Application Portfolios", desc: "Without a framework for categorizing schools as reach/match/safety, students cluster at one tier. Some apply to 15 reaches and 1 safety.", area: "List Building", color: C.red },
            { icon: "📝", title: "Generic, Interchangeable Essays", desc: "Students write supplements that could apply to any school. They don't understand what each institution values or how to differentiate their narrative per school.", area: "Writing", color: C.amber },
            { icon: "🔄", title: "Missed Prompt Overlaps", desc: "Students rewrite essays from scratch for every school without realizing that multiple prompts are asking essentially the same question in different words.", area: "Writing", color: C.amber },
            { icon: "⏰", title: "Late Starts, Rushed Supplements", desc: "Students focus on early deadlines and run out of time for later ones. Supplements for February-deadline schools are often written the night before.", area: "Timeline", color: C.purple },
            { icon: "👨‍👩‍👧", title: "Parent-Student Misalignment", desc: "Parents push for brand-name schools without understanding admissions probability. This creates conflict and leads to lists that don't serve the student.", area: "Family", color: C.blue },
          ].map((p, i) => (
            <Card key={i} style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>{p.icon}</span>
                <Chip label={p.area} color={p.color} bg={p.color + "18"} />
              </div>
              <div style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 6 }}>{p.title}</div>
              <div style={{ fontFamily: fonts.sans, fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{p.desc}</div>
            </Card>
          ))}
        </div>

        <Divider />

        {/* Personas */}
        <Label>User Personas</Label>
        <Title>Who Prospect Serves</Title>
        <Body>Prospect is designed for three distinct user types who intersect during the admissions process. The primary user is the student, but the product must also account for parental involvement and the counselor's limited bandwidth.</Body>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "24px 0" }}>
          <PersonaCard
            name="Jaylen" age={17} initial="J"
            role="First-generation college applicant"
            context="Public school, 480:1 counselor ratio"
            quote="My counselor told me to 'aim for state schools' but I have a 3.9 and strong extracurriculars. I just don't know which schools would actually want someone like me."
            needs={["Data-driven school recommendations based on his actual profile", "Understanding of what makes him competitive at specific schools", "Essay guidance that helps him tell his story authentically"]}
            frustrations={["No one in his family has navigated this process before", "His counselor has 480 students and 20 minutes per student", "Free resources online are generic and overwhelming"]}
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <PersonaCard
              name="Maria" age={44} initial="M"
              role="Parent, household income $62K"
              context="Wants the best for Jaylen"
              quote="I know college is important but I can't afford a consultant. I just want to make sure he's not missing opportunities because we don't know the system."
              needs={["Confidence that her son's list makes sense", "Visibility into the process without needing expertise", "Financial aid and affordability context per school"]}
              frustrations={["Feels shut out of a system designed for wealthier families", "Doesn't know what questions to ask", "Can't evaluate whether schools are realistic"]}
            />
            <PersonaCard
              name="Ms. Torres" age={38} initial="T"
              role="Public school counselor"
              context="Manages 480 students"
              quote="I know which students need help. I just don't have the bandwidth to give every one of them a personalized college list and essay feedback."
              needs={["A tool she can recommend to students that actually helps", "Visibility into student progress without adding to her workload", "Something that gives good advice, not just generic platitudes"]}
              frustrations={["Existing free tools are too simplistic to be useful", "She can't scale herself across 480 students", "Watches capable students undermatch because no one guided them"]}
            />
          </div>
        </div>

        <Divider />

        {/* Product Vision */}
        <Label>Product Vision</Label>
        <Title>Two Engines, One Journey</Title>
        <Body>Prospect is built around two interconnected product pillars that mirror the natural flow of the admissions process: first, figure out where to apply; then, write the applications that get you in. Each pillar works independently, but together they create a guided experience that replaces the private consultant.</Body>

        <div style={{ display: "flex", gap: 16, margin: "24px 0", flexWrap: "wrap" }}>
          <Card style={{ flex: 1, minWidth: 300, borderTop: `4px solid ${C.accent}` }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.accent, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, fontWeight: 600 }}>Pillar 1</div>
            <div style={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 8 }}>Smart List Builder</div>
            <div style={{ fontFamily: fonts.sans, fontSize: 14, color: C.muted, lineHeight: 1.6 }}>Students input their academic profile, extracurriculars, and preferences. Prospect generates a balanced school list categorized by reach/match/safety using admissions data, with a competitiveness score for each school and reasons why each school fits.</div>
            <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Profile Assessment", "School Matching", "Reach/Match/Safety", "Fit Scoring", "Parent View"].map((f, i) => (
                <Chip key={i} label={f} color={C.accent} bg={C.accentLight} />
              ))}
            </div>
          </Card>
          <Card style={{ flex: 1, minWidth: 300, borderTop: `4px solid ${C.purple}` }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.purple, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, fontWeight: 600 }}>Pillar 2</div>
            <div style={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 8 }}>Supplement Coach</div>
            <div style={{ fontFamily: fonts.sans, fontSize: 14, color: C.muted, lineHeight: 1.6 }}>Once a student builds their list, Prospect maps all supplement requirements, detects overlapping prompts, and provides AI-guided writing assistance, helping students understand what each school is looking for and draft responses that are specific, authentic, and differentiated.</div>
            <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Prompt Mapping", "Overlap Detection", "School-Specific Guidance", "Draft Feedback", "Timeline Management"].map((f, i) => (
                <Chip key={i} label={f} color={C.purple} bg={C.purpleLight} />
              ))}
            </div>
          </Card>
        </div>

        <Divider />

        {/* App Wireframes */}
        <Label>Solution Design</Label>
        <Title>App Wireframes</Title>
        <Body>Mobile-first design with responsive web support. All screens are designed to reduce cognitive load and guide students through a process that currently overwhelms them.</Body>

        {/* Screen selector */}
        <div style={{ display: "flex", gap: 0, marginBottom: 24, flexWrap: "wrap" }}>
          {[
            ["onboarding", "Onboarding"],
            ["list", "List Builder"],
            ["school", "School Fit"],
            ["supplements", "Supplement Map"],
            ["writing", "Writing Coach"],
          ].map(([key, label]) => (
            <button key={key} onClick={() => setActiveScreen(key)} style={{
              padding: "10px 18px", fontFamily: fonts.mono, fontSize: 11, fontWeight: activeScreen === key ? 700 : 400,
              color: activeScreen === key ? C.accent : C.light,
              background: activeScreen === key ? C.accentLight : "transparent",
              border: `1px solid ${activeScreen === key ? C.accent + "40" : C.border}`,
              borderRadius: 6, cursor: "pointer", marginRight: 6, marginBottom: 6,
            }}>{label}</button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", margin: "0 0 24px" }}>

          {activeScreen === "onboarding" && (
            <>
              <PhoneFrame label="Profile Setup">
                <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 16 }}>PROSPECT</div>
                <div style={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 4 }}>Let's build your profile</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 12, color: C.muted, marginBottom: 20 }}>This helps us find schools that fit you, not just schools you've heard of.</div>

                {/* Progress */}
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {[1,2,3,4].map(i => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= 2 ? C.accent : C.borderLight }} />)}
                </div>

                {[
                  ["GPA (Unweighted)", "3.9"],
                  ["SAT / ACT", "1380 SAT"],
                  ["Intended Major", "Computer Science"],
                ].map(([label, val], i) => (
                  <div key={i} style={{ marginBottom: 12 }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.light, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{label}</div>
                    <div style={{ padding: "10px 12px", borderRadius: 8, border: `1px solid ${C.border}`, fontFamily: fonts.sans, fontSize: 13, color: C.text }}>{val}</div>
                  </div>
                ))}

                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.light, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>Top Activities</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {["Robotics Club (Pres.)", "Debate Team", "Part-time Job"].map((a, i) => (
                      <span key={i} style={{ padding: "4px 8px", borderRadius: 6, background: C.accentLight, fontFamily: fonts.sans, fontSize: 10, color: C.accent }}>{a}</span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 16, padding: "12px 0", background: C.accent, borderRadius: 10, textAlign: "center", fontFamily: fonts.sans, fontSize: 14, fontWeight: 600, color: "#fff" }}>Continue →</div>
              </PhoneFrame>

              <PhoneFrame label="Preferences">
                <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 16 }}>PROSPECT</div>
                <div style={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 4 }}>What matters to you?</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 12, color: C.muted, marginBottom: 20 }}>Select all that apply. We'll factor these into your matches.</div>

                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {[1,2,3,4].map(i => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= 3 ? C.accent : C.borderLight }} />)}
                </div>

                {[
                  { label: "School Size", options: ["Small (<3K)", "Medium", "Large (15K+)"], selected: 0 },
                  { label: "Setting", options: ["Urban", "Suburban", "Rural"], selected: 0 },
                  { label: "Region", options: ["Northeast", "Midwest", "South", "West"], selected: [0, 3] },
                  { label: "Priorities", options: ["Financial Aid", "Research Opps", "Diversity", "Greek Life"], selected: [0, 1, 2] },
                ].map((group, gi) => (
                  <div key={gi} style={{ marginBottom: 14 }}>
                    <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.light, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>{group.label}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {group.options.map((opt, oi) => {
                        const isSelected = Array.isArray(group.selected) ? group.selected.includes(oi) : group.selected === oi;
                        return (
                          <span key={oi} style={{
                            padding: "6px 10px", borderRadius: 6, fontFamily: fonts.sans, fontSize: 11,
                            background: isSelected ? C.accent : C.wire,
                            color: isSelected ? "#fff" : C.muted,
                            border: `1px solid ${isSelected ? C.accent : C.border}`,
                          }}>{opt}</span>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: 10, padding: "12px 0", background: C.accent, borderRadius: 10, textAlign: "center", fontFamily: fonts.sans, fontSize: 14, fontWeight: 600, color: "#fff" }}>Build My List →</div>
              </PhoneFrame>
            </>
          )}

          {activeScreen === "list" && (
            <>
              <PhoneFrame label="Generated List">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.accent, fontWeight: 600 }}>PROSPECT</div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.muted }}>12 schools</div>
                </div>
                <div style={{ fontFamily: fonts.serif, fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 4 }}>Your School List</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.muted, marginBottom: 16 }}>Balanced across tiers based on your profile</div>

                {/* Tier visualization */}
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                  <div style={{ flex: 3, padding: "6px 0", borderRadius: 4, background: C.redLight, textAlign: "center", fontFamily: fonts.mono, fontSize: 9, color: C.red, fontWeight: 600 }}>3 Reach</div>
                  <div style={{ flex: 5, padding: "6px 0", borderRadius: 4, background: C.amberLight, textAlign: "center", fontFamily: fonts.mono, fontSize: 9, color: C.amber, fontWeight: 600 }}>5 Match</div>
                  <div style={{ flex: 4, padding: "6px 0", borderRadius: 4, background: C.greenLight, textAlign: "center", fontFamily: fonts.mono, fontSize: 9, color: C.green, fontWeight: 600 }}>4 Safety</div>
                </div>

                {[
                  { school: "MIT", tier: "Reach", score: "24%", color: C.red, bg: C.redLight },
                  { school: "Georgia Tech", tier: "Match", score: "62%", color: C.amber, bg: C.amberLight },
                  { school: "U of Maryland", tier: "Match", score: "71%", color: C.amber, bg: C.amberLight },
                  { school: "Virginia Tech", tier: "Safety", score: "88%", color: C.green, bg: C.greenLight },
                  { school: "SUNY Stony Brook", tier: "Safety", score: "91%", color: C.green, bg: C.greenLight },
                ].map((s, i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 12px", borderBottom: `1px solid ${C.borderLight}`,
                  }}>
                    <div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 600, color: C.text }}>{s.school}</div>
                      <Chip label={s.tier} color={s.color} bg={s.bg} />
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: s.color }}>{s.score}</div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 8, color: C.light }}>FIT SCORE</div>
                    </div>
                  </div>
                ))}
                <div style={{ textAlign: "center", padding: "8px 0", fontFamily: fonts.sans, fontSize: 11, color: C.accent, fontWeight: 600 }}>+ 7 more schools</div>
              </PhoneFrame>

              <PhoneFrame label="List Balance">
                <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 16 }}>PROSPECT</div>
                <div style={{ fontFamily: fonts.serif, fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 4 }}>List Health Check</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.muted, marginBottom: 20 }}>Your list is well-balanced. Here's your admission probability.</div>

                {/* Probability gauge */}
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  <div style={{ fontFamily: fonts.serif, fontSize: 48, fontWeight: 700, color: C.green }}>97%</div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 12, color: C.muted }}>Probability of at least 1 acceptance</div>
                </div>

                <div style={{ padding: 14, background: C.greenLight, borderRadius: 8, marginBottom: 12 }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 12, color: C.green, fontWeight: 600 }}>✓ Good balance across tiers</div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.muted, marginTop: 4 }}>Your 4 safety schools give you a strong foundation.</div>
                </div>

                <div style={{ padding: 14, background: C.amberLight, borderRadius: 8, marginBottom: 12 }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 12, color: C.amber, fontWeight: 600 }}>💡 Consider adding 1 more match</div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.muted, marginTop: 4 }}>Schools like Purdue or RPI are strong CS matches for your profile.</div>
                </div>

                <div style={{ padding: 14, background: C.wire, borderRadius: 8 }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 12, color: C.text, fontWeight: 600 }}>📊 Why these schools?</div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.muted, marginTop: 4 }}>Tap any school to see why Prospect matched it to your profile, including admit rate for your range, program strength, and preference alignment.</div>
                </div>
              </PhoneFrame>
            </>
          )}

          {activeScreen === "school" && (
            <PhoneFrame label="School Fit Detail">
              <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 12 }}>← Back to List</div>
              <div style={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 2 }}>Georgia Tech</div>
              <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                <Chip label="Match" color={C.amber} bg={C.amberLight} />
                <Chip label="62% Fit Score" color={C.accent} bg={C.accentLight} />
              </div>

              <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.light, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Why You're Competitive</div>
              {[
                { label: "Your GPA vs. Median", val: "3.9 vs. 3.8", good: true },
                { label: "Your SAT vs. Median", val: "1380 vs. 1420", good: false },
                { label: "CS Program Rank", val: "#5 Nationally", good: true },
                { label: "Robotics EC Alignment", val: "Strong match", good: true },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${C.borderLight}`, fontSize: 12, fontFamily: fonts.sans }}>
                  <span style={{ color: C.muted }}>{r.label}</span>
                  <span style={{ fontWeight: 600, color: r.good ? C.green : C.amber }}>{r.val}</span>
                </div>
              ))}

              <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.light, textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 16, marginBottom: 8 }}>What They're Looking For</div>
              <div style={{ fontFamily: fonts.sans, fontSize: 12, color: C.muted, lineHeight: 1.6, padding: "10px 12px", background: C.wire, borderRadius: 6 }}>
                Georgia Tech values students who show technical depth combined with real-world application. Your robotics leadership and part-time work experience demonstrate both. Emphasize projects with tangible outcomes in your supplements.
              </div>

              <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.light, textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 16, marginBottom: 8 }}>Supplement Requirements</div>
              <div style={{ padding: "8px 12px", background: C.purpleLight, borderRadius: 6, fontFamily: fonts.sans, fontSize: 12, color: C.purple }}>
                2 essays required · <span style={{ fontWeight: 600 }}>Tap to start writing →</span>
              </div>
            </PhoneFrame>
          )}

          {activeScreen === "supplements" && (
            <>
              <PhoneFrame label="Supplement Map">
                <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 14 }}>PROSPECT</div>
                <div style={{ fontFamily: fonts.serif, fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 4 }}>Your Supplements</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.muted, marginBottom: 16 }}>18 total across 12 schools · 3 overlaps detected</div>

                {/* Progress */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, padding: "10px 12px", background: C.wire, borderRadius: 8 }}>
                  <div style={{ flex: 1, height: 6, background: C.borderLight, borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ width: "33%", height: "100%", background: C.accent, borderRadius: 4 }} />
                  </div>
                  <div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: C.accent }}>6/18</div>
                </div>

                {/* Overlap alert */}
                <div style={{ padding: "10px 12px", background: C.purpleLight, borderRadius: 8, marginBottom: 14, display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 14 }}>🔄</span>
                  <div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 600, color: C.purple }}>3 prompt overlaps detected</div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 10, color: C.muted }}>Reuse and adapt content to save time</div>
                  </div>
                </div>

                {[
                  { school: "MIT", total: 5, done: 0, deadline: "Jan 5", status: "not-started" },
                  { school: "Georgia Tech", total: 2, done: 2, deadline: "Jan 10", status: "complete" },
                  { school: "Stanford", total: 3, done: 1, deadline: "Jan 2", status: "in-progress" },
                  { school: "U of Michigan", total: 2, done: 1, deadline: "Feb 1", status: "in-progress" },
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${C.borderLight}` }}>
                    <div>
                      <div style={{ fontFamily: fonts.sans, fontSize: 13, fontWeight: 600, color: C.text }}>{s.school}</div>
                      <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.light }}>{s.done}/{s.total} · Due {s.deadline}</div>
                    </div>
                    <Chip
                      label={s.status === "complete" ? "Done" : s.status === "in-progress" ? "Writing" : "Start"}
                      color={s.status === "complete" ? C.green : s.status === "in-progress" ? C.amber : C.red}
                      bg={s.status === "complete" ? C.greenLight : s.status === "in-progress" ? C.amberLight : C.redLight}
                    />
                  </div>
                ))}
              </PhoneFrame>

              <PhoneFrame label="Overlap Detection">
                <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 12 }}>← Supplements</div>
                <div style={{ fontFamily: fonts.serif, fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 4 }}>Prompt Overlap Group</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.muted, marginBottom: 16 }}>These 3 prompts are asking similar questions. Write once, adapt for each.</div>

                <div style={{ padding: "10px 12px", background: C.purpleLight, borderRadius: 8, marginBottom: 8 }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.purple, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Core Theme</div>
                  <div style={{ fontFamily: fonts.serif, fontSize: 14, fontWeight: 600, color: C.text }}>"Why are you interested in this field / major?"</div>
                </div>

                {[
                  { school: "MIT", prompt: "Tell us about why your field of study excites you.", words: 250 },
                  { school: "Georgia Tech", prompt: "Why do you want to study your chosen major at Georgia Tech?", words: 300 },
                  { school: "U of Michigan", prompt: "Describe your academic interests and how you plan to pursue them.", words: 550 },
                ].map((p, i) => (
                  <div key={i} style={{ padding: "10px 12px", border: `1px solid ${C.border}`, borderRadius: 8, marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontFamily: fonts.sans, fontSize: 12, fontWeight: 600, color: C.text }}>{p.school}</span>
                      <span style={{ fontFamily: fonts.mono, fontSize: 10, color: C.light }}>{p.words} words</span>
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.muted, fontStyle: "italic" }}>"{p.prompt}"</div>
                  </div>
                ))}

                <div style={{ marginTop: 12, padding: "10px 12px", background: C.accentLight, borderRadius: 8 }}>
                  <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.accent, fontWeight: 600 }}>💡 Prospect Suggestion</div>
                  <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.muted, marginTop: 4, lineHeight: 1.5 }}>Start with the MIT version (shortest). Expand with Georgia Tech–specific details for that version. Use the Michigan prompt to go deeper on your research interests.</div>
                </div>
              </PhoneFrame>
            </>
          )}

          {activeScreen === "writing" && (
            <PhoneFrame label="Writing Coach">
              <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 12 }}>← Stanford Supplements</div>
              <div style={{ fontFamily: fonts.serif, fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 2 }}>Letter to Your Roommate</div>
              <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.light, marginBottom: 14 }}>250 words · Stanford · Draft 2</div>

              {/* What they're looking for */}
              <div style={{ padding: "10px 12px", background: C.accentLight, borderRadius: 8, marginBottom: 14 }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 9, color: C.accent, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4, fontWeight: 600 }}>What Stanford Wants</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 11, color: C.muted, lineHeight: 1.5 }}>This prompt is about authenticity and personality. Stanford wants to see the real you: quirks, passions, daily habits. Avoid listing achievements. Be specific and vivid.</div>
              </div>

              {/* Writing area mock */}
              <div style={{ padding: "12px", border: `1px solid ${C.border}`, borderRadius: 8, minHeight: 140, fontFamily: fonts.sans, fontSize: 12, color: C.text, lineHeight: 1.6, marginBottom: 12, background: "#FDFCFA" }}>
                Dear future roommate, the first thing you should know about me is that I talk to my robot. Not like a weird way, but I built a small rover last year for robotics club and I still test...
                <span style={{ color: C.light }}>|</span>
              </div>

              {/* Word count */}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontFamily: fonts.mono, fontSize: 10, color: C.muted }}>127 / 250 words</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 10, color: C.green }}>Auto-saved</span>
              </div>

              {/* AI Feedback */}
              <div style={{ padding: "10px 12px", background: C.greenLight, borderRadius: 8, marginBottom: 8 }}>
                <div style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 600, color: C.green }}>✓ Strong opening: specific and personal</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 10, color: C.muted, marginTop: 2 }}>The robot detail is memorable and distinctive.</div>
              </div>
              <div style={{ padding: "10px 12px", background: C.amberLight, borderRadius: 8 }}>
                <div style={{ fontFamily: fonts.sans, fontSize: 11, fontWeight: 600, color: C.amber }}>💡 Go deeper on the "why"</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 10, color: C.muted, marginTop: 2 }}>You mention building the rover but not why it matters to you. What keeps you coming back to tinker?</div>
              </div>
            </PhoneFrame>
          )}
        </div>

        <Divider />

        {/* Prioritization */}
        <Label>Prioritization</Label>
        <Title>RICE Framework: MVP Features</Title>
        <Body>The MVP focuses on the list-building engine first. A strong list is the foundation that all supplement work builds on, and it's the highest-value feature for students without access to counseling.</Body>

        <Card style={{ margin: "24px 0", padding: 0, overflow: "hidden" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "2fr 0.6fr 0.6fr 0.6fr 0.6fr 0.7fr",
            padding: "10px 14px", background: C.wire, fontFamily: fonts.mono, fontSize: 10, fontWeight: 600,
            color: C.light, textTransform: "uppercase", letterSpacing: "0.05em",
          }}>
            <div>Feature</div><div style={{ textAlign: "center" }}>Reach</div><div style={{ textAlign: "center" }}>Impact</div><div style={{ textAlign: "center" }}>Conf.</div><div style={{ textAlign: "center" }}>Effort</div><div style={{ textAlign: "center" }}>Score</div>
          </div>
          <RICERow feature="Profile intake & school matching" reach="95%" impact={3} confidence={90} effort="3 mo" score="86" priority="P0" />
          <RICERow feature="Reach / match / safety classification" reach="95%" impact={3} confidence={85} effort="2 mo" score="121" priority="P0" />
          <RICERow feature="Supplement requirement mapping" reach="80%" impact={2} confidence={85} effort="2 mo" score="68" priority="P1" />
          <RICERow feature="Prompt overlap detection" reach="60%" impact={2} confidence={75} effort="3 mo" score="30" priority="P1" />
          <RICERow feature="AI writing coach / feedback" reach="70%" impact={3} confidence={65} effort="5 mo" score="27" priority="P2" />
          <RICERow feature="School fit detail / 'why you' insights" reach="80%" impact={2} confidence={70} effort="3 mo" score="37" priority="P1" />
          <RICERow feature="Parent progress view" reach="30%" impact={1} confidence={60} effort="2 mo" score="9" priority="" />
          <RICERow feature="Counselor dashboard" reach="20%" impact={1.5} confidence={50} effort="4 mo" score="4" priority="" />
        </Card>

        <Body>The first two features (profile intake with school matching and reach/match/safety classification) form the core MVP. They're the highest-impact, highest-confidence features that differentiate Prospect from existing tools. The supplement and writing features layer on top in Phase 2.</Body>

        <Divider />

        {/* Business Model */}
        <Label>Go-to-Market</Label>
        <Title>Business Model & Distribution</Title>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "24px 0" }}>
          <Card style={{ borderTop: `4px solid ${C.accent}` }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.accent, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, fontWeight: 600 }}>Freemium Model</div>
            <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 8 }}>Free Tier</div>
            <div style={{ fontFamily: fonts.sans, fontSize: 13, color: C.muted, lineHeight: 1.6 }}>Profile creation, school matching (up to 8 schools), basic reach/match/safety classification. No supplement features.</div>
            <div style={{ marginTop: 12, fontFamily: fonts.sans, fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 8 }}>Prospect Plus — $9.99/mo</div>
            <div style={{ fontFamily: fonts.sans, fontSize: 13, color: C.muted, lineHeight: 1.6 }}>Unlimited schools, supplement mapping, prompt overlap detection, AI writing coach, school-specific "what they want" insights.</div>
          </Card>
          <Card style={{ borderTop: `4px solid ${C.purple}` }}>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: C.purple, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, fontWeight: 600 }}>Distribution Strategy</div>
            <div style={{ fontFamily: fonts.sans, fontSize: 13, color: C.muted, lineHeight: 1.7 }}>
              <strong style={{ color: C.text }}>Phase 1:</strong> Direct-to-student via social (TikTok, Instagram) during Aug–Dec application season. Partnership with college prep YouTube creators.<br/><br/>
              <strong style={{ color: C.text }}>Phase 2:</strong> School counselor partnerships: free counselor dashboard drives organic student adoption. Target Title I schools first for mission alignment.<br/><br/>
              <strong style={{ color: C.text }}>Phase 3:</strong> District-level licensing (B2B2C) where schools pay for Prospect Plus access for all students.
            </div>
          </Card>
        </div>

        <Divider />

        {/* Success Metrics */}
        <Label>Success Metrics</Label>
        <Title>How We'd Measure Impact</Title>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "24px 0" }}>
          {[
            { metric: "List Balance Score", target: ">80% of users", desc: "Users who generate lists with at least 2 schools in each tier (reach/match/safety)" },
            { metric: "Supplement Completion Rate", target: ">70%", desc: "Supplements completed before deadline for Prospect Plus users vs. national average" },
            { metric: "Free → Paid Conversion", target: "8–12%", desc: "Users who upgrade from free list builder to Prospect Plus for writing features" },
            { metric: "Underserved Student Reach", target: "50K Y1", desc: "First-generation or Title I school students actively using the platform in Year 1" },
          ].map((m, i) => (
            <Card key={i} style={{ padding: 20 }}>
              <div style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 6 }}>{m.metric}</div>
              <div style={{ fontFamily: fonts.sans, fontSize: 13, color: C.muted, marginBottom: 10 }}>{m.desc}</div>
              <div style={{ padding: "5px 10px", borderRadius: 4, background: C.accentLight, fontFamily: fonts.mono, fontSize: 13, fontWeight: 600, color: C.accent, display: "inline-block" }}>{m.target}</div>
            </Card>
          ))}
        </div>

        <Divider />

        {/* Risks */}
        <Label>Risks & Tradeoffs</Label>
        <Title>What Could Go Wrong</Title>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "24px 0" }}>
          {[
            { risk: "AI writing coach produces generic advice", mitigation: "Ground all feedback in school-specific admissions data and real admit patterns. Never generate essay content. Only coach, question, and suggest. Human-in-the-loop review during beta.", severity: "High", color: C.red, bg: C.redLight },
            { risk: "Data accuracy for school matching", mitigation: "Use IPEDS + Common Data Set as primary sources. Build a reporting mechanism for users to flag inaccuracies. Partner with CollegeBoard for official data access.", severity: "High", color: C.red, bg: C.redLight },
            { risk: "Seasonal usage creates revenue volatility", mitigation: "Application season (Aug–Jan) drives ~80% of usage. Expand to include junior-year exploration features and scholarship search to extend engagement window.", severity: "Medium", color: C.amber, bg: C.amberLight },
            { risk: "Free tier is 'good enough', low conversion", mitigation: "Free tier gives the list. Paid tier gives the strategy. The aha moment is seeing prompt overlaps and school-specific writing guidance, features that clearly require the upgrade.", severity: "Medium", color: C.amber, bg: C.amberLight },
          ].map((r, i) => (
            <Card key={i} style={{ display: "flex", gap: 14 }}>
              <div style={{ padding: "3px 8px", borderRadius: 4, background: r.bg, color: r.color, fontFamily: fonts.mono, fontSize: 10, fontWeight: 600, height: "fit-content", whiteSpace: "nowrap" }}>{r.severity}</div>
              <div>
                <div style={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 4 }}>{r.risk}</div>
                <div style={{ fontFamily: fonts.sans, fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{r.mitigation}</div>
              </div>
            </Card>
          ))}
        </div>

        <Divider />

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "40px 0 20px" }}>
          <div style={{ fontFamily: fonts.mono, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.accent, marginBottom: 12 }}>About the Author</div>
          <div style={{ fontFamily: fonts.serif, fontSize: 24, fontWeight: 700, color: C.text, marginBottom: 8 }}>Spencer Horstman</div>
          <div style={{ fontFamily: fonts.sans, fontSize: 15, color: C.muted, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Product Manager with 9 years of experience in educational consulting. Prospect is a concept informed by direct observation of the inequities in college admissions guidance, and the belief that good advice shouldn't be a luxury.
          </div>
          <div style={{ marginTop: 16, fontFamily: fonts.sans, fontSize: 14, color: C.light }}>
            spencerhorstman@gmail.com · Valley Glen, CA
          </div>
        </div>
      </div>
    </div>
  );
}
