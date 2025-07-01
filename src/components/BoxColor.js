
function BoxColor(props){
    const {r,g,b}=props
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    return(
        <div style={{backgroundColor: rgbToHex(r,g,b)}}>
            <span>rgb({r},{g},{b})</span><br/>
            <span>{rgbToHex(r,g,b)}</span>
        </div>
    )
}
export default BoxColor
