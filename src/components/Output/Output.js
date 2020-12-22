import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
function Output({ x, y, blur, spread, shadowColor, isInset,radius,childBg,parentBg }) {
  const toast = useToast()
   let outputStyle={
        boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${shadowColor} ${isInset ? "inset" : ""}`,
        borderRadius: `${radius}px`,
        backgroundColor: `${childBg}`
    }
    let outputWrapperStyle={
        backgroundColor:`${parentBg}`
    }
    const copyToClipboard = () => {
      var text = document.querySelector('.code-text').innerText;
      var elem = document.createElement("textarea");
      document.body.appendChild(elem);
      elem.value = text;
      elem.select();
      document.execCommand("copy");
      document.body.removeChild(elem);
      toast({
        title: "Copied.",
        description: "Your message is copied to clipboard ",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    }
  return (
    <div className="result">
    <div className="output-wrapper" style={outputWrapperStyle}>
      <div
        className="output" style={outputStyle}>
        <p>
          Make some changes
        </p>
      </div>
    </div>
    <div className="code">
      <div className="copyBtn">
        <Button colorScheme="blue" size="xs" onClick={copyToClipboard}>Copy</Button>
      </div>
      <p className="code-text" id="outTxt">
        boxShadow: {x}px {y}px {blur}px {spread}px {shadowColor} {isInset ? "inset" : ""};
        <br></br>
        borderRadius: {radius}px;
        <br></br>
        backgroundColor: {childBg};
      </p>
    </div>
    
    </div>
  );
}
export default Output;
