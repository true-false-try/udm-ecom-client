import {useState} from "react";

function Forms2(){
    const [formData, setFormData] = useState({name:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('For Data Submitted ', formData);
    };

    const handleChange = (e) => {
        console.log(formData.name);
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    };
    return(
        <div>
            <h1>Forms in React</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' name='name' value={formData.name} onChange={handleChange}>
                    </input>
                </label>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
export default Forms2;