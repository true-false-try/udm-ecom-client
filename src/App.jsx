import './App.css';

function App() {
    const name = "Yevhenii Chekhovskiy";
    const profession = "Full Stack Developer"
    const projects = [
        {
            title: "sb-ecom-client",
            description: "A web app built using VITE, REACT, NODE-JS",
            visibility: "public",
            stack: "full",
            link:"#"
        },
        {
            title: "restourant",
            description: "A eccom project for restaurant using SPRING, JAVA",
            visibility: "private",
            stack: "backend",
            link: "#"
        }
    ]
  return (
      <div className={App}>

        {/*HHeader section*/}
        <header className='flex-header'>
            <h1>{name}</h1>
            <p>{profession}</p>
            <nav>
                <a href='#about'>About</a>
                <a href='#project'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
        </header>

        {/*About section*/}
        <section id='about' className='about-section'>
            <h2>About me</h2>
            <p>Hello I'm {name}, a passionate {profession}.</p>
        </section>

        {/*Project secction*/}
        <section id='projects' className='projects-section'>
            <h2>Projects</h2>
            <div className='projects-list'>
                {projects.map((project, index) => (
                    <div key={index} className='project-item'>
                        <h3>{project.title}</h3>
                        <h3>{project.description}</h3>
                        <h3>{project.stack}</h3>
                        <h3>{project.visibility}</h3>
                        <a href={project.link} target='_blank' rel="noopener noreffer">View project</a>
                    </div>
                ))}
            </div>
        </section>

        {/*Contact secction*/}
        <section id='contact' className='contact-section'>
           <h2>Contact me</h2>
           <p>If you would like to  get in touch, feel free to email me at: <a href= 'mailto:example@gmail.com'>example@gmail.com</a></p>
        </section>

        {/*Footer section*/}
        <footer className='footer'>
            <p>2025. All Right Reserved</p>
        </footer>

      </div>
  )
}

export default App
