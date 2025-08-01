import Exponents from "./Exponents";
function ExponentFive({ count }) {
  let exponent = 5;

  return (
    <div>
      <Exponents num={count} exponent={exponent} />
    </div>
  );
}

export default ExponentFive;
