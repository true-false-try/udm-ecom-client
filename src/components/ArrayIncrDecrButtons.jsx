import React, {useState} from "react";

function ArrayIncrDecrButtons(){
    const [counters, setCounters] = useState([{id: 1, value: 0}]);
    const addCounters = () => {
        setCounters([...counters, {id: counters.length + 1, value: 0}]);
    }
    const incrementCounter  = (id) => {
        setCounters(counters.map(counter =>
            counter.id === id ? {...counter, value: counter.value + 1} : counter
        ))
    };

    return(
        <div>
            <button onClick={addCounters}>Add counter</button>
            <ul>
                {counters.map(counter => (
                    <li key={counter.id}>
                        Counter {counter.id}: {counter.value}
                        <button onClick={() => incrementCounter(counter.id)}>Increment</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ArrayIncrDecrButtons;