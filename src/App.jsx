import './App.css';
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
    const hobby = ["Reading", "Cooking"];
    const  handleHobbyClick = (hobby) => {
      alert(`You clicked on: ${hobby}`);
    };
    return (
     <div className="app-container">
         <h1>HELLO</h1>
         <ProfileCard name="Alice"
                      age={23}
                      isMember={true}
                      hobbies={hobby}
                      onHobbyClick={handleHobbyClick} />
         <ProfileCard name="John"
                      age={34}
                      isMember={false}
                      hobbies={hobby}
                      onHobbyClick={handleHobbyClick} />
         <ProfileCard />
     </div>
  )
}

export default App;
