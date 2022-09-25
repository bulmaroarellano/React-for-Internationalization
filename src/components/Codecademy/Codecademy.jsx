import { animals } from './animals';
import React from "react";
import ReactDOM from 'react-dom';

const title="";
const background = <img className="background" alt="ocean" src="/images/ocean.jpg"/>
const images = [];
const showBackground = true;
for(const animal in animals){
  images.push(<img
  key={animal}
  className = 'animal'
  alt = {animal}
  src = {animals[animal].image}
  aria-label= {animal}
  role= 'button'
  onClick={displayFact}
  />
  )
}
function displayFact(e){
  const selectedAnimal=e.target.alt;
  const animalInfo= animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFacts=animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML=funFacts;
}
const animalFacts = (<div>
                     <h1>{title==""?'Click on animal for a fun fact':title}</h1>
                     {showBackground && background}
                     <p id="fact"></p>
                     <div className="animals">{images}</div>
                    </div>)


ReactDOM.render(animalFacts, document.getElementById(
  "root"));