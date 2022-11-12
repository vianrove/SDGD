import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const arr = [
    { ISBN:1, Title:'Calculo vectorial', muestra:200, venta:187, precio:50, img1:'', img2:'' },{ ISBN:2, Title:'Ensayo Academico', muestra:5, venta:0, precio:0, img1:'', img2:'' }]
  const url =`${import.meta.env.VITE_URL_STORE}catalogo`;
  const [todos,setTodos] = useState()
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

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App;
