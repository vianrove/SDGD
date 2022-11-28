import React from "react"
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Card from '../components/cardEdit';
import '../components/styles/inventario.css';

const Inventario = (props)=>{
/*  let estado = false
  const [arr2, setArr2] = React.useState([])
  React.useEffect(()=>{
    getData();
  },[])
  const getData = async ()=>{
  let url = import.meta.env.VITE_URL_STORE; 
  url=url+'catalogo';
  const response = await fetch(url);    
  if(response.status==500){ estado = true};
  const responseJson = await response.json()
  setArr2(responseJson)
}
const validation = ()=>{
  if(estado){
    return(props.products.map( data =><Card key={data.ISBN} data={data}/>))
  }else{
    return(arr2.map( data =><Card key={data.ISBN} data={data}/>))  
  }
}*/

  return (
    <div className="home">
      <Navbar />
      <div className="Content">
        <p>pagina principal</p>
        <div className="grid-Content">
          { /*validation()*/ }
          {props.products.map( data =><Card key={data.ISBN} data={data}/>)}

        </div>        
      </div>
      <Footer/>
    </div>
  )
}
    

    
export default Inventario;