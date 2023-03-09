import React from 'react';
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/admin-pages/Dashboard';
import MovieList from './pages/admin-pages/MovieList';
import Orders from './pages/admin-pages/Orders';
import Sidebar from './components/admin-components/sidebar/Sidebar';
const AdminApp = () => {
  return (
    <BrowserRouter>
   <Sidebar>
   <Routes>
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/movieList' element={<MovieList/>} />
    <Route path='/orders' element={<Orders/>} />
   </Routes>
   </Sidebar>
   </BrowserRouter>
  )
}

export default AdminApp