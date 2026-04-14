import { useState, useEffect } from "react";

const COLORS = {
  bg: "#0A0A0A",
  card: "#141414",
  cardHover: "#1A1A1A",
  blue: "#0070F3",
  blueGlow: "rgba(0,112,243,0.15)",
  green: "#10B981",
  teal: "#14B8A6",
  orange: "#F97316",
  purple: "#8B5CF6",
  red: "#EF4444",
  white: "#FAFAFA",
  gray: "#A3A3A3",
  darkGray: "#404040",
};

const slides = [
  {
    id: "title",
    pillarColor: COLORS.blue,
    content: (active) => (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem" }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.teal}, ${COLORS.green})`,
        }} />
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: COLORS.white,
          lineHeight: 1.1, maxWidth: 800, fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          How Vercel Wins<br />With Startups
        </h1>
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.35rem)", color: COLORS.blue, marginTop: 12, fontWeight: 500,
          fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
        }}>
          A Product-Led Strategy for Startup Acceleration
        </p>
        <div style={{
          width: 60, height: 3, background: COLORS.blue, marginTop: 32, borderRadius: 2,
          opacity: active ? 1 : 0, transition: "opacity 0.8s ease 0.3s",
        }} />
        <div style={{
          display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap",
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
        }}>
          {[
            { icon: "🛡️", label: "Eliminate Shadow AI Risk", color: COLORS.blue },
            { icon: "🚀", label: "Accelerate Developer Revenue", color: COLORS.green },
            { icon: "💰", label: "Contain API Integration Costs", color: COLORS.teal },
          ].map((p, i) => (
            <div key={i} style={{
              background: COLORS.card, border: `1px solid ${COLORS.darkGray}`, borderRadius: 12,
              padding: "16px 20px", display: "flex", alignItems: "center", gap: 12,
              borderTop: `3px solid ${p.color}`, flex: "1 1 200px", minWidth: 200,
            }}>
              <span style={{ fontSize: 24 }}>{p.icon}</span>
              <span style={{ color: COLORS.white, fontSize: 14, fontWeight: 600, fontFamily: "'Instrument Sans', sans-serif" }}>{p.label}</span>
            </div>
          ))}
        </div>
        <p style={{
          color: COLORS.gray, fontSize: 13, marginTop: 48, fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transition: "opacity 0.8s ease 0.5s",
        }}>
          Lovely Marshall &nbsp;|&nbsp; Sales Engineer, Startups
        </p>
      </div>
    ),
  },
  {
    id: "shadow-ai",
    pillarColor: COLORS.blue,
    content: (active) => (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span style={{ color: COLORS.blue, fontSize: 12, fontWeight: 700, letterSpacing: 2, fontFamily: "'Instrument Sans', sans-serif" }}>PILLAR 1</span>
        </div>
        <h2 style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, color: COLORS.white, lineHeight: 1.15,
          fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          Eliminate Shadow AI Risk for Startups
        </h2>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 40,
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}>
          <div style={{ background: COLORS.card, borderRadius: 16, padding: 28, border: `1px solid ${COLORS.darkGray}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 22 }}>⚠️</span>
              <span style={{ color: COLORS.red, fontWeight: 700, fontSize: 15, fontFamily: "'Instrument Sans', sans-serif" }}>THE PROBLEM</span>
            </div>
            <p style={{ color: COLORS.white, fontWeight: 600, fontSize: 15, marginBottom: 12, fontFamily: "'Instrument Sans', sans-serif" }}>
              Vibe coding is the world's largest shadow IT problem.
            </p>
            <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.6, fontFamily: "'Instrument Sans', sans-serif" }}>
              Startup employees are already shipping AI-generated apps with credentials copied into prompts, company data on the public internet, zero audit trail, and no deployment protection.
            </p>
          </div>
          <div style={{ background: COLORS.card, borderRadius: 16, padding: 28, border: `1px solid ${COLORS.darkGray}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 22 }}>✅</span>
              <span style={{ color: COLORS.green, fontWeight: 700, fontSize: 15, fontFamily: "'Instrument Sans', sans-serif" }}>VERCEL'S ANSWER</span>
            </div>
            <p style={{ color: COLORS.white, fontWeight: 600, fontSize: 15, marginBottom: 12, fontFamily: "'Instrument Sans', sans-serif" }}>
              v0 makes vibe coding secure by default.
            </p>
            <ul style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.8, paddingLeft: 18, fontFamily: "'Instrument Sans', sans-serif" }}>
              <li>Git-native workflows — code lives in your repo</li>
              <li>Deployment protection & access controls</li>
              <li>Secure database integrations (Snowflake, AWS)</li>
              <li>100K+ insecure deployments blocked since launch</li>
              <li>HIPAA-compliant routing via AI Gateway</li>
            </ul>
          </div>
        </div>
        <p style={{
          color: COLORS.gray, fontSize: 13, fontStyle: "italic", marginTop: 32, maxWidth: 800, lineHeight: 1.6,
          fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transition: "opacity 0.7s ease 0.4s",
        }}>
          MY EXPERIENCE: At Meta, I led platform unification for 20M SMBs — migrating identity, onboarding, and API ecosystems while maintaining security at scale. I know how to guide startups from fast-and-risky to fast-and-governed.
        </p>
      </div>
    ),
  },
  {
    id: "community",
    pillarColor: COLORS.green,
    content: (active) => (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem" }}>
        <span style={{ color: COLORS.green, fontSize: 12, fontWeight: 700, letterSpacing: 2, fontFamily: "'Instrument Sans', sans-serif" }}>PILLAR 2</span>
        <h2 style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, color: COLORS.white, lineHeight: 1.15, marginTop: 8,
          fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          Accelerate Developer Revenue Through Community
        </h2>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 40,
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}>
          <div style={{ background: COLORS.card, borderRadius: 16, padding: 28, border: `1px solid ${COLORS.darkGray}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 22 }}>👥</span>
              <span style={{ color: COLORS.orange, fontWeight: 700, fontSize: 15, fontFamily: "'Instrument Sans', sans-serif" }}>WHY LOCAL EVENTS WIN</span>
            </div>
            <p style={{ color: COLORS.white, fontWeight: 600, fontSize: 15, marginBottom: 12, fontFamily: "'Instrument Sans', sans-serif" }}>
              Webinars don't build trust. Community does.
            </p>
            <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.7, fontFamily: "'Instrument Sans', sans-serif" }}>
              In-person meetups and forums create real-time product feedback from founders, peer-to-peer deployment stories that sell, warm handoffs to AEs from trust — not cold outreach, and developer champions who evangelize Vercel organically.
            </p>
          </div>
          <div style={{ background: COLORS.card, borderRadius: 16, padding: 28, border: `1px solid ${COLORS.darkGray}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 22 }}>🚀</span>
              <span style={{ color: COLORS.green, fontWeight: 700, fontSize: 15, fontFamily: "'Instrument Sans', sans-serif" }}>THE REVENUE PATH</span>
            </div>
            <p style={{ color: COLORS.white, fontWeight: 600, fontSize: 15, marginBottom: 12, fontFamily: "'Instrument Sans', sans-serif" }}>
              Deploy faster = grow faster = pay Vercel faster.
            </p>
            <ul style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.8, paddingLeft: 18, fontFamily: "'Instrument Sans', sans-serif" }}>
              <li>Host local Austin startup forums (cameras on, hands on keyboards)</li>
              <li>Live deploy sessions: "Zero to Deployed" in 15 minutes</li>
              <li>Co-host with accelerators & VCs for deal flow</li>
              <li>Track: Free → Pro → Enterprise conversion</li>
            </ul>
          </div>
        </div>
        <p style={{
          color: COLORS.gray, fontSize: 13, fontStyle: "italic", marginTop: 32, maxWidth: 800, lineHeight: 1.6,
          fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transition: "opacity 0.7s ease 0.4s",
        }}>
          MY EXPERIENCE: I deliver 45+ solution workshops monthly across 13 global markets for 4,000+ customers. I've built exactly this activation flywheel — cameras-on, interactive, with measurable conversion.
        </p>
      </div>
    ),
  },
  {
    id: "cost",
    pillarColor: COLORS.teal,
    content: (active) => (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem" }}>
        <span style={{ color: COLORS.teal, fontSize: 12, fontWeight: 700, letterSpacing: 2, fontFamily: "'Instrument Sans', sans-serif" }}>PILLAR 3</span>
        <h2 style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, color: COLORS.white, lineHeight: 1.15, marginTop: 8,
          fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          Cost Containment Through Unified API Integration
        </h2>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 40,
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}>
          <div style={{ background: COLORS.card, borderRadius: 16, padding: 28, border: `1px solid ${COLORS.darkGray}` }}>
            <span style={{ fontSize: 22 }}>⚙️</span>
            <span style={{ color: COLORS.purple, fontWeight: 700, fontSize: 15, marginLeft: 10, fontFamily: "'Instrument Sans', sans-serif" }}>STARTUP PAIN POINT</span>
            <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.7, marginTop: 14, fontFamily: "'Instrument Sans', sans-serif" }}>
              AI models change weekly. Startups can't afford to rewrite integrations every time a new model drops. They need a guide who connects them to the right tools to stay current without burning engineering cycles.
            </p>
          </div>
          <div style={{ background: COLORS.card, borderRadius: 16, padding: 28, border: `1px solid ${COLORS.darkGray}` }}>
            <span style={{ fontSize: 22 }}>🔌</span>
            <span style={{ color: COLORS.teal, fontWeight: 700, fontSize: 15, marginLeft: 10, fontFamily: "'Instrument Sans', sans-serif" }}>VERCEL SOLVES THIS</span>
            <p style={{ color: COLORS.white, fontWeight: 600, fontSize: 15, marginTop: 14, fontFamily: "'Instrument Sans', sans-serif" }}>AI Gateway: One endpoint, hundreds of models.</p>
            <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.7, marginTop: 8, fontFamily: "'Instrument Sans', sans-serif" }}>
              Zero markup on tokens. Automatic failover. Budget controls. BYOK. Swap models with one line of code.
            </p>
          </div>
        </div>
        <div style={{
          background: COLORS.card, borderRadius: 16, padding: 28, marginTop: 24, border: `1px solid ${COLORS.darkGray}`,
          opacity: active ? 1 : 0, transition: "opacity 0.7s ease 0.4s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 20 }}>💡</span>
            <span style={{ color: COLORS.orange, fontWeight: 700, fontSize: 15, fontFamily: "'Instrument Sans', sans-serif" }}>HOW I'D GUIDE STARTUPS</span>
          </div>
          <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.7, fontFamily: "'Instrument Sans', sans-serif" }}>
            I'd run "AI SDK Office Hours" where founders bring integration questions live. I'd create "Model Migration Playbooks" for seamless provider switches via AI Gateway. I'd build a direct feedback channel from founders back to Vercel's product team — the same bridge role I played at Meta between 40 engineers and millions of SMBs.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "proof",
    pillarColor: COLORS.orange,
    content: (active) => (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem" }}>
        <h2 style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, color: COLORS.white,
          fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          Why This Matters — And Why Me
        </h2>
        <div style={{
          display: "flex", flexDirection: "column", gap: 16, marginTop: 40,
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}>
          {[
            { stat: "20M+", desc: "SMBs migrated at Meta through platform transition — from legacy to modern, from risky to governed", color: COLORS.blue },
            { stat: "45+", desc: "Monthly live workshops — cameras-on, hands-on-keyboards activation events across 13 global markets", color: COLORS.green },
            { stat: "$50M", desc: "Revenue from Cigna healthcare marketplace — regulated industries where compliance deployment is critical", color: COLORS.teal },
            { stat: "4,000+", desc: "Customers guided through technical adoption — the startup-to-AE pipeline this role needs to build", color: COLORS.orange },
          ].map((item, i) => (
            <div key={i} style={{
              background: COLORS.card, borderRadius: 12, padding: "20px 24px",
              display: "flex", alignItems: "center", gap: 24, border: `1px solid ${COLORS.darkGray}`,
              borderLeft: `4px solid ${item.color}`,
            }}>
              <span style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: item.color,
                minWidth: 90, fontFamily: "'Instrument Sans', sans-serif",
              }}>{item.stat}</span>
              <span style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.5, fontFamily: "'Instrument Sans', sans-serif" }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "close",
    pillarColor: COLORS.blue,
    content: (active) => (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem" }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.teal}, ${COLORS.green})`,
        }} />
        <h2 style={{
          fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 800, color: COLORS.white, lineHeight: 1.3,
          fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          I'm not the candidate who will learn<br />your product after the offer.
        </h2>
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.3rem)", color: COLORS.blue, marginTop: 16, lineHeight: 1.5, maxWidth: 700,
          fontFamily: "'Instrument Sans', sans-serif",
          opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
        }}>
          I'm the one who already knows it — and built this site on Vercel to prove it.
        </p>
        <div style={{
          width: 60, height: 3, background: COLORS.blue, marginTop: 40, borderRadius: 2,
          opacity: active ? 1 : 0, transition: "opacity 0.8s ease 0.3s",
        }} />
        <div style={{
          marginTop: 32,
          opacity: active ? 1 : 0, transition: "opacity 0.8s ease 0.4s",
        }}>
          <p style={{ color: COLORS.white, fontSize: 18, fontWeight: 700, fontFamily: "'Instrument Sans', sans-serif" }}>Lovely Marshall</p>
          <p style={{ color: COLORS.blue, fontSize: 14, marginTop: 4, fontFamily: "'Instrument Sans', sans-serif" }}>Sales Engineer, Startups — Vercel</p>
          <p style={{ color: COLORS.gray, fontSize: 13, marginTop: 8, lineHeight: 1.6, fontFamily: "'Instrument Sans', sans-serif" }}>
            Co-Founder, Lovely is YOUR Story &nbsp;|&nbsp; Ex-Meta &nbsp;|&nbsp; Forbes Coaches Council<br />
            Podcast Host: Powerhouses of the Global Corporate Stage
          </p>
        </div>
        <div style={{
          marginTop: 48, padding: "16px 20px", background: COLORS.card, borderRadius: 10,
          border: `1px solid ${COLORS.darkGray}`, maxWidth: 500,
          opacity: active ? 1 : 0, transition: "opacity 0.8s ease 0.5s",
        }}>
          <p style={{ color: COLORS.gray, fontSize: 12, fontFamily: "'Instrument Sans', sans-serif" }}>
            🛠️ Built with Next.js &nbsp;•&nbsp; Deployed on Vercel &nbsp;•&nbsp; From PowerPoint to production in one afternoon
          </p>
        </div>
      </div>
    ),
  },
];

