import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import { Route, Routes } from 'react-router-dom'
import List from './pages/List'
import Orders from './pages/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "https://food-ordering-ni0u.onrender.com"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
    <hr/>
      <div className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/orders' element={<Orders url={url} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App