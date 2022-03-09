import { Routes, Route } from "react-router-dom";
import "./App.css";
import URLAnalyzer from "./components/URLAnalyzer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<URLAnalyzer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
