import { Routes, Route } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import TutorialPage from "./pages/TutorialPage";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<IndexPage />} />
      <Route path="/tutorial" element={<TutorialPage />} />
    </Routes>
  );
}

export default App;
