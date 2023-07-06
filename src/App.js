import Header from './Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Home/Home';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
