import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Movie from './Pages/Movie.jsx'
import Search from './Pages/Search.jsx'
import EmCartaz from './Pages/EmCartaz.jsx'
import MaisBemAvaliados from './Pages/MaisBemAvaliados.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App />}>
          <Route path="/" element={<Home />}/>
            <Route path="populares" element={<Home />}/>
            <Route path="em_cartaz" element={<EmCartaz />}/>
            <Route path="bem_avaliados" element={<MaisBemAvaliados />}/>
            <Route path="movie/:id" element={<Movie />}/>
            <Route path="search" element={<Search />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
