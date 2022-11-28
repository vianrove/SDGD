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
import Table from './routes/table';

const App = ()=>{ 
    let estado = false
    const [arr2, setArr2] = React.useState([])
    const [arr3, setArr3] = React.useState([])
    React.useEffect(()=>{
      getData();
    },[Home])

    React.useEffect(()=>{
      getData2();
    },[Login])

    const getData = async ()=>{
    let url = import.meta.env.VITE_URL_STORE; 
    url=url+'catalogo';
    const response = await fetch(url);    
    const responseJson = await response.json()
    setArr2(responseJson)
  }
  const getData2 = async ()=>{
    let url = import.meta.env.VITE_URL_LOGIN; 
    url=url+'view';
    const response = await fetch(url);    
    const responseJson = await response.json()
    setArr3(responseJson)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home products={arr2}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/edit" element={<EditProfile/>}/>
            <Route path="/shoppingcart" element={<ShoppingCart/>}/>
            <Route path="/inventario" element={<Inventario products={arr2}/>}/>
            <Route path="/create" element={<CrearElemento/>}/>
            <Route path="/update/:ISBN" element={<ActualizarInv data={arr2}/>}/>
            <Route path="/view/:ISBN" element={<ProductView data={arr2}/>}/>
            <Route path='/FAQ' element={<FAQ/>}/>
            <Route path='/paid' element={<PaidZone/>}/>
            <Route path='/table' element={<Table data={arr3}/>}/>
            {/* pagina no encontrada */}            
            <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;