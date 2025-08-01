import Exponents from "./Exponents";
function ExponentThree({ count }) {
  let exponent = 3;

  return (
    <div>
      <Exponents num={count} exponent={exponent} />
    </div>
  );
}

export default ExponentThree;
