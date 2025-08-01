function Exponents({ num, exponent }) {
  return (
    <>
      <div className="exponent-counter-container">
        <p className="exponent-label">{`${num}^${exponent}`}</p>
        <p className="exponent-result">
          {Array(exponent).fill(num).join(" * ")} =
          <span className="total">{Math.pow(num, exponent)}</span>
        </p>
      </div>
    </>
  );
}

export default Exponents;
