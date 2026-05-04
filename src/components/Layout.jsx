import { BeamsBackground } from "./BeamsBackground";

export function Layout({ children }) {
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
        {children}
      </div>
    </>
  );
}
