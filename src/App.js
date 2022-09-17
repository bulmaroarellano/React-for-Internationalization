import React from 'react';

require('./style.css');

class Infobox extends React.Component{
render(){
  const {headline}=this.props;
  return <h1>{headline}</h1>
}}

 
function App() {
  return (
    <Infobox headline="Hello World" />
  );
}

export default App;
