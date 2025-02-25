import './App.css';
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
      <div className="App">
          <Header />
          <About />
          <ProjectList />
          <Contact />
          <Footer />
      </div>
  )
}

export default App;
