import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY;

function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarDetalhes() {
      try {
        setLoading(true);

        const resposta = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`
        );

        if (!resposta.ok) {
          throw new Error("Erro ao buscar detalhes");
        }

        const dados = await resposta.json();

        setFilme(dados);
      } catch {
        setErro("Não foi possível carregar os detalhes.");
      } finally {
        setLoading(false);
      }
    }

    buscarDetalhes();
  }, [id]);

  if (loading) {
    return <p>Carregando detalhes...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <div className="detalhes">
      <button onClick={() => navigate(-1)}>Voltar</button>

      {filme.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
        />
      )}

      <div>
        <h2>{filme.title}</h2>

        <p>{filme.overview || "Sinopse não disponível."}</p>

        <p>
          <strong>Nota:</strong> {filme.vote_average.toFixed(1)}
        </p>

        <p>
          <strong>Data de lançamento:</strong>{" "}
          {filme.release_date || "Não informada"}
        </p>
      </div>
    </div>
  );
}

export default Detalhes;