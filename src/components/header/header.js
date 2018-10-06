import React from 'react';
import ReactSVG from 'react-svg';

import classes from './header.css';
import logoSVG from '../../assets/images/message-square.svg';

const header = () => (
    <header>
        <ReactSVG src={logoSVG} className={classes.Logo} />
        <span className={classes.Text}>
            Webchat
        </span>
    </header>
);

export default header;
