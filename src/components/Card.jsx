import { useEffect, useState } from 'react'
import '../styles/Card.css'

function Card(props) {
  const [thisCardClicked, setthisCardClicked] = useState(false);

  useEffect( () => {
    if (props.clicked) {
      props.setClicked(false);
      setthisCardClicked(false);
    }
  }, [props.clicked])

  return (
    <div className='cardContainer'>
        <img src={props.url} alt="cat" 
          onClick={ () => {
            props.randomizeCards();
            keepScore(props, thisCardClicked, setthisCardClicked);
          }}
        />
        
    </div>
  )
}

function keepScore(props, thisCardClicked, setthisCardClicked) {
  if (thisCardClicked) {
    if (props.highestScore < props.score) {
      props.setHighestScore(props.score);
    }
    props.setScore(0);
    props.setClicked(true);
    props.randomizeCards();
  }
  else {
    props.setScore(props.score + 1)
    setthisCardClicked(true)
  }
}

export default Card
