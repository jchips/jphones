import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import App from './App';
import Header from "./components/Header";
import MyNavbar from "./components/MyNavbar";
import Apple from "./pages/Apple";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header/>
      <MyNavbar/>
      {/* <div className="container"> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/apple" element={<Apple />} />
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <Routing/>
  </React.StrictMode>
);

