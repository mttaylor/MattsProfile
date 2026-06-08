import { useState, useEffect } from 'react'
import './App.css'

const NAV_LINKS = ['Work', 'Philosophy', 'Career', 'Skills', 'Connect']

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__logo">
        <span className="mono teal">mt</span>
        <span className="nav__logo-dot" />
      </a>
      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {NAV_LINKS.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="nav__burger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

function Tag({ children, variant = 'default' }) {
  return <span className={`tag tag--${variant}`}>{children}</span>
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner container">
        <p className="hero__pre mono">
          <span className="teal">// </span>
          release engineer · ai strategist · platform builder
        </p>
        <h1 className="hero__headline">
          I build the systems,<br />
          the policies, and the<br />
          <span className="teal">AI that ships them.</span>
        </h1>
        <p className="hero__sub">
          Strategic technology leader based in Boise, Idaho. Over a decade turning
          engineering chaos into governed, automated, high-velocity delivery.
        </p>
        <div className="hero__cta">
          <a href="#work" className="btn btn--primary">View My Work</a>
          <a href="#connect" className="btn btn--ghost">Get in Touch</a>
        </div>
      </div>
      <div className="hero__grid-overlay" aria-hidden="true" />
    </section>
  )
}

function Stats() {
  const stats = [
    { value: '13+', label: 'Years Experience' },
    { value: '300+', label: 'Clients Served' },
    { value: '800+', label: 'Environments Managed' },
    { value: '99.99%', label: 'Deployment Success SLA' },
    { value: '25%', label: 'Reduction in Deploy Cycles' },
  ]
  return (
    <div className="stats container">
      {stats.map(s => (
        <div key={s.label} className="stats__item">
          <span className="stats__value teal mono">{s.value}</span>
          <span className="stats__label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

const WORK = [
  {
    title: 'Path to Production',
    company: 'Unqork',
    desc: 'Authored and enforced enterprise-wide SDLC release policies standardizing release criteria across 300+ clients and 800+ environments. Reduced late-cycle rework and achieved a 99.99% deployment success SLA.',
    tags: ['Governance', 'SDLC', 'Policy', 'Release Management'],
    highlight: '99.99% deployment SLA',
  },
  {
    title: 'Feature Flag Dashboard',
    company: 'Unqork',
    desc: 'Built an internal application to manage feature flag hygiene and adoption rates — solving gaps LaunchDarkly\'s own tooling didn\'t address. Gave teams real-time visibility into flag lifecycle and adoption trends.',
    tags: ['AI-Assisted Dev', 'Internal Tooling', 'JavaScript', 'Feature Flags'],
  },
  {
    title: 'Environment Version Data App',
    company: 'Unqork',
    desc: 'Developed an internal compliance tracking application to monitor and maintain customer environment versions, helping keep 800+ environments audit-ready and version-aligned.',
    tags: ['Compliance', 'Internal Tooling', 'SaaS Operations'],
  },
  {
    title: 'AI-Enhanced Release Lifecycle',
    company: 'Unqork',
    desc: 'Integrated Claude, Gemini, and GitHub CoPilot into the release lifecycle to automate deployment scripts, validation logic, and complex documentation — increasing team velocity and reducing human error.',
    tags: ['Claude', 'Gemini', 'CoPilot', 'Prompt Engineering', 'CI/CD'],
  },
  {
    title: 'Mobile Automation Framework',
    company: 'Evidation Health',
    desc: 'Designed and built a mobile test automation framework from the ground up, significantly increasing validation speed and test coverage across iOS and Android health data applications.',
    tags: ['Appium', 'Mobile', 'Test Automation', 'Framework Design'],
  },
  {
    title: 'End-to-End Data Pipeline Testing',
    company: 'Evidation Health',
    desc: 'Built comprehensive data pipeline testing frameworks using Snowflake, DBT, Airflow, and GitHub Actions — ensuring data integrity across clinical health data pipelines at scale.',
    tags: ['Snowflake', 'DBT', 'Airflow', 'Data Governance', 'GitHub Actions'],
  },
]

function Work() {
  return (
    <section id="work" className="section container">
      <p className="section__pre mono"><span className="teal">// </span>selected work</p>
      <h2 className="section__title">What I've Shipped</h2>
      <div className="work-grid">
        {WORK.map(item => (
          <article key={item.title} className="work-card">
            <div className="work-card__header">
              <div>
                <h3 className="work-card__title">{item.title}</h3>
                <p className="work-card__company mono">{item.company}</p>
              </div>
              {item.highlight && (
                <span className="work-card__highlight">★ {item.highlight}</span>
              )}
            </div>
            <p className="work-card__desc">{item.desc}</p>
            <div className="work-card__tags">
              {item.tags.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const PRINCIPLES = [
  {
    quote: 'Governance isn\'t a gate — it\'s an accelerator.',
    body: 'The best policies don\'t slow teams down. They eliminate the decisions that shouldn\'t be made twice, giving engineers a clear path from commit to production with confidence.',
  },
  {
    quote: 'AI is a multiplier, not a replacement.',
    body: 'Every tool I integrate — Claude, Gemini, CoPilot — is chosen to multiply what humans already do well. The goal is flow state: fewer context switches, better decisions, faster cycles.',
  },
  {
    quote: 'Automate the boring. Own the interesting.',
    body: 'Repetitive validation, documentation, and deployment steps should run themselves. That frees teams to focus on the problems that actually require judgment.',
  },
  {
    quote: 'The gap between Engineering and Ops is a product problem.',
    body: 'Friction at the deploy boundary usually traces back to misaligned ownership and unclear contracts. My job is to close that gap with process, tooling, and shared language.',
  },
]

function Philosophy() {
  return (
    <section id="philosophy" className="section container">
      <p className="section__pre mono"><span className="teal">// </span>how i think</p>
      <h2 className="section__title">Philosophy</h2>
      <div className="philosophy-grid">
        {PRINCIPLES.map(p => (
          <div key={p.quote} className="principle-card">
            <blockquote className="principle-card__quote">"{p.quote}"</blockquote>
            <p className="principle-card__body">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const CAREER = [
  {
    role: 'Senior Release Manager & Strategic Lead',
    company: 'Unqork',
    location: 'New York, NY (Remote)',
    period: 'May 2023 – Present',
    bullets: [
      'Authored "The Path to Production" SDLC policies for 300+ clients and 800+ environments',
      'Integrated Claude, Gemini, and CoPilot into release lifecycle — boosting velocity and accuracy',
      'Built internal tooling: Feature Flag Dashboard and Environment Version Data app',
      'Optimized CI/CD pipelines (Git, AWX, JavaScript) achieving 25% reduction in deploy cycles',
      'Led cross-functional collaboration across Product, Engineering, QA, Support, and DevOps',
    ],
  },
  {
    role: 'Manager, QA & Senior Release Manager',
    company: 'Evidation Health Incorporated',
    location: 'Santa Barbara, CA (Remote)',
    period: 'Feb 2020 – May 2023',
    bullets: [
      'Designed mobile automation framework from scratch — increased speed and coverage significantly',
      'Built end-to-end data pipeline testing using Snowflake, DBT, Airflow, and GitHub Actions',
      'Authored enterprise incident response playbooks; integrated Datadog and Opsgenie to reduce MTTR',
      'Directed multi-functional team of SDETs and offshore QA engineers via TestRail',
    ],
  },
  {
    role: 'Manager, QA Test Automation / DevOps Engineer',
    company: 'Opto 22',
    location: 'Temecula, CA',
    period: 'Mar 2013 – Feb 2020',
    bullets: [
      'Built and maintained 100+ VM cluster using VMware vSphere for CI/CD via Jenkins',
      'Introduced DevOps best practices: Ansible, Docker, Selenium on legacy release processes',
      'Directed QA automation team building C#-based test frameworks — reduced regression times',
    ],
  },
]

function Career() {
  return (
    <section id="career" className="section container">
      <p className="section__pre mono"><span className="teal">// </span>professional experience</p>
      <h2 className="section__title">Career</h2>
      <div className="timeline">
        {CAREER.map((job, i) => (
          <div key={job.company} className="timeline__item">
            <div className="timeline__marker">
              <div className="timeline__dot" />
              {i < CAREER.length - 1 && <div className="timeline__line" />}
            </div>
            <div className="timeline__content">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{job.role}</h3>
                  <p className="timeline__company">
                    <span className="teal">{job.company}</span>
                    <span className="text-muted"> · {job.location}</span>
                  </p>
                </div>
                <span className="timeline__period mono">{job.period}</span>
              </div>
              <ul className="timeline__bullets">
                {job.bullets.map(b => (
                  <li key={b}><span className="teal mono">→</span> {b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const SKILLS = [
  {
    category: 'AI & LLM Integration',
    items: ['Claude', 'Gemini AI', 'GitHub CoPilot', 'ChatGPT', 'Prompt Engineering', 'AI-Driven Automation', 'Greptile', 'Graphite'],
  },
  {
    category: 'Governance & Policy',
    items: ['SDLC Policy Development', 'SOC2 Compliance', 'Risk Management', 'Incident Response Playbooks', 'Path to Production', 'Release Criteria'],
  },
  {
    category: 'CI/CD & DevOps',
    items: ['GitHub Actions', 'Jenkins', 'CircleCI', 'AWX', 'Terraform', 'Ansible', 'Docker', 'Infrastructure as Code'],
  },
  {
    category: 'Testing & Monitoring',
    items: ['Selenium', 'Appium', 'WebdriverIO', 'Ranorex', 'TestRail', 'Datadog', 'Opsgenie', 'QA Automation Frameworks'],
  },
  {
    category: 'Cloud & Data',
    items: ['AWS (Cloud Practitioner)', 'Snowflake', 'DBT', 'Airflow', 'VMware vSphere', 'Feature Flags (LaunchDarkly)'],
  },
  {
    category: 'Languages & Tools',
    items: ['JavaScript / TypeScript', 'C#', 'YAML', 'Bash', 'PowerShell', 'Git', 'SQL'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section container">
      <p className="section__pre mono"><span className="teal">// </span>technical depth</p>
      <h2 className="section__title">Skills</h2>
      <div className="skills-grid">
        {SKILLS.map(group => (
          <div key={group.category} className="skills-group">
            <h3 className="skills-group__title">{group.category}</h3>
            <div className="skills-group__items">
              {group.items.map(item => (
                <Tag key={item} variant="skill">{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="creds">
        <h3 className="creds__title">Education & Certifications</h3>
        <div className="creds__list">
          <div className="cred-item">
            <span className="teal mono">★</span>
            <div>
              <p className="cred-item__name">B.S. Computer Engineering</p>
              <p className="cred-item__detail">Cal Poly Pomona · 2012</p>
            </div>
          </div>
          <div className="cred-item">
            <span className="teal mono">★</span>
            <div>
              <p className="cred-item__name">AWS Certified Cloud Practitioner</p>
              <p className="cred-item__detail">Amazon Web Services</p>
            </div>
          </div>
          <div className="cred-item">
            <span className="teal mono">★</span>
            <div>
              <p className="cred-item__name">Novice Builder Badge</p>
              <p className="cred-item__detail">Unqork</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Connect() {
  return (
    <section id="connect" className="section container">
      <p className="section__pre mono"><span className="teal">// </span>get in touch</p>
      <h2 className="section__title">Let's Talk</h2>
      <p className="connect__sub">
        Open to senior leadership roles, consulting, and strategic advisory work in AI tooling,
        SDLC governance, and platform engineering.
      </p>
      <div className="connect__links">
        <a href="mailto:MattTaylor.CE@gmail.com" className="btn btn--primary">
          MattTaylor.CE@gmail.com →
        </a>
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noreferrer"
          className="btn btn--ghost"
        >
          LinkedIn →
        </a>
        <a
          href="https://github.com/rivalize"
          target="_blank"
          rel="noreferrer"
          className="btn btn--ghost"
        >
          GitHub →
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="mono teal">mt</span>
        <p className="footer__copy">© {new Date().getFullYear()} Matthew Taylor · Boise, Idaho</p>
        <p className="footer__copy text-muted">Built with React + Vite</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Philosophy />
        <Career />
        <Skills />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
