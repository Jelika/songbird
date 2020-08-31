import React, { useState } from 'react';
import styles from './header.module.css';
import logo from '../../assets/Songbird.svg'

function Header() {
    return(
        <div className={styles.headerContainer}>
            <img src={logo}/>
            <div className={styles.score}>Score: 0</div>
        </div>
    )
}

export default Header;