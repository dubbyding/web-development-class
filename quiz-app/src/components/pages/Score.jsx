const Score = () => {
  return <div>Your score is: {localStorage.getItem("score")}</div>;
};

export default Score;
