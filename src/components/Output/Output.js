function Output({ x, y, blur, spread, shadowColor, isInset }) {
  return (
    <div
      className="output"
      style={{
        boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${shadowColor} ${
          isInset ? "inset" : ""
        }`,
      }}
    >
      <p>
        box-shadow:
        {` ${x}px ${y}px ${blur}px ${spread}px  ${shadowColor} ${
          isInset ? "inset" : ""
        }`};
      </p>
    </div>
  );
}
export default Output;
