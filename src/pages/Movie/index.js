import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import "./movie.css";

function Movie() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "486cf28af09bfe05eae35b3756702a16",
            language: "pt-BR",
          },
        })
        .then((response) => setMovie(response.data))
        .catch(() => {
          console.log("Erro ao carregar página");
        });
    }
    loadMovie();
  }, []);

  return (
    <div className="list-info">
      {loading ? (
        <h2>Carregando lista de filmes...</h2>
      ) : (
        <>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
          <h3>Sinopse</h3>
          <span>{movie.overview}</span>
          <strong>{movie.vote_average} / 10</strong>
        </>
      )}
    </div>
  );
}
export default Movie;
