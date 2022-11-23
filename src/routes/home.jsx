import React from "react"
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Card from '../components/card';
import '../components/styles/Home.css';
import Cookies from "universal-cookie";

const cookies = new Cookies();
const Home = (props)=>{
    let estado = false
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
    //console.log(responseJson)
    setArr2(responseJson)
  }
  const validation = ()=>{
    if(estado){
      return(props.products.map( data =><Card key={data.ISBN} data={data}/>))
    }else{
      return(arr2.map( data =><Card key={data.ISBN} data={data}/>))  
    }
  }

    return (
      <div className="home">
        <Navbar />
        <div className="Content">
          <p>pagina principal</p>
          <div className="grid-Content">
            { validation() }
          </div>        
        </div>
        <Footer/>
      </div>
    )
  }
  
  
  export default Home;