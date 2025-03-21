import './App.css';
import "./index.css";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
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
import GetJsonPlaceholderAPIs from "./components/GetJsonPlaceholderAPIs.jsx";
import PostJsonPlaceholderAPIs from "./components/PostJsonPlaceholderAPIs.jsx";
import Forms2 from "./components/Forms2.jsx";
import Home from "./components/header/Home.jsx";
import About from "./components/header/About.jsx";
import Contact from "./components/header/Contact.jsx";


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
        <Router>
            <div className='min-h-screen bg-gray-100'>
                <nav className='bg-blue-600 p-4'>
                    <ul className='flex justify-center space-x-6'>
                        <li><Link
                            className='text-white hover:text-yellow-300 font-medium transition duration-300'
                            to="/">Home</Link></li>
                        <li><Link
                            className='text-white hover:text-yellow-300 font-medium transition duration-300'
                            to="/about">About</Link></li>
                        <li><Link
                            className='text-white hover:text-yellow-300 font-medium transition duration-300'
                            to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className='container mx-aouto py-8'>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/about' element={<About />}/>
                        <Route path='/contact' element={<Contact />}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;