const Button = ({ children }) => {
  return (
    <button className="border border-solid px-4 py-2 rounded-2xl shadow-2xl bg-gray-300 hover:cursor-pointer active:scale-95 transition-all ease-in-out duration-150">
      {children}
    </button>
  );
};

export default Button;
