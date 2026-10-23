import { Routes, Route } from "react-router";
import { DashboardPage } from "./pages/DashboardPage";
import { SneakersPage } from "./pages/SneakersPage";
import { PerfumesPage } from "./pages/PerfumesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AppLayout } from "./components/layout/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/sneakers" element={<SneakersPage />} />
          <Route path="/perfumes" element={<PerfumesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
