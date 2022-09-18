import React from 'react';

require('./style.css');

class Infobox extends React.Component{
render(){
  const {headline}=this.props;
  return <h1>{headline}</h1>
}}
 
function App() {
  return (
    <>
    <h1>About me</h1>
    <h2>This is me - Bulmaro Arellano</h2>
    <p>Right now, I'm 33 years old and I live in Toluca, Mex. <br /> 
    Im engineer, im developer, Im happy studying React<br />
    Educative.io and Packt publications are my schoool</p>
    </>
    );
}

export default App;
