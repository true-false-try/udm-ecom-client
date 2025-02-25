import './App.css';
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  return (
     <div>
         <h1>
             HELLO
             <ProfileCard name="Alice" age="24" num="2"/>
             <ProfileCard name="John" age="34" num={2}/>
         </h1>
     </div>
  )
}

export default App;
