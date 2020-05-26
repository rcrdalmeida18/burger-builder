import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
    <header className={classes.Toolbar}>
        <div>
            MENU
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
        <div className={classes.Logo}>
            <Logo />
        </div>
    </header>)
}

export default toolbar;