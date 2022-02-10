import React,{useContext} from 'react'
import {DataContext} from './DataContext'

function UseContextFunctional(){
    const contextData=useContext(DataContext)
    console.log(contextData)
    return (
        <div>
            UseContextFunctional: {contextData.theamColor}
            <button onClick={()=>contextData.setTheamColor('light')}>Change Theam</button>
        </div>
    );
}
export default UseContextFunctional;