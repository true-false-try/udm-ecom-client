import {useState} from "react";
import UseCounter from "./UseCounter.jsx";

function CustomHook(){
    const {count, increment, decrement} = UseCounter();
    return(
        <div>
            <h1>Custom Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CustomHook;