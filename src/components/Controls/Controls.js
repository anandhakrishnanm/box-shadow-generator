import Control from "..//Control/Control";
import ColorPicker from "..//ColorPicker/ColorPicker";
function Controls({ x, setX, y, setY, blur, setBlur, spread, setSpread, shadowColor, setShadowColor }) {
  return (
    <div className="controls">
      <Control name="X Offset" val={x} onChange={(x) => setX(x)} />
      <Control name="Y Offset" val={y} onChange={(y) => setY(y)} />
      <Control
        name="Blur Radius"
        val={blur}
        onChange={(blur) => setBlur(blur)}
      />
      <Control
        name="Spread Radius"
        val={spread}
        onChange={(spread) => setSpread(spread)}
      />
      <ColorPicker name="Shadow Color" 
      color={shadowColor}
      onChange={(shadowColor) => setShadowColor(shadowColor)}
      />
    </div>
  );
}
export default Controls;
