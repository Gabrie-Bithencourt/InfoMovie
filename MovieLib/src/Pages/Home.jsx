import { useState, useEffect } from 'react'
import MovieCard from '../Components/MovieCard'
import './MoviesGrid.css'

// Imports de variavéis do .env com VITE //
const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [popularMovie, setPopularMovies] = useState([])

  const getPopularMovies = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    })

    const data  = await response.json();
    setPopularMovies(data.results)
  }


  useEffect(() => {
    
    const topRatedUrl = `${movieURL}movie/popular?language=pt-BR`;
    getPopularMovies(topRatedUrl);

  },[])

  return (
    <div className="container">
      <h2 className="title">Filmes: Mais Populares</h2>
      <div className="movies_container">
        { popularMovie.length === 0  && <p>Carregando...</p>}
        { popularMovie.length > 0 && 
          popularMovie.map((movie) =>  <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home