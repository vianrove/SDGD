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
        <div className="Content">
          <p>pagina principal</p>
          <div className="grid-Content">
            {props.products.map( data =><Card key={data.ISBN} data={data}/>)}
          </div>        
        </div>
        <Footer/>
      </div>
    )
  }  
export default Home;