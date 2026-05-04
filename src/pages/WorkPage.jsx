function splitBullets(text) {
  return text
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);
}

const JOBS = [
  {
    dot: "sky",
    title: "Software Intern @ ITRemedy",
    detail:
      "Built automated SEO optimization pipeline using pytrends (Google Trends API) and Google Search Console API to analyze trending keywords with time-series analysis in pandas · Developed scheduled data pipeline via cron/Windows Task Scheduler to evaluate keyword performance and generate structured Google Business Profile updates (services, descriptions, posts, FAQs)",
  },
  {
    dot: "violet",
    title: "Intern @ Emeritus Clinical Solutions",
    detail:
      "Built data processing and normalization pipeline using Python (pandas, NumPy) to clean and standardize multi-year maintenance datasets · Designed historical cost analysis framework transforming raw operational data into structured insights for pricing and forecasting",
  },
  {
    dot: "rose",
    title: "Public Research Intern @ Cambridge Blockchain Society",
    detail:
      "Participated in DormDAO Fund — helped manage $120K+ in assets, led Web3 investment research · First author on paper publishing in Frontiers of Blockchain journal, proposing novel Proof-of-Task Web3 model · Authored academic reviews on Web3 adoption, DeFi protocols, and decentralized business models",
  },
  {
    dot: "sky",
    title: "Research Assistant in Analytical Chemistry @ Omary Lab, UNT",
    detail:
      "Synthesized MeMOF compounds for adsorption of BTEX industrial contaminants for water purification · Developed OriginPro data analysis workflow for compound structure validation · Designed composite filtration system integrating MeMOF for scalable real-world water treatment",
  },
];

export function WorkPage() {
  return (
    <main className="work-page page-transition">
      <article className="work-outer glass-card">
        <h1 className="work-title">Work</h1>

        <div className="work-timeline">
          <div className="work-timeline-line" aria-hidden="true" />

          <ol className="work-items">
            {JOBS.map((job) => (
              <li key={job.title} className="work-item">
                <div className="work-item-marker">
                  <span
                    className={`work-dot work-dot--${job.dot}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="glass-card work-card">
                  <h2 className="work-card-title">{job.title}</h2>
                  <ul className="work-card-list">
                    {splitBullets(job.detail).map((line, i) => (
                      <li key={`${job.title}-${i}`}>{line}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </main>
  );
}
