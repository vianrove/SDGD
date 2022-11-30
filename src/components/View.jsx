import React from 'react';
import '../components/styles/View.css';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

const View = (props)=>{
  let url = import.meta.env.VITE_URL_SHOPPINGCART;
  const saveShopping = async ()=>{
  if(cookies.get('_id') && !cookies.get('compraId') ){
    let body = {
      UserID: cookies.get('_id'),
      bag:[{"ISBN":props.element.ISBN,"amount":1,"Totalprice":props.element.precio}]
    }
    await axios.post(url,body)
      .then(response =>{
        console.log(response.data)
        if(response.data.response == 'success'){
          console.log('agregado al carrito')
          const {_id} = response.data.doc;
          cookies.set('compraId',_id,{path:"/"})
          console.log(cookies.get('compraId'))
          window.location.href="../shoppingcart";
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
        Data["bag"] = [...Data["bag"],{"ISBN":props.element.ISBN,"amount":1,"Totalprice":props.element.precio}];
        sendUpdate(Data);
      })
      .catch((err)=>console.log(err))

  }else{
    window.location.href = '../profile';
  }
}
const sendUpdate = async (data)=>{
  await axios.put(url+`${cookies.get('compraId')}`,data)
  .then(response =>{
    console.log(response)     
  })
  .catch((err)=>console.log(err))
 }
    return (
      <div className="View">
        <div className="grid-img">
          <img src={props.element.img1} alt="portada del libro" />
          {/*<img src={this.props.element.img2} alt="respaldo del libro" />*/}
        </div>
        <div className='productInfo'>
          <h1>{props.element.Title}</h1>
          <h3>${props.element.precio}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempus, nulla id maximus molestie, urna ante accumsan nibh, 
            tincidunt eleifend ligula urna a tellus. Vivamus orci justo, 
            suscipit vitae dolor at, sodales placerat mauris. In at velit dui. 
            Sed feugiat iaculis sagittis. Cras id lacus sit amet sem vestibulum 
            lobortis sed in turpis. Duis est odio, fermentum sit amet lorem porta, 
            tristique cursus massa. Integer imperdiet lacus quam, sit amet tincidunt 
            enim pulvinar non. Vivamus convallis metus vitae diam vestibulum, 
            et consectetur mi dapibus.</p>
          <button onClick={()=>saveShopping()}>Agregar al carrito</button>  
        </div>
      </div>
    )
  }

export default View;