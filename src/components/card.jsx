import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Card.css'
class Card extends React.Component{
  render(){
    let route = `/view/${this.props.data.ISBN}`
    return (
      <div className="card">
        <Link to={route}><img src={this.props.data.img1} alt="portada del libro" /></Link>
        <h3>{this.props.data.Title}</h3>
        <p>${this.props.data.precio}</p>
        <button>Agregar al carrito</button>
      </div>
    )
  }
}
export default Card;