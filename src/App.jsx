import { useState, useEffect } from 'react'
import './App.css'
import { api_key } from './assets/api_key'
import Card from './components/Card'
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats().then(data => setCats(data));
  }, []);

  // Implement randomization by creating the randomization function here then
  // pass the function to each card, and each card has onClick="do_randomization"

  return (
    <>
      <div className='scoreBoard'>
        <ScoreBoard />
        
      </div>

      <div className='gameContainer'>
        {cats.map(cat => (
          <Card url= {cat.url} key={cat.id}/>
        ))}
      </div>
    </>
  )
}

function getCats() {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=10&api_key=' + api_key;
  return fetch(url)
    .then(response => response.json())
}

export default App
