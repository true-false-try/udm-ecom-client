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

function ProjectList(){
    return(
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
    )
}

export default ProjectList;