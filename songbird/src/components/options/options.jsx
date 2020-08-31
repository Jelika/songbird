import React, { useState } from 'react';
import styles from './options.module.css';
import birds from '../../assets/birds';


function Options() {
    const birdOptions = birds[0].map((el, index) => 
        <div className={styles.option}>{el.name}</div>
    );

    return (
        <div className={styles.optionsContainer}>
            {birdOptions}
        </div>
    )
}

export default Options;