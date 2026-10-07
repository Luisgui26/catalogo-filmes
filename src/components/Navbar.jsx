import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieCatalog</h1>

      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "ativo" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/busca"
          className={({ isActive }) => (isActive ? "ativo" : "")}
        >
          Busca
        </NavLink>

        <NavLink
          to="/favoritos"
          className={({ isActive }) => (isActive ? "ativo" : "")}
        >
          Favoritos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;