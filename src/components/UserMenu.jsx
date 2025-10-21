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

};

export default UserMenu;