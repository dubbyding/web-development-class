import { useState } from "react";
import "./App.css";
import Tiktak from "./TikTak";

function App() {
  const [tiktak, setTiktak] = useState(Array(9).fill(0));
  const [isCross, setIsCross] = useState(false);

  console.log(tiktak, isCross);

  return (
    <div>
      <div
        style={{
          // Grid
          display: "flex",
          width: "80px",
          flexWrap: "wrap",
        }}
      >
        {tiktak.map(function (value, index) {
          return (
            <Tiktak
              index={index}
              value={value}
              onClick={() => {
                setTiktak((prevValue) => {
                  const temp = [...prevValue];
                  temp[index] = isCross ? 1 : -1;
                  return temp;
                });
                setIsCross((prevValue) => !prevValue);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
