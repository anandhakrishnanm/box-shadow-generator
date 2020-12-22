import Header from "..//Header/Header";
import Control from "..//Control/Control";
import ColorPicker from "..//ColorPicker/ColorPicker";
import SwitchToggle from "..//SwitchToggle/SwitchToggle";
function Controls({
  x,
  setX,
  y,
  setY,
  blur,
  setBlur,
  spread,
  setSpread,
  shadowColor,
  setShadowColor,
  isInset,
  setInset,
  radius,
  setRadius,
  childBg,
  setChildBg,
  parentBg,
  setParentBg,
}) {
  return (
    <div className="controls">
      <Header />
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
      <Control
        name="Border Radius"
        val={radius}
        onChange={(radius) => setRadius(radius)}
      />
      <ColorPicker
        name="Shadow Color"
        color={shadowColor}
        onChange={(shadowColor) => setShadowColor(shadowColor)}
      />
      <ColorPicker
        name="Change Background Color"
        color={childBg}
        onChange={(childBg) => setChildBg(childBg)}
      />
      <ColorPicker
        name="Change Parent Background color"
        color={parentBg}
        onChange={(parentBg) => setParentBg(parentBg)}
      />
      <SwitchToggle
        name="Set Inset"
        checked={isInset}
        onChange={(isInset) => setInset((a) => !a)}
      />
    </div>
  );
}
export default Controls;
