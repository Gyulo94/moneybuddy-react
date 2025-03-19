import { Route, Routes } from "react-router-dom";
import Dashboard from "./App/dashboard/page";
import Home from "./App/home/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
