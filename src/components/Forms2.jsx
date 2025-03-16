import {useForm} from "react-hook-form";
import {useEffect} from "react";

function Forms2(){
    const {register, handleSubmit, reset, watch,formState: {errors}} = useForm();
    const existingUsernames = ['admin', 'user123', 'john']

    const checkIfUsernameExist = async (username) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return existingUsernames.includes(username);
    }

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    //console.log(watch('name'));
    const watchedName = watch('name');
    const watchedEmail = watch('email');
   /* const validateName = (value) => {
        if(value !== 'admin') {
            return 'Only admin is allowed'
        }
        return true;
    }*/

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
                    <input
                        {...register('name', {
                            required:true,
                            minLength: {
                                value: 2, message: 'Name is required and should be at least 2 characters.'
                            },
                            validate: {
                                notAdmin: (value) => value !== "admin" || "Admin is not allowed",
                                isNotNumber:(value) => isNaN(value) || "Name cannot be a number",
                                checkUsername: async (value) => {
                                    const exist = await checkIfUsernameExist(value)
                                    return !exist || 'Username  already taken';
                                }
                            }
                        })}/>
                </label>
                {errors.name && <p>{errors.name.message}</p>}
                <label>
                    Email:
                    <input {...register('email', {required:true, pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}/>
                </label>
                {errors.email && <p>Email is required and should be validate at regex. </p>}

                <label>
                    Password:
                    <input
                        type='password'
                        {...register('password', {
                            required:true,
                            minLength: {
                                value: 2, message: 'Name is required and should be at least 2 characters.'
                            },
                            validate: {
                                notAdmin: (value) => value !== "admin" || "Admin is not allowed",
                                isNotNumber:(value) => isNaN(value) || "Name cannot be a number",
                                checkUsername: async (value) => {
                                    const exist = await checkIfUsernameExist(value)
                                    return !exist || 'Username  already taken';
                                }
                            }
                        })}/>
                </label>
                {errors.password && <p>{errors.password.message}</p>}


                <label>
                    Confirm Password:
                    <input type='password' {...register('confirmPassword', {
                        required:true,
                        minLength:2,
                        validate:value => value === watch('password') || 'Passwords do not match'
                    })}/>
                </label>
                {errors.confrmPassword && <p>{errors.confrmPassword.message}</p>}

                <button type='submit'>Submit</button>
                <button type='button' onClick={() => reset()}>Reset</button>
            </form>
        </div>
    );
}
export default Forms2;