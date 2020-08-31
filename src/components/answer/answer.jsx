import React, { useState } from 'react';
import styles from './answer.module.css';
import birds from '../../assets/birds';


function Answer(bird) {
    return (
        <div className={styles.answerContainer}>{
            true?(
            <div>Послушайте плеер. Выберите птицу из списка.</div>):(
                null
            )}
        </div>
    )
}

export default Answer;