export default function StrategyPresentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(new Set([0]));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActiveSlide(idx);
            setVisibleSlides((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll("[data-slide]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; scroll-snap-type: y proximity; }
        body { background: ${COLORS.bg}; color: ${COLORS.white}; font-family: 'Instrument Sans', sans-serif; }
        ul { list-style: none; }
        ul li::before { content: "→ "; color: ${COLORS.gray}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.darkGray}; border-radius: 4px; }
      `}</style>

      {/* Navigation dots */}
      <nav style={{
        position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", gap: 12, zIndex: 100,
      }}>
        {slides.map((s, i) => (
          <a key={i} href={`#${s.id}`} style={{
            width: 10, height: 10, borderRadius: "50%",
            background: activeSlide === i ? s.pillarColor : COLORS.darkGray,
            border: "none", cursor: "pointer", transition: "all 0.3s ease",
            transform: activeSlide === i ? "scale(1.3)" : "scale(1)",
            boxShadow: activeSlide === i ? `0 0 12px ${s.pillarColor}` : "none",
          }} />
        ))}
      </nav>

      {/* Slides */}
      <main style={{ maxWidth: 900, margin: "0 auto" }}>
        {slides.map((slide, i) => (
          <section
            key={i}
            id={slide.id}
            data-slide
            data-index={i}
            style={{ position: "relative", scrollSnapAlign: "start" }}
          >
            {slide.content(visibleSlides.has(i))}
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: "center", padding: "40px 20px", borderTop: `1px solid ${COLORS.darkGray}`,
        color: COLORS.gray, fontSize: 12, fontFamily: "'Instrument Sans', sans-serif",
      }}>
        Built by Lovely Marshall &nbsp;•&nbsp; Powered by Next.js on Vercel &nbsp;•&nbsp; 2026
      </footer>
    </>
  );
}

