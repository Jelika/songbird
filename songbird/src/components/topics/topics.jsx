import React, { useState } from 'react';
import styles from './topics.module.css';

function Topics() {
    let listItemNames = [
        'Разминка',
        'Воробьиные',
        'Лесные птицы',
        'Певчие птицы',
        'Хищные птицы',
        'Морские птицы',
      ];
      const listItems=listItemNames.map((elem,i)=><div className={`${styles.topicTitle} ${i===0? styles.active:''}`}>{elem}</div>)
    return(
      <div className={styles.topicsContainer}>
          {listItems}
      </div>
    )
}

export default Topics;