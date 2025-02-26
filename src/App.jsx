import './App.css';
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
    const hobby = ["Reading", "Cooking"];
    return (
     <div>
         <h1>HELLO</h1>
         <ProfileCard name="Alice" age={23} isMember={true} hobbies={hobby} />
         <ProfileCard name="John" age={34} isMember={false} hobbies={hobby}/>
         <ProfileCard />
     </div>
  )
}

export default App;
