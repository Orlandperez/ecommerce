import './App.css'
import {Header} from './component/header/Header.jsx'
import {Cuenta} from './component/main/cuenta/Cuenta.jsx'
import {Carrito} from './component/main/cuenta/Carrito.jsx'
import {Productos} from './component/main/productos/Productos.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element = {<Productos/>}/>
          <Route path='/Cuenta' element = {<Cuenta/>}/> 
          <Route path='/Carrito' element = {<Carrito/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
