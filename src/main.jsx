import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const nav = ["Home", "About", "Expertise", "Work", "Insights", "Contact"];

const services = [
  { n: "01", title: "Strategic Counsel", text: "Senior-level thinking for decisions where the details, timing and consequences matter.", tags: ["Advisory", "Strategy"], icon: "↗" },
  { n: "02", title: "Business & Tax", text: "Clear, commercially grounded guidance that protects value while keeping growth moving.", tags: ["Tax", "Business"], icon: "◈" },
  { n: "03", title: "Disputes & Risk", text: "Calm, decisive representation when the stakes rise and every move counts.", tags: ["Disputes", "Risk"], icon: "◌" },
  { n: "04", title: "Private Clients", text: "Confidential advice built around people, families, founders and long-term interests.", tags: ["Private", "Legacy"], icon: "✦" }
];

const projects = [
  { id: 1, cat: "Strategy", title: "Northstar Expansion", meta: "Market entry • Advisory", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85" },
  { id: 2, cat: "Corporate", title: "Atlas Group", meta: "Restructure • Growth", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85" },
  { id: 3, cat: "Private", title: "The Kestrel Estate", meta: "Private client • Legacy", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85" },
  { id: 4, cat: "Disputes", title: "Meridian Resolution", meta: "Litigation • Resolution", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85" },
  { id: 5, cat: "Strategy", title: "Aster Capital", meta: "Investment • Structuring", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85" },
  { id: 6, cat: "Corporate", title: "Vantage Systems", meta: "Governance • Scale", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85" }
];

const testimonials = [
  ["“They don't just give advice. They make complex decisions feel clear.”", "Maya Chen", "Founder, Aster"],
  ["“The standard of thinking, communication and execution is exceptional.”", "Daniel Okoro", "CEO, Meridian"],
  ["“We felt like we had a senior partner in the room at every stage.”", "Elena Rossi", "Private Client"]
];

function App() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const visibleProjects = useMemo(
    () => filter === "All" ? projects : projects.filter(p => p.cat === filter),
    [filter]
  );

  const scrollTo = (id) => {
    setMenu(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="site">
      <div className="progress" style={{ width: `${progress}%` }} />
      <div className="noise" />

      <header className="header">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Go home">
          <span className="brandMark">N</span>
          <span><strong>NOIR</strong><em>& CO.</em></span>
        </button>

        <nav className={menu ? "nav open" : "nav"}>
          {nav.map(item => <button key={item} onClick={() => scrollTo(item)}>{item}</button>)}
        </nav>

        <div className="headerActions">
          <button className="themeBtn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {theme === "dark" ? "☼" : "◐"}
          </button>
          <button className="topCta" onClick={() => scrollTo("contact")}>Start a conversation <span>↗</span></button>
          <button className="menuBtn" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? "×" : "☰"}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="heroGlow glowA" />
          <div className="heroGlow glowB" />
          <div className="heroCopy reveal">
            <div className="eyebrow"><span className="dot" /> Independent. Precise. Human.</div>
            <h1>Big decisions<br /><i>deserve</i> better<br />thinking.</h1>
            <p className="heroLead">A premium strategic practice for founders, leaders and people building things that matter.</p>
            <div className="heroBtns">
              <button className="primary" onClick={() => scrollTo("contact")}>Book a private consultation <span>↗</span></button>
              <button className="textBtn" onClick={() => scrollTo("work")}>Explore our work <span>↓</span></button>
            </div>
            <div className="heroTrust">
              <span>Trusted by leaders at</span>
              <div><b>ARC</b><b>MONUMENT</b><b>VANTAGE</b><b>ASTER</b></div>
            </div>
          </div>

          <div className="heroVisual reveal">
            <div className="portraitFrame">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=90" alt="Professional in a modern office" />
              <div className="portraitOverlay" />
              <div className="floatingCard cardTop">
                <span>01 — Philosophy</span>
                <strong>Clarity<br />over noise.</strong>
              </div>
              <div className="floatingCard cardBottom">
                <span>Current focus</span>
                <strong>Growth · Governance<br />Risk · Legacy</strong>
              </div>
            </div>
            <div className="verticalText">N / PRIVATE PRACTICE / 2026</div>
          </div>

          <div className="heroBottom">
            <span>Scroll to explore</span><span className="line" /><span>01 — 09</span>
          </div>
        </section>

        <section className="marquee">
          <div>STRATEGY <span>✦</span> COUNSEL <span>✦</span> DESIGNING BETTER OUTCOMES <span>✦</span> STRATEGY <span>✦</span> COUNSEL <span>✦</span></div>
        </section>

        <section className="intro section" id="about">
          <div className="sectionLabel">02 / About</div>
          <div className="introGrid">
            <div>
              <p className="kicker">A different kind of practice.</p>
              <h2>Sharp enough for the boardroom. <i>Human enough for the real world.</i></h2>
            </div>
            <div className="introText">
              <p>NOIR & CO. brings strategic thinking, commercial intelligence and exceptional execution into one senior-led experience.</p>
              <p>We work with a deliberately small number of clients. That means fewer layers, faster decisions and a level of attention normally reserved for the very top of the table.</p>
              <button className="arrowLink" onClick={() => scrollTo("expertise")}>Discover our approach <span>↗</span></button>
            </div>
          </div>
          <div className="statRow">
            <div><strong>14+</strong><span>Years of practice</span></div>
            <div><strong>180</strong><span>Complex matters delivered</span></div>
            <div><strong>97%</strong><span>Long-term client relationships</span></div>
            <div><strong>12</strong><span>Markets reached</span></div>
          </div>
        </section>

        <section className="expertise section darkSection" id="expertise">
          <div className="sectionHead">
            <div><div className="sectionLabel light">03 / Expertise</div><p className="kicker light">What we do</p></div>
            <h2>Deep expertise.<br /><i>Zero theatre.</i></h2>
          </div>
          <div className="serviceGrid">
            {services.map(s => (
              <article className="service" key={s.n}>
                <div className="serviceTop"><span>{s.n}</span><b>{s.icon}</b></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
                <button onClick={() => scrollTo("contact")}>Explore <span>↗</span></button>
              </article>
            ))}
          </div>
        </section>

        <section className="work section" id="work">
          <div className="sectionHead workHead">
            <div><div className="sectionLabel">04 / Selected work</div><p className="kicker">Proof, not promises.</p></div>
            <div className="filterBar">
              {["All", "Strategy", "Corporate", "Private", "Disputes"].map(f =>
                <button className={filter === f ? "active" : ""} key={f} onClick={() => setFilter(f)}>{f}</button>
              )}
            </div>
          </div>
          <div className="projectGrid">
            {visibleProjects.map((p, i) => (
              <article className={`project p${i % 2}`} key={p.id}>
                <div className="projectImage"><img src={p.image} alt={p.title} /><span className="projectNo">0{p.id}</span><span className="projectArrow">↗</span></div>
                <div className="projectMeta"><div><h3>{p.title}</h3><p>{p.meta}</p></div><span>{p.cat}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="process section">
          <div className="processVisual">
            <div className="orb orb1" /><div className="orb orb2" />
            <div className="processQuote">“The best strategy is the one that makes the next decision <i>obvious.</i>”</div>
            <span className="processStamp">NOIR / METHOD / 01—04</span>
          </div>
          <div className="processCopy">
            <div className="sectionLabel">05 / Method</div>
            <p className="kicker">How we work</p>
            <h2>Quiet process.<br /><i>Visible progress.</i></h2>
            <div className="steps">
              {[
                ["01", "Listen", "Understand the situation, the people and what is really at stake."],
                ["02", "Frame", "Turn complexity into a small number of meaningful decisions."],
                ["03", "Move", "Build the plan, lead the work and communicate what matters."],
                ["04", "Measure", "Stay close to outcomes, not activity for activity's sake."]
              ].map(([n,t,d]) => <button className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></button>)}
            </div>
          </div>
        </section>

        <section className="quoteBand">
          <div className="quoteMark">“</div>
          <blockquote>{testimonials[activeTestimonial][0]}</blockquote>
          <div className="quoteBy"><strong>{testimonials[activeTestimonial][1]}</strong><span>{testimonials[activeTestimonial][2]}</span></div>
          <div className="quoteNav">
            <button onClick={() => setActiveTestimonial((activeTestimonial + testimonials.length - 1) % testimonials.length)}>←</button>
            <span>0{activeTestimonial + 1} / 0{testimonials.length}</span>
            <button onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}>→</button>
          </div>
        </section>

        <section className="insights section" id="insights">
          <div className="sectionHead">
            <div><div className="sectionLabel">06 / Insights</div><p className="kicker">Ideas worth keeping.</p></div>
            <h2>Thinking beyond<br /><i>the brief.</i></h2>
          </div>
          <div className="insightGrid">
            <article className="featuredInsight"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85" alt="" /><div><span>FIELD NOTE / 08 MIN</span><h3>What founders get wrong about complexity.</h3><button>Read article ↗</button></div></article>
            <div className="insightList">
              {[
                ["01", "Why calm is a competitive advantage.", "Strategy"],
                ["02", "The new rules of private capital.", "Markets"],
                ["03", "Designing a business that can outlive you.", "Legacy"],
                ["04", "When the right answer is to wait.", "Leadership"]
              ].map(x => <article key={x[0]}><span>{x[0]}</span><div><small>{x[2]}</small><h3>{x[1]}</h3></div><b>↗</b></article>)}
            </div>
          </div>
        </section>

        <section className="faq section">
          <div><div className="sectionLabel">07 / FAQ</div><p className="kicker">Good questions.</p><h2>Before we<br /><i>meet.</i></h2></div>
          <div className="faqList">
            {[
              ["Who do you work with?", "Founders, executives, family businesses, private clients and ambitious teams navigating a meaningful decision or period of change."],
              ["How do engagements begin?", "Usually with a private 45-minute conversation. We use that time to understand the situation, identify the real question and decide whether we are the right fit."],
              ["Do you work internationally?", "Yes. Our model is designed for cross-border work, with a trusted network of specialists where local expertise is required."],
              ["What makes the practice different?", "Senior people stay close to the work. We intentionally keep the client list small so quality, speed and discretion never become trade-offs."]
            ].map(([q,a],i) => <div className={`faqItem ${openFaq === i ? "open" : ""}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>0{i+1}</span><strong>{q}</strong><b>{openFaq === i ? "−" : "+"}</b></button>{openFaq === i && <p>{a}</p>}</div>)}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contactTop">
            <div className="sectionLabel light">08 / Contact</div>
            <h2>Have something<br /><i>important</i> to solve?</h2>
            <p>Tell us what is happening. We will tell you what we think the next move should be.</p>
            <div className="contactDetails"><a href="mailto:hello@noirandco.com">hello@noirandco.com ↗</a><span>+254 700 000 000</span><span>Nairobi · London · Worldwide</span></div>
          </div>
          <form className="contactForm" onSubmit={submit}>
            {submitted ? <div className="success"><span>✓</span><h3>Message received.</h3><p>Thank you. Our team will be in touch shortly.</p><button type="button" onClick={() => setSubmitted(false)}>Send another</button></div> : <>
              <label><span>Your name</span><input required placeholder="Jane Doe" /></label>
              <label><span>Email address</span><input required type="email" placeholder="jane@company.com" /></label>
              <label><span>What can we help with?</span><select defaultValue=""><option value="" disabled>Select a focus</option><option>Strategic advisory</option><option>Business & tax</option><option>Disputes & risk</option><option>Private client</option></select></label>
              <label className="wide"><span>Tell us a little more</span><textarea required rows="4" placeholder="A few lines about the situation, timing and what matters most..."></textarea></label>
              <button className="submitBtn" type="submit">Request a confidential conversation <span>↗</span></button>
            </>}
          </form>
        </section>

        <section className="closing">
          <div className="closingWord">NOIR</div>
          <p>Strategy. Counsel. Impact.</p>
        </section>
      </main>

      <footer className="footer">
        <div><button className="brand"><span className="brandMark">N</span><span><strong>NOIR</strong><em>& CO.</em></span></button><p>Independent thinking for consequential decisions.</p></div>
        <div className="footerLinks"><div><span>Explore</span>{nav.slice(0,5).map(x => <button key={x} onClick={() => scrollTo(x)}>{x}</button>)}</div><div><span>Connect</span><a href="mailto:hello@noirandco.com">Email</a><a href="#">LinkedIn</a><a href="#">Instagram</a></div></div>
        <div className="copyright"><span>© 2026 NOIR & CO.</span><span>Privacy · Terms</span><span>Built with intention.</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
