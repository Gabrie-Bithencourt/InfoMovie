import { useState, useEffect } from 'react'
import MovieCard from '../Components/MovieCard'
import './MoviesGrid.css'

// Imports de variavéis do .env com VITE //
const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const MaisBemAvaliados = () => {
    const [topMovie, setTopMovie] = useState([])

    const getTopRatedMovie = async () => {
        const response = await fetch(`${movieURL}movie/top_rated?language=pt-BR`, {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${apiKey}`
            }
        })

        const data = await response.json()
        setTopMovie(data.results)
    }

    useEffect(() => {
        getTopRatedMovie()
    }, [])


    return (
        <div className="container">
            <h2 className="title">Filmes: Mais Bem Avaliados</h2>
            <div className="movies_container">
            { topMovie.length === 0  && <p>Carregando...</p>}
            { topMovie.length > 0 && 
                topMovie.map((movie) =>  <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}

export default MaisBemAvaliados