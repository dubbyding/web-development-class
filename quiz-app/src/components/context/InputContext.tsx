import { createContext, useState } from "react";

export const InputContext = createContext({
  input: "",
  setInput: (value) => {},
});

const InputProvider = ({ children }) => {
  const [input, setInput] = useState("");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
};
