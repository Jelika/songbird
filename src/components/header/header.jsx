import React, { useState } from 'react';
import styles from './header.module.css';
import logo from '../../assets/Songbird.svg'

function Header({score}) {
  
    return(
        <div className={styles.headerContainer}>
            <img src={logo}/>
    <div className={styles.score}>Score: {score}</div>
        </div>
    )   
}

export default Header;