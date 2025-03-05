import {useRef, useState, useEffect} from "react";

function UseRefHook() {
    const myRef = useRef(0);
    const [stateCount, setStateCount] = useState(0);
    useEffect(() => {
        console.log('Component Re-Render');
    });

    const incrementStateCount = () => {
        setStateCount(stateCount + 1);
    };

    const incrementRefCount = () => {
        myRef.current += 1;
        console.log(`Ref count: ${myRef.current}`);
    };

    return(
        <div className='use-ref-hook'>
            <h1>Use Ref Hook</h1>
            <p>State Count: {stateCount}</p>
            <button onClick={incrementStateCount}>Increment State Count</button>

            <p>Ref Count: {myRef.current}</p>
            <button onClick={incrementRefCount}>Increment Ref Count</button>
        </div>
    );
}

export default UseRefHook;