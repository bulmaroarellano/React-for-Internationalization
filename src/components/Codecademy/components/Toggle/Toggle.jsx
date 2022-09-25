import React from 'react';
 const green = '#39D1B4';
const yellow = '#FFD712';

/* 
  Proceso general de gestion del estado:

  1.- Agregar el constructor 
  2.- Inicializar el estado this.state={ name: 'Bulmaro'};
  3.- this.handleEventFunction = this.handleEventFunction.bind(this);
  4.- hadleEventFunction(){ 
        Accedemos a la variable o propiedad del esttado a modificar con this.state.name
      }
  5.- Actualizamos el estado   this.setState({name: newName})
  6.- En el render:
      .- Accedemos al estado con this.state.name, 
      .- Actualizamos el estado llamando a handleEventFunction() al dispararse un evento, onClick por ejemplo 
*/
 
export  class Toggle extends React.Component {

  constructor (props){
  super(props);
  this.state= {color: yellow};
  this.changeColor=this.changeColor.bind(this);
  }


  changeColor(){
    const newColor = this.state.color == yellow ? green : yellow;
    this.setState({color: newColor});
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: this.state.color }}>
          <button onClick={this.changeColor}>Mira como cambio de color</button>
          </div> 
      </React.Fragment>
    )
  }
}