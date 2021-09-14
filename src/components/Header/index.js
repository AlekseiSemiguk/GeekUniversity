import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { userApi } from "../../api/request/user";
import { getIsAuth } from "../../store/user";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export const Header = (props) => {
    const classes = useStyles();
    const isAuth = useSelector(getIsAuth);

    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key="3"
                variant="body2"
                to="/person"
                className={classes.toolbarLink}
            >
                Random Person
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key="1"
                variant="body2"
                to="/"
                className={classes.toolbarLink}
            >
                Home
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key="2"
                variant="body2"
                to="/profile"
                className={classes.toolbarLink}
            >
                Profile
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key="3"
                variant="body2"
                to="/chats"
                className={classes.toolbarLink}
            >
                Chats
            </Link>
            <Link
                component={RouterLink}
                noWrap
                key="4"
                variant="body2"
                to="/login"
                className={classes.toolbarLink}
            >
                Sign In
            </Link>
            <Link
                component={RouterLink}
                noWrap
                key="5"
                variant="body2"
                to="/signup"
                className={classes.toolbarLink}
            >
                Sign Up
            </Link>

            {isAuth && <button onClick={userApi.logout}>logout</button>}


        </Toolbar>
    );
}
