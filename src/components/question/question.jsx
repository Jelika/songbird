import React, { useState } from 'react';
import styles from './question.module.css';
import bird from '../../assets/bird.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import birds from '../../assets/birds';

function Question() {
    return(
        <div className={styles.questionContainer}>
            <img className={styles.questionImg} src={bird}/>
            <div className={styles.questionData}>
                <div>
                <div className={styles.songTitle}>********</div>
                <div className={styles.songBird}>********</div>
                </div>
                <AudioPlayer
                 customAdditionalControls={[]}
                 showJumpControls={false}
                  src={birds[0][0].audio}
                ></AudioPlayer>
            </div>
        </div>
    )
}

export default Question;