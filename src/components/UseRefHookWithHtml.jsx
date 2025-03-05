import {useRef, useEffect} from "react";

function UseRefHookWithHtml({colorReset = 'white'}) {

    const inputRef = useRef(null);
    const inputRefNext = useRef(null);
    const focusInput = () => {
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'blue';
    };

    const focusInputNext = () => {
        console.log(inputRefNext);
        inputRefNext.current.focus();
        inputRefNext.current.style.backgroundColor = 'yellow';
    };

    const resetFocus = () => {
        inputRef.current.style.backgroundColor = colorReset;
        inputRefNext.current.style.backgroundColor = colorReset;
    };

    useEffect(() => {
        console.log("Component Render with color")
    });

    return (
        <div>
            <h1>Use Ref Hook with HTML elements!</h1>
            <input ref={inputRef} type='text' placeholder='Focus me'/>
            <button onClick={focusInput}>Focus</button>

            <input ref={inputRefNext} type='text' placeholder='Focus me'/>
            <button onClick={focusInputNext}>Focus</button>
            <br/>
            <button onClick={resetFocus}>Reset Focus</button>
        </div>
    );
}

export default UseRefHookWithHtml;