import { useLocation } from "react-router-dom";
import { BeamsBackground } from "./BeamsBackground";
import { HomeNavLink } from "./HomeNavLink";

export function Layout({ children }) {
  const { pathname } = useLocation();
  const showHomeLink = pathname !== "/";

  return (
    <>
      <BeamsBackground />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
        }}
      >
        {showHomeLink ? <HomeNavLink /> : null}
        {children}
      </div>
    </>
  );
}
