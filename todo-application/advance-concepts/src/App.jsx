import { useReducer } from "react";

function App() {
  // Redux Smaller version
  const [state, dispatch] = useReducer(
    function (state, arg) {
      switch (arg.type) {
        case "ADD":
          return { count: state.count + 1 };
        case "SUB":
          return { count: state.count - 1 };
      }
    },
    {
      count: 0,
    }
  );

  return (
    <div>
      <p>The count is {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SUB" });
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
