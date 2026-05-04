const ROLES = [
  {
    accent: "sky",
    title: "President @ Bookworm Global",
    subtitle:
      "International Organization · Promotion of literacy in underserved communities",
    bullets: [
      "Chosen as President after outstanding community work",
      "Manage 3,500+ volunteers internationally",
      'Created "Literacy Initiatives" impacting 5,000+ students worldwide',
      "Donated 5,000+ books to underserved areas",
      "Trained 100+ volunteers",
    ],
  },
  {
    accent: "violet",
    title: "Vice President @ Mu Alpha Theta",
    subtitle: "Math Club",
    bullets: [
      "Handle communication with outside organizations/sponsors",
      "Manage 4 internal committees (International Logic Olympiad, Volunteering, Competition Math, Competition Physics)",
      "Co-led integration competition for 100+ students",
      "Co-led math camp for 100+ elementary students",
    ],
  },
  {
    accent: "rose",
    title: "Director of Communications @ Queens United Chess",
    subtitle: "National Nonprofit · Empowering girls in chess",
    bullets: [
      "Manage 15 team members for public communications",
      "Lead women-empowering chess podcast — grew listeners 80%",
      "Edit weekly newsletter to 300+ subscribers — grew by 75%",
      "Teach 2 students through weekly chess lessons",
    ],
  },
];

export function CommunityPage() {
  return (
    <main className="community-page page-transition">
      <article className="community-outer glass-card">
        <h1 className="community-title">Community</h1>

        <div className="community-layout">
          <div className="community-roles">
            {ROLES.map(({ accent, title, subtitle, bullets }) => (
              <section
                key={title}
                className={`glass-card community-role-card community-role-card--${accent}`}
              >
                <h2 className="community-role-title">{title}</h2>
                <p className="community-role-subtitle">{subtitle}</p>
                <ul className="community-role-list">
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Community photos: public/images/community-image1.jpeg (image1), community-image0.jpeg (image0) */}
          <aside className="community-photos" aria-label="Community photos">
            <img
              src={process.env.PUBLIC_URL + "/images/community-image1.jpeg"}
              alt="Community"
              className="community-photo-img"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/community-image0.jpeg"}
              alt="Community"
              className="community-photo-img"
            />
          </aside>
        </div>
      </article>
    </main>
  );
}
