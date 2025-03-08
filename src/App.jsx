import './App.css';
import ProfileCard from "./components/ProfileCard.jsx";
import Sandbox from "./components/Sandbox.jsx";
import ArrayIncrDecrButtons from "./components/ArrayIncrDecrButtons.jsx";
import Forms from "./components/Forms.jsx";
import ColorSwitcher from "./components/ColorSwitcher.jsx";
import UseEffect from "./components/UseEffect.jsx";
import ParentComponent from "./components/ParentComponent.jsx";
import DigitalClock from "./components/DigitalClock.jsx";
import UseRefHook from "./components/UseRefHook.jsx";
import UseRefHookWithHtml from "./components/UseRefHookWithHtml.jsx";
import PropDrilling from "./components/PropDrilling.jsx";
import CustomHook from "./components/CustomHook.jsx";

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
         {/*<h1>HELLO</h1>
         <ProfileCard {...aliceProfile}/>
         <ProfileCard {...johnProfile}/>
         <ProfileCard />
         <Sandbox />
         <ArrayIncrDecrButtons />
         <Forms />
         <ColorSwitcher />
         <UseEffect />
         <ParentComponent />
         <DigitalClock />
         <UseRefHook />
         <UseRefHookWithHtml />
         <PropDrilling />
         <CustomHook />*/}
     </div>
  )
}

export default App;