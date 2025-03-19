import { Route, Routes } from "react-router-dom";
import Dashboard from "./App/dashboard/page";
import Home from "./App/home/page";
import Layouts from "./components/shared/layouts";

function App() {
  return (
    <Routes>
      <Route element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
