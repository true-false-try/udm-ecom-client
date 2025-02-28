import './App.css';
import ProfileCard from "./components/ProfileCard.jsx";
import React, {useState} from "react";
import Sandbox from "./components/Sandbox.jsx";

function App() {
    const hobby = ["Reading", "Cooking"];
    const  handleHobbyClick = (hobby) => {
      alert(`You clicked on: ${hobby}`);
    };

    const aliceProfile = {
        name:"Alice",
        age:23,
        isMember:true,
        hobbies:hobby,
        onHobbyClick:handleHobbyClick
    }

    const johnProfile = {
        name:"John",
        age:34,
        isMember:false,
        hobbies:hobby,
        onHobbyClick:handleHobbyClick
    }

    const [counters, setCounters] = useState([{id: 1, value: 0}]);
    const addCounters = () => {
        setCounters([...counters, {id: counters.length + 1, value: 0}]);
    }
    const incrementCounter  = (id) => {
       setCounters(counters.map(counter =>
            counter.id === id ? {...counter, value: counter.value + 1} : counter
       ))
    };

    return (
     /*<div className="app-container">
         <h1>HELLO</h1>
         <ProfileCard {...aliceProfile}/>
         <ProfileCard {...johnProfile}/>
         <ProfileCard />
         <Sandbox />
     </div>*/
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

export default App;