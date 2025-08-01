import Exponents from "./Exponents";
function ExponentFour({ count }) {
  let exponent = 4;

  return (
    <div>
      <Exponents num={count} exponent={exponent} />
    </div>
  );
}

export default ExponentFour;
