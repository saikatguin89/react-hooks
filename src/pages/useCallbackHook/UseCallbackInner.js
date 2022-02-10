import React from 'react';
const UseCallbackInner=({counter,increaseHandler})=>{
    console.log("UseCallbackInner is changing")
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>increaseHandler()}>Increase Button</button>
        </div>
    )
}
export default React.memo(UseCallbackInner)