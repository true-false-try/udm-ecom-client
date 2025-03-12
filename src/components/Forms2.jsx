import {useState} from "react";

function Forms2(){
    const [formData, setFormData] = useState({name:''});

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('For Data Submitted ', formData);
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()){
            newErrors.name = 'Name is required'
        }
        return newErrors;
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
                    <input type='text' name='name' value={formData.name} onChange={handleChange}/>
                    {errors.name && <span style={{color:'red'}}>{errors.name}</span>}
                    <br/>
                </label>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
export default Forms2;