import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import View from "../components/View";
import "../components/styles/productView.css";
const ProductView = (props)=>{

        let { ISBN } = useParams();
        ISBN = parseInt(ISBN)
        const posicion = props.data.find((indice)=>indice.ISBN===ISBN)
        console.log(posicion)
        return (
            <div className="productView">
              <Navbar/>
              <div className="container">
                <View element={posicion}/>
              </div>
              <Footer/>
            </div>
          )
    }
    


export default ProductView;