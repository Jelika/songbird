import React, { useState } from 'react';
import styles from './answer.module.css';
import birds from '../../assets/birds';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Answer({ selectedBird, page }) {

    function returnBirdInf() {
        let information = '';
        birds[page].forEach((el) => {
            if (el.name === selectedBird) information = el;
        })
        return information;
    }


    return (
        <div className={styles.answerContainer}>{
            !selectedBird ? (
                <div>Послушайте плеер. Выберите птицу из списка.</div>) : (     
                    <>
                        <div className={styles.imgAndTitleContainer}>
                            <img className={styles.answerImg} src={returnBirdInf().image} />
                            <div className={styles.answerInfo}>
                                <div>
                                    <div className={styles.trackTitle}>{returnBirdInf().name}</div>
                                    <div className={styles.trackArtist}>{returnBirdInf().species}</div>
                                </div>
                                <AudioPlayer
                                    autoPlay={false}
                                    customAdditionalControls={[]}
                                    showJumpControls={false}
                                    src={returnBirdInf().audio}
                                    autoPlayAfterSrcChange={false}
                                />
                            </div>
                        </div>
                        <div className={styles.discription}>{returnBirdInf().discription}</div></>
                )}
        </div>
    )
}

export default Answer;