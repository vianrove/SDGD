import React from 'react';
import '../components/styles/Card.css'
class Card extends React.Component{
  render(){
    return (
      <div className="card">
        <img src={this.props.data.img1} alt="portada del libro" />
        <h3>{this.props.data.Title}</h3>
        <p>${this.props.data.precio}</p>
        <button>Agregar al carrito</button>
        <button style={{"background-color":"red", "color":'white'}}>eliminar</button>
      </div>
    )
  }
}
export default Card;