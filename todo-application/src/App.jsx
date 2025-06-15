import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );
  const [isCheckedArray, setCheckedArray] = useState([]);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <main className="min-h-dvh">
      <div className="container mx-auto flex justify-center items-center flex-col">
        <div className="p-6 flex gap-4">
          <input
            className="border border-solid px-4 py-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="border border-solid px-4 py-2"
            onClick={() => {
              setTodo((prevValue) => [...prevValue, input]);
              setInput("");
            }}
          >
            Submit
          </button>
        </div>
        {todo.map((value, index) => (
          <div className="flex gap-2" key={index}>
            <input
              type="checkbox"
              checked={isCheckedArray[index]}
              onChange={(e) =>
                setCheckedArray((prevValue) => {
                  const temp = [...prevValue];
                  temp[index] = e.target.checked;
                  return temp;
                })
              }
            />
            <p className={isCheckedArray[index] ? "line-through" : ""}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
