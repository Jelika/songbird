import React from 'react';
import styles from './topics.module.css';

function Topics({page}) {
  let listItemNames = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы',
    'Морские птицы',
  ];
  const listItems = listItemNames.map((elem, i) => <div className={`${styles.topicTitle} ${i === page ? styles.active : ''}`}>{elem}</div>)
  return (
    <div className={styles.topicsContainer}>
      {listItems}
    </div>
  )
}

export default Topics;