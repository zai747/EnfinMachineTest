import './App.css';
import React from 'react';
import AddProduct from './AddProduct';
import ListProduct from './ListProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditProduct from './EditProduct';
import Navb from './Navb';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Navb/>
      <Routes>
        <Route path='edit/:id' element={<EditProduct/>}></Route>
        <Route path='add/' element={<AddProduct/>}></Route>
        <Route path='/' element={<ListProduct/>}></Route>
      </Routes>
    
    
      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;
