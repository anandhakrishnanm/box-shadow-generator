import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react"
function ColorPicker(props){
    return(
        <div className="color-piker-box">
            <Heading as="h4" size="md" isTruncated>
                {props.name}
            </Heading>
            <div className="color-picker">
                <input type="color" value={props.color} onChange={e => props.onChange(e.target.value)}></input>
                <Input value={props.color} size="md" onChange={e => props.onChange(e.target.value)} />

            </div>
        </div>
    );

}
export default ColorPicker;