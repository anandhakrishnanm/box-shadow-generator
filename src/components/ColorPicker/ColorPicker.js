import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
function ColorPicker(props) {
  return (
    <div className="color-piker-box">
      <Heading as="h4" size="md" isTruncated>
        {props.name}
      </Heading>
      <div className="color-picker">
        <input
          type="color"
          value={props.color}
          onChange={(e) => props.onChange(e.target.value)}
        ></input>
        <div className="hex-value-box">
        <Input
          value={props.color}
          size="md"
          placeholder="#000000"
          onChange={(e) => props.onChange(e.target.value)}
        />
        </div>
      </div>
    </div>
  );
}
export default ColorPicker;
