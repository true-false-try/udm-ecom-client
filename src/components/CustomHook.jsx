import {useState} from "react";
import UseCounter from "./UseCounter.jsx";

function CustomHook(){
    const {count, increment, decrement, reset} = UseCounter(3);
    return(
        <div>
            <h1>Custom Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default CustomHook;