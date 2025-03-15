import {useForm} from "react-hook-form";
import {useEffect} from "react";

function Forms2(){
    const {register, handleSubmit, reset, watch,formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    //console.log(watch('name'));
    const watchedName = watch('name');
    const watchedEmail = watch('email');
    useEffect(() => {
        console.log('Name', watchedName)
    }, [watchedName]);

    useEffect(() => {
        console.log('Email', watchedEmail)
    }, [watchedEmail]);
    return(
        <div>
            <h1>Forms in React</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <input{...register('name',
                        {required:true, minLength: {
                            value: 2, message:'Name is required and should be at least 2 characters.'
                        }})}/>
                </label>
                {errors.name && <p>{errors.name.message}</p>}
                <label>
                    Email:
                    <input {...register('email', {required:true, pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}/>
                </label>
                {errors.email && <p>Email is required and should be validate at regex. </p>}

                <button type='submit'>Submit</button>
                <button type='button' onClick={() => reset()}>Reset</button>
            </form>
        </div>
    );
}
export default Forms2;