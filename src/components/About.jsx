const name = "Yevhenii Chekhovskiy";
const profession = "Full Stack Developer"

function About() {
    return(
        <section id='about' className='about-section'>
            <h2>About me</h2>
            <p>Hello I'm {name}, a passionate {profession}.</p>
        </section>
    )
}

export default About;