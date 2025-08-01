const Counter = ({ handleClick, count }) => {
  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={(e) => handleClick(e)}>
        -
      </button>
      <button className="counter-button" onClick={(e) => handleClick(e)}>
        +
      </button>
    </div>
  );
};

export default Counter;
