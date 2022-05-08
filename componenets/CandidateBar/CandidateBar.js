import React from 'react'
import styles from './CandidateBar.module.css'

const CandidateBar = (props) => {
  return (
    <div className={styles.candidateBar}>
      <div className={styles.candidateImage}>{props.image}</div>
      <div className={styles.candidateName}>{props.candidate}</div>
      {!props.voted ? (
        <div className={styles.voteButtons}>
          <button className={styles.yes + ' btn btn-success'}>
            <i style={{ fontWeight: '600' }} className="far fa-thumbs-up"></i>
          </button>
          <button className={styles.no + ' btn  btn-danger'}>
            <i style={{ fontWeight: '600' }} className="far fa-thumbs-down"></i>
          </button>
        </div>
      ) : (
        <p className={styles.votedChip}>You have voted!</p>
      )}
    </div>
  )
}

export default CandidateBar
