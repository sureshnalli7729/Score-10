import React from 'react'
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Mobilepage from './Home/Mobilepage';
import Footer from './Home/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
      </Routes>
      <Home/>
      <Mobilepage />
    </BrowserRouter>
  )
}

export default App;