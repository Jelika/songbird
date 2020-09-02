import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/header/header';
import Topics from './components/topics/topics';
import Question from './components/question/question';
import Options from './components/options/options';
import Answer from './components/answer/answer';
import bird from './assets/bird.jpg';
import birds from './assets/birds';
import failure from './assets/failure.mp3';
import success from './assets/success.mp3';


function App() {

  const [score, setScore] = useState(0);
  const [page, setPage] = useState(0);
  const [points, setPoints] = useState(5);
  const [birdName, setBirdName] = useState('**********');
  const [selectedBird, setBirdSelected] = useState(false);
  const [birdImg, setBirdImg] = useState(bird);
  const [answer, setAnswer] = useState(false);
  const [message, setMessage] = useState(false);
  const [answers, setAnswers] = useState([
    birds[0][Math.floor(1 + Math.random() * 6) - 1],
    birds[1][Math.floor(1 + Math.random() * 6) - 1],
    birds[2][Math.floor(1 + Math.random() * 6) - 1],
    birds[3][Math.floor(1 + Math.random() * 6) - 1],
    birds[4][Math.floor(1 + Math.random() * 6) - 1],
    birds[5][Math.floor(1 + Math.random() * 6) - 1],
  ]);
  console.log(answers[page].name);

  function nextLevelClick() {
    console.log(answers[page].name);
    // document.querySelectorAll('.option').forEach((el)=>{el.className.remove('correct')});
    // document.querySelectorAll('.option').forEach((el)=>{el.className.remove('uncorrect')});
    if (answer && page < 5) {
      setPage(page + 1);
      setAnswer(false);
      setPoints(5);
      setBirdName('**********');
      setBirdImg(bird);
      setBirdSelected(false);
    }
  }
  function audioPlay(music) {
    let audio = new Audio()
    audio.preload = 'auto'
    audio.src = music
    audio.play()
  }
  function gameEnd() {
    score === 30 ? audioPlay(success) : audioPlay(failure);
    setMessage(true);
    // setTimeout(() => {
    //   window.location.reload()
    // }, 3000)
  }

  function playAgain() {
    window.location.reload();
  }
  return (
    <div className={styles.container}>
      <Header score={score} />
      <Topics page={page} />
      {message ? (<div className={styles.congratsContainer}>
        <h1 className={styles.congratsContainer}>Congratulations!</h1>
        <div className={styles.congratsText}>Score: <span>{score}</span>/30</div>
        {score === 30 ? (<><h2 className={styles.congratsText}>You are SongBird guru!</h2>
          <button onClick={playAgain} className={styles.getGiftBtn} type="button">Yes it is true! </button></>) : (
            <>
              <h2 className={styles.congratsText}>Improve your skills one more time!</h2>
              <button onClick={playAgain} className={styles.getGiftBtn} type="button">Try again</button>
            </>)}
      </div>) : (<>
        <Question birdName={birdName} birdImg={birdImg} answer={answer} birdAudio={answers[page].audio} />
        <div className={styles.answer_container}>
          <Options setPoints={(p) => setPoints(p)} setBirdName={(nnname) => setBirdName(nnname)} setBirdImg={(img) => setBirdImg(img)} setAnswer={(isTrue) => setAnswer(isTrue)} setScore={(newScore) => setScore(newScore)} score={score} points={points} answer={answer} currentBird={answers[page]} selectedBird={selectedBird} setBirdSelected={(name) => setBirdSelected(name)} page={page} />
          <Answer selectedBird={selectedBird} page={page} />
        </div>{
          page < 5 ? (
            <button onClick={nextLevelClick} className={`${styles.inactiveButton} ${answer ? styles.nextButton : ''}`} type="button">Next Level</button>) :
            (<button onClick={gameEnd} className={styles.nextButton} type="button">End Game</button>)
        }</>)}</div>
  );
}

export default App;
