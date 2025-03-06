import {createContext, useContext, useState} from "react";
const ThemeContext = createContext();


function PropDrilling(){
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme((prevTheme) => (
            prevTheme === 'light' ? 'dark' : 'light'
        ));
    };

    return(
        <ThemeContext.Provider value={theme}>
            <div>
                <div style={{border:'2px solid black', padding:'20px'}}>
                    <h2>PropDrill (Parent)</h2>
                    <button onClick={toggleTheme}>Toggle Theme</button>
                    <ComponentA />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

function ComponentA({theme}){
    return(
        <div style={{border:'2px solid black', padding:'20px'}}>
            <h2>ComponentA (Child)</h2>
            <ComponentB theme={theme} />
        </div>
        );

}

function ComponentB({theme}){
    return(
        <div style={{border:'2px solid black', padding:'20px'}}>
            <h2>ComponentB (Child)</h2>
            <ThemedComponent theme={theme} />
        </div>
    );
}

function ThemedComponent(){
    const theme = useContext(ThemeContext);
    return (
      <div style={{border:'2px solid black', padding:'20px'}}>
          <h2>ThemedComponent (Child)</h2>
          The current theme is: {theme}
      </div>
    );
}

export default PropDrilling;