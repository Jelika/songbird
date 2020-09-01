import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/header/header';
import Topics from './components/topics/topics';
import Question from './components/question/question';
import Options from './components/options/options';
import Answer from './components/answer/answer';
import bird from './assets/bird.jpg';
import birds from './assets/birds';

function App() {
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(0);
  const [points, setPoints] = useState(5);
  const [birdName, setBirdName] = useState('**********');
  const [selectedBird, setBirdSelected] = useState(false);
  const [birdImg, setBirdImg] = useState(bird);
  const [answer, setAnswer] = useState(false);
  const [massage, setMessage] = useState(false);

  const answers=[
    birds[0][Math.floor(1 + Math.random() * 6) - 1],
    birds[1][Math.floor(1 + Math.random() * 6) - 1],
    birds[2][Math.floor(1 + Math.random() * 6) - 1],
    birds[3][Math.floor(1 + Math.random() * 6) - 1],
    birds[4][Math.floor(1 + Math.random() * 6) - 1],
    birds[5][Math.floor(1 + Math.random() * 6) - 1],
  ];

  function audioPlay(music) {
    let audio = new Audio()
    audio.preload = 'auto'
    audio.src = music
    audio.play()
  }
  
  function nextLevelClick() {
    if (answer &&  page < 5) {
      setPage(page + 1);
      setAnswer(false);
      setPoints(5);
      setBirdName('**********');
      setBirdImg(bird);
      setBirdSelected(false);
    }
  }

  function gameEnd() {
    setMessage(true);
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  return (
    <div className={styles.container}>
      <Header score={score} />
      <Topics page={page} />
      <Question birdName={birdName} birdImg={birdImg} answer={answer} birdAudio={answers[page].audio} />
      <div className={styles.answer_container}>
        <Options setBirdSelected={(name)=>setBirdSelected(name)} page={page} />
        <Answer selectedBird={selectedBird} page={page} />
      </div>{
      page<5?(
      <button onClick={nextLevelClick} className={`${styles.inactiveButton} ${ answer?styles.nextButton:''}`} type="button">Next Level</button>):
      ( <button onClick={gameEnd} className={styles.nextButton} type="button">End Game</button>)
      }</div>
  );
}

export default App;
