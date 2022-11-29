import React from "react"
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Card from '../components/card.jsx';
import '../components/styles/Home.css';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Home = (props)=>{
    return (
      <div className="home">
        <Navbar />
        <div className="content">
          <div className="top-content">
            <h1>Bienvenido a SDGD</h1>
            <p>A continuación puedes ver nuestros libros disponibles</p>
          </div>
          <div className="grid-Content">
            {props.products.map( data =><Card key={data.ISBN} data={data}/>)}
          </div>        
        </div>
        <Footer/>
      </div>
    )
  }  
export default Home;