import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CommunityPage } from "./pages/CommunityPage";
import { WorkPage } from "./pages/WorkPage";
import { ProjectsPage } from "./pages/ProjectsPage";

export default function App() {
  /* GitHub Pages: use HashRouter so deep links and reloads work without server rewrites. */
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
