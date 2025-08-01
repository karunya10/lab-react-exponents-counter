import Exponents from "./Exponents";
function ExponentTwo({ count }) {
  let exponent = 2;
  return (
    <div>
      <Exponents num={count} exponent={exponent} />
    </div>
  );
}

export default ExponentTwo;
