import { Link } from "react-router-dom";

function MovieCard({ filme, favoritos, alternarFavorito }) {
  const estaFavoritado = favoritos.some(
    (favorito) => favorito.id === filme.id
  );

  return (
    <div className="movie-card">
      {filme.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
        />
      ) : (
        <div className="sem-poster">Sem imagem</div>
      )}

      <h3>{filme.title}</h3>

      <p>Nota: {filme.vote_average.toFixed(1)}</p>

      <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>

      <button onClick={() => alternarFavorito(filme)}>
        {estaFavoritado ? "Remover dos favoritos" : "Favoritar"}
      </button>
    </div>
  );
}

export default MovieCard;