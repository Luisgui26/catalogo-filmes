import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="app">
      <Navbar />

      <main className="conteudo">
        <Outlet />
      </main>

      <footer>
        <p>Catálogo de Filmes || Dados fornecidos pelo TMDb</p>
      </footer>
    </div>
  );
}

export default Layout;