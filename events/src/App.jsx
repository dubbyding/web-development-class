import { useState } from "react";

import "./App.css";

function App() {
  // Note: Sake samma kaam state banauna parxa
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={function (e) {
          setPassword(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
}

export default App;
