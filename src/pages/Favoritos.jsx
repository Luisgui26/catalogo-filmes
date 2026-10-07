import MovieCard from "../components/MovieCard";

function Favoritos({ favoritos, alternarFavorito }) {
  return (
    <div>
      <h2>Meus Favoritos</h2>

      {favoritos.length === 0 ? (
        <p>Você ainda não possui filmes favoritos.</p>
      ) : (
        <div className="lista-filmes">
          {favoritos.map((filme) => (
            <MovieCard
              key={filme.id}
              filme={filme}
              favoritos={favoritos}
              alternarFavorito={alternarFavorito}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
