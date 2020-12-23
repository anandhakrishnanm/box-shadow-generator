import { Heading } from "@chakra-ui/react";
// import {
//   Slider,
//   SliderTrack,
//   SliderFilledTrack,
//   SliderThumb,
// } from "@chakra-ui/react";
function Control(props) {
  return (
    <div className="contol">
      <Heading as="h4" size="md" isTruncated>
        {props.name}
      </Heading>
      {/* <Slider
        value={props.val}
        onChange={(value) => props.onChange(value)}
        aria-label="slider-ex-2"
        colorScheme="blue"
        defaultValue={props.val}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider> */}
      <input
      type="range"
      value={props.val}
      onChange={(e) => props.onChange(e.target.value)}
      min="-100"
      max="100"
      >
      </input>
    </div>
  );
}
export default Control;
