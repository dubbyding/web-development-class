import { useEffect, useRef } from "react";

const Test = () => {
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    function clickHandler(e) {
      console.log("INPUT");
    }
    function clickHandlerHandler(e) {
      console.log("DIV");
    }
    divRef.current.addEventListener("click", clickHandlerHandler, {
      capture: true,
    });
    inputRef.current?.addEventListener("click", clickHandler);

    return () => {
      divRef.current?.removeEventListener("click", clickHandlerHandler);
      inputRef.current?.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div ref={divRef}>
      <input ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Test;
