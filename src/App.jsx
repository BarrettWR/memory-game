import { useState, useEffect } from 'react'
import './App.css'
import { api_key } from './assets/api_key'
import Card from './components/Card'
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [cats, setCats] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  

  useEffect(() => {
    {console.log("setting cats to new json data from api")}
    getCats().then(data => setCats(data));
  }, []);

  return (
    <>
      <h1 style={{fontSize: "3.5rem"}}>Cat Memory Game</h1>

      <div>
        <ScoreBoard score={score} highestScore={highestScore}/>
      </div>

      {cats.length > 0 && (
        <div className='gameContainer'>
          <>
            {console.log("creating cards")}
            {cats.map(cat => (
              <Card 
                url= {cat.url} 
                key= {cat.id} 
                randomizeCards = {() => randomizeCards(cats, setCats, setClicked)}
                score = {score}
                setScore = {setScore}
                highestScore={highestScore}
                setHighestScore={setHighestScore}
                clicked = {clicked}
                setClicked = {setClicked}
              />
            ))}
          </>
        </div>
      )}

      <div className='github'>
        <a href="https://github.com/BarrettWR/memory-game"><img src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/github-128.png" alt="github icon" /></a>
        <a href="https://github.com/BarrettWR/memory-game"><h2>Created by Barrett Reinhard</h2></a>
      </div>
    </>
  )
}

function getCats() {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=10&api_key=' + api_key;
  return fetch(url)
    .then(response => response.json())
}

function randomizeCards(cats, setCats, setClicked) {
  let indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newIndexes = [];

  while (newIndexes.length < 10) {
    let randomIndex = Math.floor(Math.random() * (indexes.length))

    if (!newIndexes.includes(randomIndex)) {
      newIndexes.push(randomIndex);
    }
  }

  const newArray = [...cats]
  let i = 0;
  for (var cat in cats) {
    newArray[i] = cats[newIndexes[i]];
    i++;
  }

  setCats(newArray);
}

export default App

