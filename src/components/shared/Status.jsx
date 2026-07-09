import {motion} from "framer-motion";

const Status = ({
                    text,
                    icon: Icon,
                    tooltip = "",
                    bg = "bg-gray-100",
                    color = "text-gray-800",
                    animate = true,
                }) => {
    const Content = (
        <div className={`${bg} ${color} px-3 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-sm w-fit`}>
            {Icon && <Icon size={18} />}
            <span>{text}</span>
        </div>
    );

    return animate ? (
        <motion.div
            initial={{opacity: 0, y: -5}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
        >
            {Content}
        </motion.div>
    ) : (
        Content
    );
};

export default Status;
