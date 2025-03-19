import { Route, Routes } from "react-router-dom";
import DashboardLayouts from "./App/dashboard/layout";
import Dashboard from "./App/dashboard/page";
import Home from "./App/home/page";
import Layouts from "./components/shared/layouts";

function App() {
  return (
    <Routes>
      <Route element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route element={<DashboardLayouts />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
