import { Heading } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
function SwitchToggle(props){
    return(
        <div className="swich-container">
            <Heading as="h4" size="md" isTruncated>
                {props.name}
            </Heading>
            <Switch colorScheme="blue" size="lg" value={props.checked} onChange={value => props.onChange(value)} />
        </div>
    );
}
export default SwitchToggle;