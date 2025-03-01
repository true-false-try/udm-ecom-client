import './App.css';
import ProfileCard from "./components/ProfileCard.jsx";
import React, {useState} from "react";
import Sandbox from "./components/Sandbox.jsx";
import ArrayIncrDecrButtons from "./components/ArrayIncrDecrButtons.jsx";

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

    return (
     <div className="app-container">
         <h1>HELLO</h1>
         <ProfileCard {...aliceProfile}/>
         <ProfileCard {...johnProfile}/>
         <ProfileCard />
         <Sandbox />
         <ArrayIncrDecrButtons />
     </div>
  )
}

export default App;