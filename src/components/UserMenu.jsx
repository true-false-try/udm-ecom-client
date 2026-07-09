import React from 'react';
import {Avatar, Box, Menu, MenuItem} from '@mui/material';
import {Link, useNavigate} from "react-router-dom";
import {BiUser} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {FaShoppingCart} from "react-icons/fa";
import {IoExitOutline} from "react-icons/io5";
import {logOutUser} from "../store/action/index.js";

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const {user} = useSelector((state) => state.auth);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOutHandler = () => {
        handleClose();
        dispatch(logOutUser(navigate));
    };

    return (
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <Avatar
                alt={user?.username || "User"}
                src=""
                onClick={handleClick}
                sx={{cursor: 'pointer', width: 36, height: 36, bgcolor: '#1976d2'}}
            >
                {user?.username?.[0]?.toUpperCase()}
            </Avatar>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <Link to="/profile" onClick={handleClose}>
                    <MenuItem className="flex gap-2">
                        <BiUser className='text-xl'/>
                        <span className='font-bold text-[16px]'>
                            {user?.username}
                        </span>
                    </MenuItem>
                </Link>
                <Link to="/profile/orders" onClick={handleClose}>
                    <MenuItem className="flex gap-2">
                        <FaShoppingCart className='text-xl'/>
                        <span className='font-semibold'>Orders</span>
                    </MenuItem>
                </Link>
                <MenuItem onClick={logOutHandler}>
                    <div className="font-semibold w-full flex gap-2 items-center bg-red-600 px-4 py-1 text-white rounded-sm">
                        <IoExitOutline className='text-xl'/>
                        <span className='font-bold text-[16px]'>LogOut</span>
                    </div>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default UserMenu;
