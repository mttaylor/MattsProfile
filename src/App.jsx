import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <h1>Matt Taylor</h1>
        <p className="tagline">Software Developer</p>
        <div className="links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:matttaylor.ce@gmail.com">Email</a>
        </div>
      </header>

      <section className="about">
        <h2>About</h2>
        <p>
          Hi, I'm Matt. I build things for the web. Here's a bit about me and what I've been working on.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A short description of what this project does and what tech it uses.</p>
            <a href="#">View →</a>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>A short description of what this project does and what tech it uses.</p>
            <a href="#">View →</a>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>A short description of what this project does and what tech it uses.</p>
            <a href="#">View →</a>
          </div>
        </div>
      </section>

      <footer>
        <p>Built with React + Vite · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
