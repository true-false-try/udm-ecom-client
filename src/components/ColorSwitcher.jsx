import {useState} from "react";

function ColorSwitcher() {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const colors = [
        '#FF0000',
        '#00FF00',
        '#0000FF',
        '#FFFF00',
        '#FF00FF',
        '#00FFFF',
        '#FFA500',
        '#800080',
        '#008000',
        '#000080',
        '#808080',
        '#FFFFFF'
    ];
    const  handleColorChange = (color) =>  {
        setBackgroundColor(color);
    };

    return(
        <div className='App' style={{backgroundColor}}>
            <h1 className='h1-color'>Color Picker</h1>
            <div className='color-palette'>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className='color-box'
                        style={{backgroundColor: color}}
                        onClick={() => {handleColorChange(color)}}>
                    </div>
                ))}
            </div>

            <div className='custom-color-picker'>
                <input
                    type='color'
                    value={backgroundColor}
                    onChange={(e) => handleColorChange(e.target.value)}/>
            </div>
        </div>
    )
}

export default ColorSwitcher;