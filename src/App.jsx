import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import Busca from "./pages/Busca";
import Favoritos from "./pages/Favoritos";
import NaoEncontrada from "./pages/NaoEncontrada";

function App() {
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");

    if (favoritosSalvos) {
      return JSON.parse(favoritosSalvos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function alternarFavorito(filme) {
    const filmeJaFavoritado = favoritos.some(
      (favorito) => favorito.id === filme.id
    );

    if (filmeJaFavoritado) {
      setFavoritos(
        favoritos.filter((favorito) => favorito.id !== filme.id)
      );
    } else {
      setFavoritos([...favoritos, filme]);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              favoritos={favoritos}
              alternarFavorito={alternarFavorito}
            />
          }
        />

        <Route path="filme/:id" element={<Detalhes />} />

        <Route
          path="busca"
          element={
            <Busca
              favoritos={favoritos}
              alternarFavorito={alternarFavorito}
            />
          }
        />

        <Route
          path="favoritos"
          element={
            <Favoritos
              favoritos={favoritos}
              alternarFavorito={alternarFavorito}
            />
          }
        />

        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}

export default App;