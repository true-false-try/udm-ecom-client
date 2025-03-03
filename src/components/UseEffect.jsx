import {useEffect, useState} from "react";

function UseEffect(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count + 1}`;
    }, [count]);
    const incrementCount = () => {
        setCount(count + 1);
    };

    return(
        <div>
            <h1>useEffect Hook</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default UseEffect;