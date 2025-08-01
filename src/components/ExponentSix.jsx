import Exponents from "./Exponents";
function ExponentSix({ count }) {
  let exponent = 6;

  return (
    <div>
      <Exponents num={count} exponent={exponent} />
    </div>
  );
}

export default ExponentSix;
