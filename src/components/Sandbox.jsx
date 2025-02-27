import React, {useState} from "react";

function Sandbox (){
    const [count, setCount] = useState(0);
    return(
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>You clicked {count} times!</h2>

            <button onClick={() => setCount(count + 1)}>Incremented</button>
            <button onClick={() => setCount(count - 1)}>Decremented</button>
        </div>
    );
}

export default Sandbox;
