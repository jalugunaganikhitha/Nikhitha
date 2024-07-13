import React from 'react';
import "./App.css";
import "./Components/style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from  './Components/Layout';
import  Aboutus from  './Components/Aboutus';
import  Contact from  './Components/Contact';
import Menu from './Components/Menu';
function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Navbar />}>
           <Route index element={<Home />} />
           <Route path='/Menu' element={<Menu />}/>
           <Route path='/aboutus' element={<Aboutus />}/>
           <Route path='/contact' element={<Contact />} />
         </Route>
       </Routes>
     </BrowserRouter>
    </>
  );
}
export default App;