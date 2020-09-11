import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [person, setPerson] = useState([])
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
        .then(res => {
          console.log(res.data.results);
        setPerson(res.data.results);
        })
        .catch(error =>{
        console.log(error)
  });
}) 

  return (
    <div className="App">
      <h1 className="Header">Characters</h1> 
      <div>
      {person.map(character => <Character character={character} />)} 
      </div>  
    </div>
  );
}

export default App;
