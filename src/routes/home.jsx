import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from '../components/card';
import '../components/styles/Home.css'
class Home extends React.Component {
  render(){
    console.log(this.props.products);
    return (
      <div className="home">
        <Navbar/>
        <div className="Content">
          <p>pagina principal</p>
          <div className="grid-Content">
            {this.props.products.map( data =><Card data={data}/>)}
          </div>        
        </div>
        <Footer/>
      </div>
    )
  }
  
  }
  export default Home;