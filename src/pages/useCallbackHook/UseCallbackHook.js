import React, {useState, useCallback} from 'react';
import UseCallbackInner from './UseCallbackInner';

export default function UseCallbackHook(){

    const [counter, SetCounter]= useState(0);
    const [counterTwo, SetCounterTwo]= useState(0);

    const increaseHandler=useCallback(()=>{
        SetCounter(counter+1)
    },[counter])

    return (
        <div>
            
            <h1>{counterTwo}</h1>
            <button onClick={()=>SetCounterTwo(counterTwo+1)}>Increase Button two</button>
            <UseCallbackInner counter={counter} increaseHandler={increaseHandler}/>
        </div>
    )
}
