import { useState } from 'react'
import '../styles/Card.css'

function Card(props) {

  return (
    <div className='cardContainer'>
        <img src={props.url} alt="cat" />
        {/* <h1>{props.name}</h1> */}
    </div>
  )
}

export default Card
