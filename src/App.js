import React from 'react';
import {
  BrowserRouter,
  Routes, //replaces 'Switch' used till v5
  Route,
} from 'react-router-dom';
import Home from './pages';
import Header from './components/Header/Header';
import MyNavbar from './components/Navbar/MyNavbar';
import About from './pages/About/About';
import Apple from './pages/Apple';
import Asus from './pages/Asus';
import Samsung from './pages/Samsung';
import OnePlus from './pages/OnePlus';
import Google from './pages/Google';
import Nothing from './pages/Nothing';
import './styles/index.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
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
}

export default App;
