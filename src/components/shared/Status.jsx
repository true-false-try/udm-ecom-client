import { Icon as MuiIcon, Tooltip } from "@mui/material";
import { motion } from "framer-motion";

const Status = ({
                    text,
                    icon = "info",
                    tooltip = "",
                    bg = "bg-gray-100",
                    color = "text-gray-800",
                    animate = true,
                }) => {
    const IconElement = (
        <MuiIcon fontSize="small">{icon}</MuiIcon>
    );

    const Content = (
        <div
            className={`
                ${bg} ${color} 
                px-3 py-2 
                rounded-lg 
                font-semibold 
                flex items-center gap-2 
                shadow-sm
            `}
        >
            {tooltip ? (
                <Tooltip title={tooltip}>{IconElement}</Tooltip>
            ) : (
                IconElement
            )}
            <span>{text}</span>
        </div>
    );

    return animate ? (
        <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {Content}
        </motion.div>
    ) : (
        Content
    );
};

export default Status;
