function splitBullets(text) {
  return text
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);
}

const GRID_PROJECTS = [
  {
    title: "Plant Disease Identification Using CNNs",
    goal:
      "Automate plant disease detection to support lower-resource farmers with accessible early-diagnosis tools",
    detail:
      "38-class classifier using TensorFlow/Keras with VGG16 transfer learning (ImageNet weights), frozen conv layers + custom Dense softmax · Deployed via Streamlit — users upload leaf images, auto-resized to 224×224, normalized, classified with human-readable labels",
    tags: ["TensorFlow", "Keras", "VGG16", "Streamlit", "Python"],
  },
  {
    title: "Maintenance Cost Analysis System",
    goal:
      "Data-driven cost modeling from historical maintenance data for accurate forecasting and competitive pricing",
    detail:
      "Python (pandas, NumPy) pipeline to clean and standardize multi-year service data · Feature engineering with groupby, agg, datetime extraction for cost metrics · Pivot-table structures and derived features (asset age, annualized cost) to analyze trends",
    tags: ["Python", "pandas", "NumPy"],
  },
  {
    title: "AI-Assisted SEO Analytics System",
    goal:
      "Automatically improve Google Business Profile content using keyword/search data to rank higher in local search",
    detail:
      "Python, pytrends, and Google Search Console API to collect and analyze keyword trends · Automated workflow via cron/Task Scheduler scoring keywords by growth, local relevance, CTR opportunity · Generated GBP field recommendations: services, descriptions, posts, FAQs",
    tags: ["Python", "pytrends", "Google Search Console API", "pandas"],
  },
];

const PAPER_PROJECT = {
  title: "Paper in Publishing @ Frontiers of Blockchain",
  subtitle:
    "Envisioning a Backer LST (bLST) Scheme for Substantiating Contributor-Backer-Host Tasking in Web3 Business Operations",
  description:
    "First-authored academic paper proposing a novel Web3 model transforming liquid staking into task-backed capital for verifiable business workflows using a Proof-of-Task framework.",
  pdfPath: process.env.PUBLIC_URL + "/papers/blockchain-paper.pdf",
  tags: ["Web3", "DeFi", "Proof-of-Task", "Liquid Staking"],
};

function ProjectTags({ tags }) {
  return (
    <div className="project-tags">
      {tags.map((tag) => (
        <span key={tag} className="project-tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ProjectsPage() {
  return (
    <main className="projects-page page-transition">
      <article className="projects-outer glass-card">
        <h1 className="projects-title">Projects</h1>

        <div className="projects-grid">
          {GRID_PROJECTS.map((p) => (
            <article key={p.title} className="glass-card project-card">
              <h2 className="project-card-title">{p.title}</h2>
              <p className="project-card-goal">Goal: {p.goal}</p>
              <ul className="project-card-list">
                {splitBullets(p.detail).map((line, i) => (
                  <li key={`${p.title}-${i}`}>{line}</li>
                ))}
              </ul>
              <ProjectTags tags={p.tags} />
            </article>
          ))}

          <article className="glass-card project-card project-card-wide">
            <h2 className="project-card-title">{PAPER_PROJECT.title}</h2>
            <p className="project-card-subtitle">{PAPER_PROJECT.subtitle}</p>
            <p className="project-card-desc">{PAPER_PROJECT.description}</p>
            <a
              className="project-paper-btn"
              href={PAPER_PROJECT.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Paper →
            </a>
            <ProjectTags tags={PAPER_PROJECT.tags} />
          </article>
        </div>
      </article>
    </main>
  );
}
