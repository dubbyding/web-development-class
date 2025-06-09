import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  return (
    <div>
      Hello World!{state}
      <button\
        onClick={() =>
          setState((prev) => {
            return prev + 1;
          })
        }
      >
        Add One
      </button>
      <button
        onClick={() =>
          setState((prev) => {
            return prev - 1;
          })
        }
      >
        Remove One
      </button>
    </div>
  );
}

export default App;
