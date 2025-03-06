import {createContext, useContext} from "react";
const ThemeContext = createContext('light');


function PropDrilling(){
    return(
        <div>
            <div style={{border:'2px solid black', padding:'20px'}}>
                <h2>PropDrill (Parent)</h2>
                <ComponentA theme={ThemeContext} />
            </div>
        </div>
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