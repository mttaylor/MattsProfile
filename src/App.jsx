import { useState, useEffect } from 'react'
import './App.css'
import profileImg from './assets/profile.jpg'

const NAV_LINKS = ['Work', 'Projects', 'Philosophy', 'Career', 'Recommendations', 'Skills', 'Connect']

function CopyChip({ value, display, className = '' }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button className={`copy-chip ${className}`} onClick={copy} title={`Copy ${value}`}>
      <span>{copied ? 'Copied!' : display}</span>
      <span className="copy-chip__icon">{copied ? '✓' : '⎘'}</span>
    </button>
  )
}

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
      <div className="nav__brand">
        <a href="#top" className="nav__logo">
          <span className="nav__logo-name">Matt Taylor</span>
        </a>
        <CopyChip value="MattTaylor.CE@gmail.com" display="MattTaylor.CE@gmail.com" className="nav__email-chip" />
      </div>
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
    <section id="top" className="hero" itemScope itemType="https://schema.org/Person">
      <meta itemProp="name" content="Matthew Taylor" />
      <meta itemProp="email" content="MattTaylor.CE@gmail.com" />
      <meta itemProp="jobTitle" content="Senior Release Manager & Strategic Lead" />
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__pre mono">
            <span className="teal">// </span>
            release engineer · ai strategist · platform builder
          </p>
          <h1 className="hero__headline">
            I build the systems,<br />
            the policies, and<br />
            <span className="teal">the AI that ships them.</span>
          </h1>
          <p className="hero__sub" itemProp="description">
            Strategic technology leader based in Star, Idaho. Over 15 years turning
            engineering chaos into governed, automated, high-velocity delivery.
          </p>
          <div className="hero__cta">
            <a href="#work" className="btn btn--primary">View My Work</a>
            <a href="#connect" className="btn btn--ghost">Get in Touch</a>
          </div>
        </div>

        <aside className="hero__side" aria-label="Availability and key metrics">
          <div className="hero__photo-wrap">
            <img src={profileImg} alt="Matthew Taylor" className="hero__photo" />
          </div>
          <div className="hero__status-card">
            <div className="hero__status-badge">
              <span className="hero__status-dot" aria-hidden="true" />
              <span className="hero__status-text">Open to Opportunities</span>
            </div>
            <div className="hero__status-details">
              <p className="hero__status-line">
                <span className="teal mono" aria-hidden="true">→</span>
                <span itemProp="address">Star, Idaho · Remote OK</span>
              </p>
              <p className="hero__status-line">
                <span className="teal mono" aria-hidden="true">→</span>
                Senior Leadership · Director · Consulting
              </p>
              <p className="hero__status-line">
                <span className="teal mono" aria-hidden="true">→</span>
                AI Tooling · SDLC Governance · Platform Eng
              </p>
            </div>
          </div>
          <div className="hero__metrics">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '300+', label: 'Enterprise Clients' },
              { value: '800+', label: 'Environments' },
              { value: '99.99%', label: 'Deploy SLA' },
            ].map(s => (
              <div key={s.label} className="hero__metric">
                <span className="hero__metric-value teal mono">{s.value}</span>
                <span className="hero__metric-label">{s.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <div className="hero__grid-overlay" aria-hidden="true" />
    </section>
  )
}

function Intro() {
  return (
    <div className="intro-strip">
      <div className="intro-strip__inner container">
        <div className="intro-strip__identity">
          <h2 className="intro-strip__name">Matthew Taylor</h2>
          <p className="intro-strip__title mono">Senior Release Manager &amp; AI Strategist · Star, Idaho</p>
        </div>
        <div className="intro-strip__contact">
          <CopyChip value="MattTaylor.CE@gmail.com" display="MattTaylor.CE@gmail.com" className="intro-strip__chip" />
          <CopyChip value="208-994-8580" display="208-994-8580" className="intro-strip__chip" />
          <a href="tel:2089948580" className="intro-strip__call btn btn--ghost btn--sm">Call →</a>
        </div>
      </div>
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
          <article key={item.title} className="work-card" itemScope itemType="https://schema.org/CreativeWork">
            <div className="work-card__header">
              <div>
                <h3 className="work-card__title" itemProp="name">{item.title}</h3>
                <p className="work-card__company mono" itemProp="producer">{item.company}</p>
              </div>
              {item.highlight && (
                <span className="work-card__highlight">★ {item.highlight}</span>
              )}
            </div>
            <p className="work-card__desc" itemProp="description">{item.desc}</p>
            <div className="work-card__tags">
              {item.tags.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section container">
      <p className="section__pre mono"><span className="teal">// </span>side projects</p>
      <h2 className="section__title">What I'm Building</h2>
      <div className="projects-grid">

        <article className="project-card project-card--featured">
          <div className="project-card__header">
            <div>
              <h3 className="project-card__title">Deploy or Die</h3>
              <p className="project-card__domain mono teal">deployordie.ai</p>
            </div>
            <span className="project-card__badge">Founder</span>
          </div>
          <p className="project-card__desc">
            A no-fluff newsletter and content platform built for engineers who ship.
            Four topics — AI Tools, DevOps &amp; Release Engineering, Crypto &amp; Web3, and Making Money With Tech —
            filtered through one brutal standard: <em>does it actually work?</em> No theory, no hype, no padding.
          </p>
          <p className="project-card__desc">
            Built as an extension of 15+ years at the deploy boundary — the same mindset that went into
            governing 800+ environments now goes into every issue.
          </p>
          <div className="project-card__tags">
            <Tag>Newsletter</Tag>
            <Tag>AI Tooling</Tag>
            <Tag>DevOps</Tag>
            <Tag>Release Engineering</Tag>
            <Tag>Content Platform</Tag>
          </div>
          <div className="project-card__links">
            <a href="https://deployordie.ai" target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
              Visit Site →
            </a>
            <a href="https://www.linkedin.com/company/deployordie" target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
              LinkedIn →
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-card__header">
            <div>
              <h3 className="project-card__title">Cullit.io</h3>
              <p className="project-card__domain mono teal">cullit.io</p>
            </div>
            <span className="project-card__badge project-card__badge--oss">Open Source</span>
          </div>
          <p className="project-card__desc">
            Started as a full-featured SaaS product: AI-powered release notes generated automatically
            from git commits, pull requests, and ticket systems (Jira, Linear, GitHub). Supports
            Claude, Gemini, OpenAI, and Ollama — with audience modes for engineers, customers, and executives.
          </p>
          <p className="project-card__desc">
            Made it open source (MIT) to give back to the community. Runs via CLI, GitHub Actions, or API
            and publishes directly to GitHub Releases, Slack, Discord, Confluence, and Notion.
          </p>
          <div className="project-card__tags">
            <Tag>AI-Assisted Dev</Tag>
            <Tag>Open Source</Tag>
            <Tag>Release Notes</Tag>
            <Tag>GitHub Actions</Tag>
            <Tag>Claude</Tag>
            <Tag>SaaS → OSS</Tag>
          </div>
          <div className="project-card__links">
            <a href="https://cullit.io" target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
              Visit Site →
            </a>
          </div>
        </article>

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
    startDate: '2023-05',
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
    startDate: '2020-02',
    endDate: '2023-05',
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
    startDate: '2013-03',
    endDate: '2020-02',
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
          <div
            key={job.company}
            className="timeline__item"
            itemScope
            itemType="https://schema.org/OrganizationRole"
          >
            <meta itemProp="roleName" content={job.role} />
            <meta itemProp="startDate" content={job.startDate} />
            {job.endDate && <meta itemProp="endDate" content={job.endDate} />}
            <div className="timeline__marker">
              <div className="timeline__dot" />
              {i < CAREER.length - 1 && <div className="timeline__line" />}
            </div>
            <div className="timeline__content">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{job.role}</h3>
                  <p className="timeline__company">
                    <span className="teal" itemProp="memberOf">{job.company}</span>
                    <span className="text-muted"> · {job.location}</span>
                  </p>
                </div>
                <span className="timeline__period mono">{job.period}</span>
              </div>
              <ul className="timeline__bullets">
                {job.bullets.map(b => (
                  <li key={b}><span className="teal mono" aria-hidden="true">→</span> {b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const RECOMMENDATIONS = [
  {
    name: 'Ariane Coffin',
    title: 'Engineering Leader · Test Automation',
    relationship: 'Worked with Matt at Evidation Health',
    quote: 'I worked with Matt at Evidation Health, where he served as Release Manager and QA Manager while I was on the test automation team. Matt brought structure and reliability to our release process, made significant improvements to our CI/CD pipeline, and approached every problem with genuine thoughtfulness. He was always communicative and had a real knack for cross-functional coordination. I would be thrilled to work with him again.',
  },
  {
    name: 'Aaron Freeman',
    title: 'CTO & Co-Founder at Upwell',
    relationship: 'Worked with Matt at Evidation Health',
    quote: 'Matthew is an expert in software development and release processes. We worked together at Evidation to build reliable and repeatable delivery pipelines. His skills are super relevant in this age of AI driven development, where continuous delivery is a must and building the pipeline is as important as building the software itself. If you want to ship fast and reliably, you want Matthew on your team.',
  },
  {
    name: 'Daniel Min',
    title: 'Principal Security Engineer at SS&C Technology',
    relationship: 'Worked with Matt at Unqork',
    quote: 'I worked closely with Matt at Unqork when he was our Release Manager. He was always on top of our release schedule and amazing at making people accountable for what they are responsible for in the releases. Matt was very easy to work with and loved to share his knowledge and learn things from others as well. I highly recommend Matt for any type of QA or release management work.',
  },
]

function Recommendations() {
  return (
    <section id="recommendations" className="section container">
      <p className="section__pre mono"><span className="teal">// </span>what colleagues say</p>
      <h2 className="section__title">Recommendations</h2>
      <div className="recs-grid">
        {RECOMMENDATIONS.map(rec => (
          <figure key={rec.name} className="rec-card">
            <span className="rec-card__mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="rec-card__quote">{rec.quote}</blockquote>
            <figcaption className="rec-card__author">
              <span className="rec-card__name">{rec.name}</span>
              <span className="rec-card__title">{rec.title}</span>
              <span className="rec-card__rel mono">{rec.relationship}</span>
            </figcaption>
          </figure>
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
          <div className="cred-item" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
            <span className="teal mono" aria-hidden="true">★</span>
            <div>
              <p className="cred-item__name" itemProp="name">B.S. Computer Engineering</p>
              <p className="cred-item__detail">Cal Poly Pomona · 2012</p>
            </div>
          </div>
          <div className="cred-item" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
            <span className="teal mono" aria-hidden="true">★</span>
            <div>
              <p className="cred-item__name" itemProp="name">AWS Certified Cloud Practitioner</p>
              <p className="cred-item__detail">Amazon Web Services</p>
            </div>
          </div>
          <div className="cred-item" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
            <span className="teal mono" aria-hidden="true">★</span>
            <div>
              <p className="cred-item__name" itemProp="name">Novice Builder Badge</p>
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
        Open to senior leadership roles, director-level positions, consulting, and strategic advisory
        work in AI tooling, SDLC governance, and platform engineering. Remote-friendly.
      </p>
      <div className="contact-cards">
        <div className="contact-card">
          <span className="contact-card__label mono">Name</span>
          <span className="contact-card__value">Matthew Taylor</span>
        </div>
        <div className="contact-card">
          <span className="contact-card__label mono">Email</span>
          <div className="contact-card__row">
            <a href="mailto:MattTaylor.CE@gmail.com" className="contact-card__value contact-card__link">
              MattTaylor.CE@gmail.com
            </a>
            <CopyChip value="MattTaylor.CE@gmail.com" display="Copy" className="contact-card__copy" />
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-card__label mono">Phone</span>
          <div className="contact-card__row">
            <a href="tel:2089948580" className="contact-card__value contact-card__link">
              208-994-8580
            </a>
            <CopyChip value="208-994-8580" display="Copy" className="contact-card__copy" />
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-card__label mono">Location</span>
          <span className="contact-card__value">Star, Idaho · Remote OK</span>
        </div>
      </div>
      <div className="connect__links">
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noreferrer"
          className="btn btn--primary"
        >
          LinkedIn →
        </a>
        <a
          href="https://github.com/mttaylor"
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
        <span className="nav__logo-name teal">Matt Taylor</span>
        <p className="footer__copy">© {new Date().getFullYear()} Matthew Taylor · Star, Idaho</p>
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
        <Intro />
        <Work />
        <Projects />
        <Philosophy />
        <Career />
        <Recommendations />
        <Skills />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
