import {useState} from "react";

function UseCounter(initialValue = 0){
    const [count, setCount] = useState(0);
    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);
    const reset = () => setCount(initialValue);
    return{count, increment, decrement, reset};
}

export default UseCounter;