import './App.css';
import "./index.css";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./components/header/Home.jsx";
import About from "./components/header/About.jsx";
import Contact from "./components/header/Contact.jsx";
import Team from "./components/header/Team.jsx";
import NotFound from "./components/header/exceptions/NotFound.jsx";
import CurrentLocation from "./components/header/CurrentLocation.jsx";
import Dashboard from "./components/header/Dashboard.jsx";
import Counter from "./components/Counter.jsx";


function App() {

    return (
        /*<Router>
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
                        <li><Link
                            className='text-white hover:text-yellow-300 font-medium transition duration-300'
                            to="/co ntact">Contact</Link></li>
                    </ul>
                </nav>
                <CurrentLocation />
                <div className='container mx-aouto py-8'>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/about' element={<About />}>
                            <Route path='/about/team' element={<Team />}/>
                        </Route>
                        <Route path='/contact' element={<Contact />}/>
                        <Route path='/dashboard' element={<Dashboard />}/>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>*/

        <Counter />
    )
}

export default App;