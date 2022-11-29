import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import '../components/styles/Card.css';
import axios from 'axios';

const cookies = new Cookies();
const Card = (props)=>{
  let url = import.meta.env.VITE_URL_SHOPPINGCART;
  const saveShopping = async ()=>{

    if(cookies.get('_id') && !cookies.get('compraId') ){
      let body = {
        UserID: cookies.get('_id'),
        bag:[{"ISBN":props.data.ISBN,"amount":1,"Totalprice":props.data.precio}]
      }
      await axios.post(url,body)
        .then(response =>{
          console.log(response.data)
          if(response.data.response == 'success'){
            console.log('agregado al carrito')
            const {_id} = response.data.doc;
            cookies.set('compraId',_id,{path:"/"})
            console.log(cookies.get('compraId'))
            window.location.href="./shoppingcart";
          }else{
            alert('parece que a ocurrido algún error')
          }
        })
        .catch((err)=>console.log(err))

    }else if (cookies.get('_id') && cookies.get('compraId')){
      await axios.get(url+`${cookies.get('compraId')}/${cookies.get('_id')}`)
        .then(response =>{
          //console.log(response.data)
          let Data = response.data;
          Data["bag"] = [...Data["bag"],{"ISBN":props.data.ISBN,"amount":1,"Totalprice":props.data.precio}];
          sendUpdate(Data);
          window.location.href="./shoppingcart";
        })
        .catch((err)=>console.log(err))

    }else{
      window.location.href = './login';
    }
  }
  const sendUpdate = async (data)=>{
    await axios.put(url+`${cookies.get('compraId')}`,data)
    .then(response =>{
      console.log(response)     
    })
    .catch((err)=>console.log(err))
   } 

    let route = `/view/${props.data.ISBN}`;
    return (
      <div className="card">
        <Link to={route}><img src={props.data.img1} alt="portada del libro" /></Link>
        <div className='info'>
          <h3>{props.data.Title}</h3>
          <p>${props.data.precio}</p>
        </div>
        <button onClick={()=>saveShopping()}>Agregar al carrito</button>
      </div>
    )
  }

export default Card;