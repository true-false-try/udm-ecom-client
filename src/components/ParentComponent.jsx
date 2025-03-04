import {useState} from "react";
import MouseTracker from "./MouseTracker.jsx";

function ParentComponent() {
    const [showComponent, setShowComponent] = useState(true);
    const toggleComponent = () => {
      setShowComponent((prev) => !prev);
    };
    return (
        <div>
            <button onClick={toggleComponent}>
                {showComponent ? 'Umount Tracker' : 'Mount Tracker'}
            </button>
            {showComponent && <MouseTracker />}
        </div>
    );
}

export default ParentComponent;