const InputField = ({
    label,
    id,
    type = "text",
    errors,
    register,
    required,
    message,
    className,
    min,
    placeholder,
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={id} className={`${className || ""} font-semibold text-sm text-slate-800`}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={`${className || ""} px-2 py-2 border outline-none bg-transparent text-slate-800 rounded-md`}
                {...register(id, {
                    required: required ? {value: true, message} : false,
                    minLength: min ? {value: min, message: `Minimum ${min} characters required`} : undefined,
                    pattern: type === "email" ? {
                        value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                    } : type === "url" ? {
                        value: /^(https?:\/\/)?(([a-zA-Z0-9¡-￿-]+\.)+[a-zA-Z¡-￿]{2,})(:\d{2,5})?(\/\S*)?$/,
                        message: "Please enter a valid URL",
                    } : undefined,
                })}
            />

            {errors[id]?.message && (
                <p className="text-sm font-semibold text-red-600 mt-0">
                    {errors[id].message}
                </p>
            )}
        </div>
    );
};

export default InputField;
