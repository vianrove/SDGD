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
const App = ()=>{

  const arr = [{ ISBN:1, Title:'Calculo vectorial', muestra:200, venta:187, precio:50, img1:'', img2:'' },{ ISBN:2, Title:'Ensayo Academico', muestra:5, venta:0, precio:0, img1:'', img2:'' }]
  
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
            <Route path='/FAQ' element={<FAQ/>}/>
            {/* pagina no encontrada */}            
            <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;


/*const url =`${import.meta.env.VITE_URL_STORE}catalogo`;
  const [todos,setTodos] = useState()*/
  /*const fetchApi = async ()=>{
    const response = await fetch(url);
    
    console.log(response)
    const responseJson = await response.json()
    console.log(responseJson)
    setTodos(responseJson)
  }*/
  /*useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setTodos(data))
    .catch((err)=>console.log(err));
    //fetchApi()
  },[])*/
