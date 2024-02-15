import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Factory from "./pages/Factory";
import Line from "./pages/Line";
import Machines from "./pages/Machines";
import Planning from "./pages/Planning";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="factory" element={<Factory />} />
        <Route path="line" element={<Line />} />
        <Route path="machines" element={<Machines />} />
        <Route path="planning" element={<Planning />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
