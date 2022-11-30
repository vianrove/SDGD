import React from 'react';
import '../components/styles/CardEdit.css';
import axios from 'axios';
class Card extends React.Component{
  UpdateItem (){
    window.location.href=`./update/${this.props.data.ISBN}`;
  }
  async DeleteItem(){
    let body ={ISBN:this.props.data.ISBN}
    let url = import.meta.env.VITE_URL_STORE;
    url=url+`delete/${this.props.data.ISBN}`;
    await axios.delete(url)
    .then(()=>{
      console.log("deleted successfully")
      window.location.href='./inventario';
    })
    .catch((error) => {console.log(error)})
  }
  render(){
    return (
      <div className="cardE">
        <img src={this.props.data.img1} alt="portada del libro" />
        <div className='cardinfo'>
          <h3>{this.props.data.Title}</h3>
          <p>${this.props.data.precio}</p>
        </div>
        <button onClick={()=>this.UpdateItem()} >Actualizar item</button>
        <button className="btn-delete" onClick={()=>this.DeleteItem()}>eliminar</button>
      </div>
    )
  }
}
export default Card;