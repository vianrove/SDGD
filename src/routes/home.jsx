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
        <p>pagina principal</p>
        {this.props.products.map( data =><Card data={data}/>)}
        <Footer/>
      </div>
    )
  }
  
  }
  export default Home;