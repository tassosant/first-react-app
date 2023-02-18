import React from "react";


function FunctionClick(){
    function clickHandler(){
        console.log('Button from function component clicked')
    }
    return(
        <div>
            <button onClick={clickHandler/*do not use clickHandler() because it will call the clickHandler, we want the clickHandler to be a function and not a function call*/ }>Click with a function component</button>
        </div>
    )
}

export default FunctionClick