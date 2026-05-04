import { useNavigate } from "react-router-dom";

export function HomeNavLink() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="home-back-link"
      onClick={() => navigate(-1)}
      aria-label="Go back"
    >
      <span aria-hidden className="home-back-link-arrow">
        ←
      </span>
    </button>
  );
}
