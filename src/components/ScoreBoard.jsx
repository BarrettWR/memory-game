import { useState } from 'react'

function ScoreBoard(props) {

  return (
    <div className='scoreBoard'>
        <div><h2>Current Score: {props.score}</h2></div>
        <div><h2>Best Score: {props.highestScore}</h2></div>
    </div>
  )
}

export default ScoreBoard