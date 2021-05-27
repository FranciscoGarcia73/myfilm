import { useState, useEffect } from "react";
import axios from "axios";
import { FlexDiv, Card } from "./UI/Basic";

const api = {
  key: "c49b5d8",
  base: "http://www.omdbapi.com/?apikey=",
};

function Film() {
  const [film, setFilm] = useState("");
  const [dFilm, setDfilm] = useState(true);
  const [datos, setDatos] = useState();

  useEffect(() => {
    axios
      .get(`${api.base}${api.key}&t=${film}`)
      .then((response) => {
        console.log(response);
        setDatos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dFilm]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      setDfilm(!dFilm);
    }
  };

  return (
    <div>
      <header className="box-search">
        <input
          type="text"
          className="search-film"
          placeholder="Introduce pelicula ..."
          onChange={(e) => setFilm(e.target.value)}
          value={film}
          onKeyPress={search}
        />
      </header>

      <FlexDiv className="movil">
        <div className="flex">
          <div className="poster">
            <img src={datos.Poster} alt="No hay imagen ..."></img>
          </div>
          <Card>
            <p>Estreno: {datos.Released}</p>
            <br />
            <p>Director: {datos.Director}</p>
            <br />
            <p>Actores: {datos.Actors}</p>
            <br />
            <p>Duracion: {datos.Runtime}</p>
            <br />
            <p>Genero: {datos.Genre}</p>
            <br />
            <p>Premios: {datos.Awards}</p>
            <br />
            <p>Pais: {datos.Country}</p>
            <br />
            <p>Trama: {datos.Plot}</p>
            <br />
            <p>Produccion: {datos.Production}</p>
            <br />
            <p>Recaudacion: {datos.BoxOffice}</p>
            <br />
            <p>Valoracion: {datos.imdbRating}</p>
          </Card>
        </div>
      </FlexDiv>
    </div>
  );
}

export default Film;
