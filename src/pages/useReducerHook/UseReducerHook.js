import React, {useReducer, useEffect} from 'react';

const initialState={counter:0, counterTwo:0};
const reducer=(state, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {...state, counter: state.counter+1}
        break;
        case 'DECREMENT':
            return {...state, counter: state.counter-1}
        break;
        case 'INCREMENT_TWO':
            return {...state, counterTwo: state.counterTwo+1}
        break;
        case 'DECREMENT_TWO':
            return {...state, counterTwo: state.counterTwo-1}
        break;
        case 'DECREMENT_BOTH':
            return {...state, counter: state.counter+1, counterTwo: state.counterTwo+1}
        break;
        default:
            return state;
    }
}

export default function UseReducerHook(){
    const [state, dispatch]= useReducer(reducer, initialState);

    useEffect(()=>{
        console.log('useeffect call')   
    },[state.counter, state.counterTwo])

    return (
        <div>
            <h1>Count: {state.counter}</h1>
            <h1>Count 2: {state.counterTwo}</h1>
            <div>
                <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
                <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
                <button onClick={()=>dispatch({type:'INCREMENT_TWO'})}>Increment 2</button>
                <button onClick={()=>dispatch({type:'DECREMENT_TWO'})}>Decrement 2</button>
                <button onClick={()=>dispatch({type:'DECREMENT_BOTH'})}>Increment Both</button>
            </div>
        </div>
    )
}