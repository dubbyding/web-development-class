import { useEffect, useState } from "react";
import "./App.css";
import Tiktak from "./TikTak";

function App() {
  const [tiktak, setTiktak] = useState(Array(9).fill(0));
  const [isCross, setIsCross] = useState(false);

  // const isEven = useCallback(() => {
  //   return tiktak.filter((value) => value === 1).length % 2 === 0
  //     ? "Even"
  //     : "Odd";
  // }, [tiktak]);

  // const a = useMemo(() => {
  //   return tiktak.filter((value) => value === 1).length % 2 === 0
  //     ? "Even"
  //     : "Odd";
  // }, [tiktak]);

  const checkIfXisWinning = (array, value) => {
    const winningCondition = [
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [2, 4, 6],
      [0, 4, 8],
      [6, 7, 8],
      [3, 4, 5],
      [0, 1, 2],
    ];

    for (let i = 0; i < winningCondition.length; i++) {
      let isWinner = true;
      for (let j = 0; j < 3; j++) {
        console.log(array[winningCondition[i][j]], value);
        isWinner = array[winningCondition[i][j]] === value;
        if (!isWinner) {
          break;
        }
      }
      console.log(isWinner);
      if (isWinner) {
        return true;
      }
    }

    return false;
  };

  useEffect(
    function () {
      /**
       * Winning Condition
       * 0,1,2
       * 3,4,5
       * 6,7,8
       * 0,4,8
       * 2,4,6
       * 0,3,6
       * 1,4,7
       * 2,5,8
       */
      const isXWinner = checkIfXisWinning(tiktak, 1);
      const isYWinner = checkIfXisWinning(tiktak, -1);

      if (isXWinner) {
        alert("X Won the game");
        setTiktak(Array(9).fill(0));
      }
      if (isYWinner) {
        alert("O won the game");
        setTiktak(Array(9).fill(0));
      }
    },
    [tiktak]
  );

  useEffect(() => {
    const onClick = () => {
      console.log("Click");
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

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
