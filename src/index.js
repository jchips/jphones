import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import App from './App';
import Header from "./components/Header";
import MyNavbar from "./components/MyNavbar";
import About from './pages/About';
import Apple from "./pages/Apple";
import Asus from "./pages/Asus";
import Samsung from "./pages/Samsung";
import OnePlus from './pages/OnePlus';
import Google from './pages/Google';
import Nothing from './pages/Nothing';

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <MyNavbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/apple' element={<Apple />} />
        <Route path='/asus' element={<Asus />} />
        <Route path='/google' element={<Google />} />
        <Route path='/oneplus' element={<OnePlus />} />
        <Route path='/samsung' element={<Samsung />} />
        <Route path='/nothing' element={<Nothing />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

