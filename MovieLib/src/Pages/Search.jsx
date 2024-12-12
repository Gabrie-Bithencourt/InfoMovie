import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../Components/MovieCard"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css"

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovies = async () => {
    const response = await fetch(`${searchURL}?query=${query}&language=pt-BR`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`
      }
    });

    const data = await response.json();
    setMovies(data.results);
  }


  useEffect(() => {
    getSearchMovies();
  },[query])


  return (
    <div className="container">
      <h2 className="title">Resultados para: <div className="query-text">{query}</div></h2>
      <div className="movies_container">
        { movies.length === 0  && <p>Carregando...</p>}
        { movies.length > 0 && 
          movies.map((movie) =>  <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Search