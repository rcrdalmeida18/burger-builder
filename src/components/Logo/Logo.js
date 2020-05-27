import React from 'react';
import burger from '../../assets/images/original.png';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burger} alt="burger"/>
        </div>
    )
}

export default logo;