import React, {useEffect } from 'react';
import styles from './question.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Question({birdName,birdImg,answer,birdAudio}) {

    useEffect(() => {
        if (answer === true) {
          document.querySelectorAll('audio').forEach((el) => el.pause())
        }
      }, [answer])

    return(
        <div className={styles.questionContainer}>
            <img className={styles.questionImg} src={birdImg}/>
            <div className={styles.questionData}>
                <div>
                <div className={styles.songTitle}>{birdName}</div>
                </div>
                <AudioPlayer
                 customAdditionalControls={[]}
                 showJumpControls={false}
                src={birdAudio}
                ></AudioPlayer>
            </div>
        </div>
    )
}

export default Question;