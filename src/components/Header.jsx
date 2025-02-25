const name = "Yevhenii Chekhovskiy";
const profession = "Full Stack Developer"

function Header(){
    return(
        <header className='flex-header'>
            <h1>{name}</h1>
            <p>{profession}</p>
            <nav>
                <a href='#about'>About</a>
                <a href='#project'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
        </header>
    )
}

export default Header;