import React from 'react';
import styles from './App.module.css';
import Header from './components/header/header';
import Topics from './components/topics/topics';
import Question from './components/question/question';
import Options from './components/options/options';
import Answer from './components/answer/answer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Topics />
      <Question />
      <div className={styles.answer_container}>
        <Options />
        <Answer />
      </div>
      <button className={styles.inactiveButton} type="button">Next Level</button>
    </div>
  );
}

export default App;
