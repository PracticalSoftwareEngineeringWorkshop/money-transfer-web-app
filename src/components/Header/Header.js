import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {

    const classes = useStyles();
    let history = useHistory();

    // <> </> is a React Fragment
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
                    <MonetizationOnIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Money Transfer App
            </Typography>
                <Button color="inherit" onClick={() => history.push('/create')}>Create Account</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;