import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

//rutas
import Home from './Routes/home';
import Notfound from './routes/notfound';
import Login from './Routes/login';
import SignUp from './Routes/signUp';
import Profile from './Routes/perfilUser';
import FAQ from './Routes/FAQ';
import EditProfile from './Routes/editProfile';
import ShoppingCart from './Routes/shoppingCart';
import CrearElemento from './Routes/crearElemento';
import ActualizarInv from './Routes/ActualizarInv';
import Inventario from './Routes/inventario';
import ProductView from './Routes/productView';
import PaidZone from './Routes/paidZone';
const App = ()=>{
  const arr = [{ ISBN:1, Title:'Calculo vectorial', muestra:200, venta:187, precio:50, img1:'https://pictures.abebooks.com/isbn/9788478290697-es.jpg', img2:'' },{ ISBN:2, Title:'Ensayo Academico', muestra:5, venta:0, precio:0, img1:'https://vagodeinternet.com/wp-content/uploads/2021/01/Que-es-un-ensayo-escrito-1200x700.png', img2:'' },{ ISBN:3, Title:'Ensayo Academico', muestra:5, venta:0, precio:0, img1:'https://vagodeinternet.com/wp-content/uploads/2021/01/Que-es-un-ensayo-escrito-1200x700.png', img2:'' },{ ISBN:4, Title:'Ensayo Academico', muestra:5, venta:0, precio:0, img1:'https://vagodeinternet.com/wp-content/uploads/2021/01/Que-es-un-ensayo-escrito-1200x700.png', img2:'' }]

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home products={arr}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/edit" element={<EditProfile/>}/>
            <Route path="/shoppingcart" element={<ShoppingCart/>}/>
            <Route path="/inventario" element={<Inventario products={arr}/>}/>
            <Route path="/create" element={<CrearElemento/>}/>
            <Route path="/update" element={<ActualizarInv/>}/>
            <Route path="/view/:ISBN" element={<ProductView data={arr}/>}/>
            <Route path='/FAQ' element={<FAQ/>}/>
            <Route path='/paid' element={<PaidZone/>}/>
            {/* pagina no encontrada */}            
            <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;