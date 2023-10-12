import { createSignal } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import { LanguageContext } from "./utils/language";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [isEnglish, setIsEnglish] = createSignal(true);

  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;