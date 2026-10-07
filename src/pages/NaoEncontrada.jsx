import { Link } from "react-router-dom";

function NaoEncontrada() {
  return (
    <div className="nao-encontrada">
      <h2>404</h2>

      <p>Página não encontrada.</p>

      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}

export default NaoEncontrada;