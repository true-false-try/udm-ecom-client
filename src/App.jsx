import './App.css';
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  return (
     <div>
         <h1>HELLO</h1>
         <ProfileCard name="Alice" age={23} isMember={true} />
         <ProfileCard name="John" age={34} isMember={false} />
         <ProfileCard />
     </div>
  )
}

export default App;
