// import { ReactPropTypes } from "react";
function OutputBlock({ text = "The result is" }) {
    return (
        <div className="outputBlock">
            <h1> {text} </h1>
        </div>
    )
}
export default OutputBlock;
