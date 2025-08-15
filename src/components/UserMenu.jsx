import React, {useState} from 'react';
import { Button, Menu, MenuItem, Avatar, Box, Typography } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Link, useNavigate} from "react-router-dom";
import {BiUser} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {FaShoppingCart} from "react-icons/fa";
import {IoExitOutline} from "react-icons/io5";
import BackDrop from "./shared/BackDrop.jsx";
import {logOutUser} from "../store/action/index.js";

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const { user } = useSelector((state) => state.auth);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logOutHandler = () => {
        dispatch(logOutUser(navigate));
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button variant="contained">Dashboard</Button>

            <PopupState variant="popover" popupId="user-menu" parentPopupState={} disableAutoFocus={}>
                {(popupState) => (
                    <React.Fragment>
                        <Avatar
                            alt="User Avatar"
                            src=""
                            {...bindTrigger(popupState)}
                            sx={{ cursor: 'pointer' }}
                        />
                        <Menu {...bindMenu(popupState)}>
                            <Link to="/profile">
                                <MenuItem className="flex gap-2" onClick={popupState.close}>
                                    <BiUser className='text-xl' />
                                    <span className='fond-bold text-[16px] nt-1'>
                                        {user?.username}
                                    </span>
                                </MenuItem>
                            </Link>
                            <Link to="/profile/orders">
                                <MenuItem className="flex gap-2" onClick={handleClose}>
                                    <FaShoppingCart className='text-xl' />
                                    <span className='font-semibold'>
                                        Order
                                    </span>
                                </MenuItem>
                            </Link>
                            <MenuItem className="flex gap-2" onClick={logOutHandler}>
                                <div className="font-semibold w-full flex gap-2 items-center bg-button-gradient px-4 py-1 text-white rounded-sm">
                                    <IoExitOutline className='text-xl' />
                                    <span className='fond-bold text-[16px] nt-1'>
                                       LogOut
                                    </span>
                                </div>
                            </MenuItem>
                        </Menu>
                        {open && <BackDrop />}
                    </React.Fragment>
                )}
            </PopupState>
        </Box>
    );
};

export default UserMenu;