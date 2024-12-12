import { useState, useEffect } from 'react'
import MovieCard from '../Components/MovieCard'
import './MoviesGrid.css'

// Imports de variavéis do .env com VITE //
const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const EmCartaz = () => {
    const [inPosterMovie, setInPosterMovie] = useState([])


    const getInPosterMovie = async () => {
        const response = await fetch(`${movieURL}movie/now_playing?language=pt-BR`, {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${apiKey}`
            }
        })

        const data = await response.json()
        setInPosterMovie(data.results)
    }

    useEffect(() => {
        getInPosterMovie()
    }, [])


    return (
        <div className="container">
            <h2 className="title">Filmes: Em Cartaz</h2>
            <div className="movies_container">
            { inPosterMovie.length === 0  && <p>Carregando...</p>}
            { inPosterMovie.length > 0 && 
                inPosterMovie.map((movie) =>  <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}

export default EmCartaz