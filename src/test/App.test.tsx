import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TeamTimelinePage from "../pages/TeamTimelinePage";
import MyUpdatesPage from "../pages/MyUpdatesPage";
import AnalyticsPage from "../pages/AnalyticsPage";

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("StandupBot")).toBeInTheDocument(); });
    it("TeamTimelinePage renders", () => { wrap(<TeamTimelinePage />); expect(screen.getByText("Team Timeline")).toBeInTheDocument(); });
    it("MyUpdatesPage renders", () => { wrap(<MyUpdatesPage />); expect(screen.getByText("Post Your Update")).toBeInTheDocument(); });
    it("AnalyticsPage renders", () => { wrap(<AnalyticsPage />); expect(screen.getByText("Team Analytics")).toBeInTheDocument(); });
});
