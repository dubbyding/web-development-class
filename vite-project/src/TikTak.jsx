function Tiktak(props) {
  let value = "";
  if (props.value < 0) {
    value = "O";
  } else if (props.value > 0) {
    value = "X";
  }

  return (
    <div
      style={{
        border: "1px solid black",
        width: "24px",
        height: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        props.onClick();
      }}
    >
      {value}
    </div>
  );
}

export default Tiktak;
