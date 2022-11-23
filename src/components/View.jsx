import React from 'react';
import '../components/styles/View.css';

class View extends React.Component{
  render(){
    return (
      <div className="View">
        <div className="grid-img">
          <img src={this.props.element.img1} alt="portada del libro" />
          {/*<img src={this.props.element.img2} alt="respaldo del libro" />*/}
        </div>
        <h3>{this.props.element.Title}</h3>
        <p>${this.props.element.precio}</p>
        <button>Agregar al carrito</button>  
      </div>
    )
  }
}
export default View;