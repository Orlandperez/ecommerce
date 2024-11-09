import './App.css'
import {Header} from './component/header/Header.jsx'
import {Cuenta} from './component/main/cuenta/Cuenta.jsx'
import {Carrito} from './component/main/cuenta/Carrito.jsx'
import {Productos} from './component/main/productos/Productos.jsx'
import {Login} from './component/main/cuenta/Login.jsx'
import { Register } from './component/main/cuenta/Register.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Perfil } from './component/main/cuenta/Perfil.jsx'


function App() {

  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element = {<Productos/>}/>
          <Route path='/Cuenta' element = {<Cuenta/>}/> 
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/Register' element = {<Register/>}/>
          <Route path='/Carrito' element = {<Carrito/>}/>
          <Route path='/Perfil' element={<Perfil/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
