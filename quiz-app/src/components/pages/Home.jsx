import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputContext } from "../context/InputContext";

const Home = () => {
  const navigate = useNavigate();

  const a = useContext(InputContext);

  console.log(a);

  return (
    <div className="min-h-dvh w-full flex justify-center items-center bg-gray-200">
      <div className="rounded-lg p-6 min-w-[700px] shadow-2xl bg-white">
        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <p className="text-2xl text-gray-950">Your Quiz App</p>
          <p className="text-base text-gray-700">Your Name</p>
        </div>
        <div className="flex flex-col mt-10 gap-6">
          <FormInput />
          <button
            onClick={() => {
              // Navigate
              navigate("/quiz");
            }}
            className="bg-amber-800 text-white px-4 py-2 rounded-lg"
          >
            Start the Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

const FormInput = () => {
  const a = useContext(InputContext);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-700">Who are you?</label>
      <input
        type="text"
        placeholder="Please enter your name"
        className="p-2 border border-solid border-black rounded-lg"
        value={a.input}
        onChange={(e) => a.setInput(e.target.value)}
      />
    </div>
  );
};
