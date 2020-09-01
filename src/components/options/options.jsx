import React from 'react';
import styles from './options.module.css';
import birds from '../../assets/birds';


function Options({page}) {
    const birdOptions = birds[page].map((el, index) => 
        <div className={styles.option}>{el.name}</div>
    );

    return (
        <div className={styles.optionsContainer}>
            {birdOptions}
        </div>
    )
}

export default Options;