import React from "react"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";

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