import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  BsGraphUpArrow,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from '../Components/MovieCard'
import './Movie.css'

// Imports de variavéis do .env com VITE //
const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY


const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    })

    const data = await response.json();
    setMovie(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }


  useEffect(() => {

    const urlInfoMovie  = `${movieURL}movie/${id}?language=pt-BR`
    getMovie(urlInfoMovie)

  }, [])

  return (
    <div className="movie_page">
      {movie && (
        <>
        <MovieCard movie={movie} showLink={false}/>
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
              <h3>
              <BsWallet2 /> Orçamento
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
              <h3>
                <BsGraphUpArrow /> Receita
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
              <h3>
              <BsHourglassSplit /> Duração
              </h3>
              <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
              <h3>
              <BsFillFileEarmarkTextFill /> Descrição
              </h3>
              <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Movie