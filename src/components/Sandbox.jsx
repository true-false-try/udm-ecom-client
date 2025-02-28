import React, {useState} from "react";

function Sandbox (){
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const incrementValue = () => {
        setCount(count + step);
    };
    const decrementValue = () => {
        setCount(count - step);
    };

    return(
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>You clicked {count} times!</h2>
            <input type='number' value={step} onChange={(e) => setStep(parseInt(e.target.value))}></input>
            <button onClick={() => incrementValue()}>Incremented</button>
            <button onClick={() => decrementValue()}>Decremented</button>

        </div>
    );
}

export default Sandbox;
