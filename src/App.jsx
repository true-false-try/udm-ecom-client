import './App.css';
import ProfileCard from "./components/ProfileCard.jsx";
import Sandbox from "./components/Sandbox.jsx";
import ArrayIncrDecrButtons from "./components/ArrayIncrDecrButtons.jsx";
import Forms from "./components/Forms.jsx";
import ColorSwitcher from "./components/ColorSwitcher.jsx";
import UseEffect from "./components/UseEffect.jsx";
import MouseTracker from "./components/MouseTracker.jsx";
import ParentComponent from "./components/ParentComponent.jsx";

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
         <Forms />
         <ColorSwitcher />
         <UseEffect />
         <ParentComponent />
     </div>
  )
}

export default App;