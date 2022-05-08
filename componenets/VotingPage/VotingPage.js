import React from 'react'
import CandidateBar from '../CandidateBar/CandidateBar'
import ResultBar from '../ResultBar/ResultBar'

const VotingPage = (props) => {
  return (
    <div>
      <h1
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '52px',
          margin: '20px auto',
        }}
      >
        Ongoing Election Candidates
      </h1>
      <CandidateBar image="Image1" candidate="Candidate1" voted={true} />
      <CandidateBar image="Image2" candidate="Candidate2" voted={true} />
      <CandidateBar image="Image3" candidate="Candidate3" voted={false} />
      <CandidateBar image="Image4" candidate="Candidate4" voted={true} />
      <CandidateBar image="Image5" candidate="Candidate5" voted={false} />
      <CandidateBar image="Image6" candidate="Candidate6" voted={false} />
      <CandidateBar image="Image7" candidate="Candidate7" voted={false} />
      <CandidateBar image="Image8" candidate="Candidate8" voted={true} />
      <hr style={{ margin: '50px' }}></hr>
      <h1
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '52px',
          margin: '20px auto',
        }}
      >
        Previous Election Results
      </h1>
      <ResultBar image="Image1" candidate="Candidate1" result="WON" />
      <ResultBar image="Image2" candidate="Candidate2" result="LOST" />
      <ResultBar image="Image3" candidate="Candidate3" result="WON" />
      <ResultBar image="Image4" candidate="Candidate4" result="WON" />
      <ResultBar image="Image5" candidate="Candidate5" result="LOST" />
      <ResultBar image="Image6" candidate="Candidate6" result="WON" />
      <ResultBar image="Image7" candidate="Candidate7" result="WON" />
      <ResultBar image="Image8" candidate="Candidate8" result="LOST" />
    </div>
  )
}

export default VotingPage
