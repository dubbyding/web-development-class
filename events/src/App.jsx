import { useState } from "react";

import "./App.css";

function App() {
  // Note: Sake samma kaam state banauna parxa
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [leftValue, setLeftValue] = useState(0);
  const [topValue, setTopValue] = useState(0);

  if (topValue < 0) {
    return <div>Overflow</div>;
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        // Kei xaina vane `undefined`
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              success: true,
              message: "User logged in successfully",
            });
          }, 1000);
        });
        alert(data.message);
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <input
          style={{
            position: "absolute",
            top: topValue,
            left: leftValue,
          }}
          onKeyDown={(e) => {
            setLeftValue((prev) => {
              if (e.code === "ArrowRight") {
                return prev + 10;
              }
              if (e.code === "ArrowLeft") {
                return prev - 10;
              }
              return prev;
            });
            setTopValue((prev) => {
              console.log(e.code);
              if (e.code === "ArrowUp") {
                return prev - 10;
              }
              if (e.code === "ArrowDown") {
                return prev + 10;
              }
              return prev;
            });
          }}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={function (e) {
          setPassword(e.target.value);
        }}
      />
      <div
        style={{
          position: "relative",
        }}
      >
        <button
          style={{
            position: "absolute",
            left: 0,
          }}
          // onMouseEnter={() => setLeftValue((prev) => (prev === 0 ? 100 : 0))}
          on
        >
          Submit
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: 0,
          width: "20px",
          height: "20px",
          backgroundColor: "red",
        }}
      />
    </form>
  );
}

export default App;
