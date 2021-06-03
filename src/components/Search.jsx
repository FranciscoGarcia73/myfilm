import { useState } from "react";
import { NavLink } from "react-router-dom";

function Search({ onClick }) {
  const [film, setFilm] = useState("");

  return (
    <div className="App">
      <div className="box-search">
        <div>
          <input
            type="text"
            className="search-film"
            placeholder="Introduce pelicula (en ingles).."
            onChange={(e) => setFilm(e.target.value)}
            value={film}
          />
        </div>
        <button className="boton" onClick={() => onClick(film)}>
          <NavLink className="ref" to="/film">
            Buscar
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Search;
