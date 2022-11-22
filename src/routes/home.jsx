import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from '../components/card';
import '../components/styles/Home.css'
const Home = (props)=>{
    let estado = false
    const [arr2, setArr2] = React.useState([])
    React.useEffect(()=>{
      getData();
    },[])
    const getData = async ()=>{
    const response = await fetch('https://store-api-nodejs-2.herokuapp.com/catalogo');    
    if(response.status==500){ estado = true};
    const responseJson = await response.json()
    console.log(responseJson)
    setArr2(responseJson)
  }
  const validation = ()=>{
    if(estado){
      return(props.products.map( data =><Card data={data}/>))
    }else{
      return(arr2.map( data =><Card data={data}/>))  
    }
  }
    //console.log(this.props.products);
    return (
      <div className="home">
        <Navbar/>
        <div className="Content">
          <p>pagina principal</p>
          <div className="grid-Content">
            {/*this.props.products*/ validation()
            }
          </div>        
        </div>
        <Footer/>
      </div>
    )
  }
  
  
  export default Home;