import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TeamTimelinePage from "./pages/TeamTimelinePage";
import MyUpdatesPage from "./pages/MyUpdatesPage";
import AnalyticsPage from "./pages/AnalyticsPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<TeamTimelinePage />} />
          <Route path="/my-updates" element={<MyUpdatesPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
