import React from 'react'
import styles from './ResultBar.module.css'

const ResultBar = (props) => {
  return (
    <div className={styles.ResultBar}>
      <div className={styles.candidateImage}>{props.image}</div>
      <div className={styles.candidateName}>{props.candidate}</div>
      <div className={props.result === 'WON' ? styles.won : styles.lost}>
        {props.result}
      </div>
    </div>
  )
}

export default ResultBar
