import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";
import { InputContext } from "./components/context/InputContext";
import { useState } from "react";
import Score from "./components/pages/Score";

/**
 *
 * 1) Route define garna help garxa
 * 2) Global states (using context, redux, zustand)
 * 3) Suspense (Kei error aayo vane fallback)
 */
function App() {
  const [input, setInput] = useState("");

  return (
    <InputContext.Provider
      value={{
        input,
        setInput,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/score" element={<Score />} />
          <Route path="/leaderboard" element={<div></div>} />
        </Routes>
      </BrowserRouter>
    </InputContext.Provider>
  );
}

export default App;
