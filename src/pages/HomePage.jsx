import { useNavigate } from "react-router-dom";
import { User, Users, Briefcase, FolderKanban } from "lucide-react";

const TILES = [
  {
    label: "About Me",
    description: "Get to know me",
    path: "/about",
    accent: "sky",
    Icon: User,
  },
  {
    label: "Community",
    description: "Organizations & impact",
    path: "/community",
    accent: "violet",
    Icon: Users,
  },
  {
    label: "Work",
    description: "Professional experience",
    path: "/work",
    accent: "rose",
    Icon: Briefcase,
  },
  {
    label: "Projects",
    description: "Things I've built",
    path: "/projects",
    accent: "sky",
    Icon: FolderKanban,
  },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="home page-transition">
      <div className="home-inner">
        <section className="home-hero" aria-labelledby="home-hero-heading">
          <h1 id="home-hero-heading" className="home-hero-name">
            shivi shrivastava
          </h1>
          <p className="home-hero-tagline">
            student passionate about building scalable technology to help those in
            need
          </p>
        </section>

        <section className="home-nav" aria-label="Site sections">
          <div className="home-nav-grid">
            {TILES.map(({ label, description, path, accent, Icon }) => (
              <button
                key={path}
                type="button"
                className={`glass-card home-nav-tile home-nav-tile--${accent}`}
                onClick={() => navigate(path)}
              >
                <span className="home-nav-tile-icon" aria-hidden>
                  <Icon strokeWidth={1.5} size={26} />
                </span>
                <span className="home-nav-tile-label">{label}</span>
                <span className="home-nav-tile-desc">{description}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
