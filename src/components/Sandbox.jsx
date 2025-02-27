import React, {useState} from "react";

function Sandbox (){
    const [count, setCount] = useState(0);
    const incrementValue = () => {
        setCount(count + 1);
    };
    const decrementValue = () => {
        setCount(count - 1);
    };

    return(
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>You clicked {count} times!</h2>

            <button onClick={() => incrementValue()}>Incremented</button>
            <button onClick={() => decrementValue()}>Decremented</button>
        </div>
    );
}

export default Sandbox;
