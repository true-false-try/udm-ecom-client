import {useEffect, useState} from "react";

function UseEffect(){
    const [count, setCount] = useState(0);
    const [anotherValue, setAnotherValue] = useState(10);
    const incrementCount = () => {
        setCount(count + 1);
    };

    // Right now triggering multiply event Increment Another Increment
    // If we want only count we should use [count]
    // If we want one use render we should use [] - empty array
    useEffect(() => {
        document.title = `Count: ${count + 1}`;
        console.log("useEffect Triggered")
        } //use on this position
    );

    return(
        <div>
            <h1>useEffect Hook</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={() => setAnotherValue(anotherValue + 1)}>Another Increment</button>
        </div>
    );
}

export default UseEffect;