import React from 'react';
import styles from './options.module.css';
import birds from '../../assets/birds';
import error from '../../assets/error.mp3'
import correct from '../../assets/correct.mp3'


function Options({ setPoints, setBirdImg, setBirdName, setAnswer, page, setBirdSelected, selectedBird, currentBird, answer, setScore, score, points }) {

    function audioPlay(music) {
        let audio = new Audio()
        audio.preload = 'auto'
        audio.src = music
        audio.play()
    }

    function optionsClick(event) {
        setBirdSelected(event.target.innerText);
        if (event.target.innerText === currentBird.name && !answer) {
            setScore(score + points);
            setAnswer(true);
            setBirdImg(currentBird.image);
            setBirdName(event.target.innerText);
            event.target.classList.add(`${styles.correct}`)
            audioPlay(correct);
            event.target.classList.add('checked');
        } else {
            if (!answer && event.target.className !== 'checked') {
                audioPlay(error);
                event.target.classList.add(`${styles.uncorrect}`)
                event.target.classList.add('checked');
                points === 0 ? setPoints(0) : setPoints(points - 1);
            }

        }
    }

    // let birdOptions = birds[page].map((el, index) =>
    //     <div className={styles.option}>{el.name}</div>
    // );


    return (
        <div className={styles.optionsContainer} onClick={(event) => optionsClick(event)}>
            {
           birds[page].map(el => 
                <div key={el.name} className={`${styles.option}`}>{el.name}</div>)
            
        }
        </div>
    )
}

export default Options;