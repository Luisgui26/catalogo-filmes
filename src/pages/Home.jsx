import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_API_KEY;

function Home({ favoritos, alternarFavorito }) {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarFilmes() {
      try {
        setLoading(true);

        const resposta = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
        );

        if (!resposta.ok) {
          throw new Error("Erro ao buscar filmes");
        }

        const dados = await resposta.json();

        setFilmes(dados.results);
      } catch{ 
        setErro("Não foi possível carregar os filmes.");
      } finally {
        setLoading(false);
      }
    }

    buscarFilmes();
  }, []);

  if (loading) {
    return <p>Carregando filmes...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <div>
      <h2>Filmes Populares</h2>

      <div className="lista-filmes">
        {filmes.map((filme) => (
          <MovieCard
            key={filme.id}
            filme={filme}
            favoritos={favoritos}
            alternarFavorito={alternarFavorito}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;