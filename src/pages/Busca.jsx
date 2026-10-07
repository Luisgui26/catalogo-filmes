import { useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_API_KEY;

function Busca({ favoritos, alternarFavorito }) {
  const [termo, setTermo] = useState("");
  const [resultados, setResultados] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function buscarFilmes(evento) {
    evento.preventDefault();

    if (termo.trim() === "") {
      setErro("Digite o nome de um filme.");
      return;
    }

    setErro("");
    setLoading(true);

    try {
      const resposta = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
          termo
        )}`
      );

      if (!resposta.ok) {
        throw new Error("Erro na busca");
      }

      const dados = await resposta.json();

      setResultados(dados.results);
    } catch {
      setErro("Não foi possível realizar a busca.");
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div>
      <h2>Buscar Filmes</h2>

      <form onSubmit={buscarFilmes}>
        <input
          type="text"
          placeholder="Digite o nome do filme"
          value={termo}
          onChange={(evento) => setTermo(evento.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      {erro && <p>{erro}</p>}

      {loading && <p>Buscando...</p>}

      <div className="lista-filmes">
        {resultados.map((filme) => (
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

export default Busca;
