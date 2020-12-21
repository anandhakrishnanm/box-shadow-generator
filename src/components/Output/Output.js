
function Output({x,y,blur,spread,shadowColor}){
    return(
       
        <div className="output" style={{boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${shadowColor}`}}>
            <p>box-shadow:{` ${x}px ${y}px ${blur}px ${spread}px  ${shadowColor}`};</p>
        </div>
        
    )
}
export default Output;