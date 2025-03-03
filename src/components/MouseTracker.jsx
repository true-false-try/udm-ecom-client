import {useEffect, useState} from "react";

function  MouseTracker() {
    const [mousePostion, setMousePosition] = useState({x:0, y:0});
    useEffect(() => {
        const  handleMouseMove = (event) => {
            setMousePosition({x: event.clientX, y: event.clientY})
        };
        window.addEventListener('mousemove', handleMouseMove);
    }, []);
    return(
        <div>
            <h2>Mouse Tracker</h2>
            <p>X:{mousePostion.x}, Y:{mousePostion.y}</p>
        </div>
    );
}

export default MouseTracker;