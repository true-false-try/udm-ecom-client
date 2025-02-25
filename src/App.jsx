import './App.css';
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  return (
     <div>
         <h1>HELLO</h1>
         <ProfileCard name="Alice" age="24" isMember={true} />
         <ProfileCard name="John" age="34" isMember={false} />
     </div>
  )
}

export default App;
