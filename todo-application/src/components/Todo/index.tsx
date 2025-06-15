const Todo = ({ children, isCheckedArray, setIsCheckedArray, index }) => {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        id={index}
        checked={isCheckedArray[index]}
        onChange={(e) => {
          setIsCheckedArray((prevValue) => {
            const temp = [...prevValue];
            temp[index] = e.target.checked;
            return temp;
          });
        }}
      />
      <label htmlFor={index}>{children}</label>
    </div>
  );
};

export default Todo;
