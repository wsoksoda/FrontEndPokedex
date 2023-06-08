import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Pokemon from "./pages/Detail/pokemon.tsx";
import PokemonSearch from "./pages/AdvancedSearch/pokemonSearch.tsx";
import Lost from "./pages/Lost.tsx";
import Home from "./pages/Home/home.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/1" />} />
        <Route path="/:pageable" element={<Home />}></Route>
        <Route path="/:pageable/pokemon/:id" element={<Pokemon />}></Route>
        <Route path="/:pageable/search" element={<PokemonSearch />}></Route>
        <Route
          path="/:pageable/pokemon/:id/search"
          element={<PokemonSearch />}
        ></Route>
        <Route path="*" element={<Lost />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
