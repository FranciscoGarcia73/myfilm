import { FlexDiv, Card } from "./UI/Basic";

function Film({ datos }) {
  return (
    <div>
      <FlexDiv className="movil">
        <div className="flex">
          <div className="poster">
            <img src={datos.Poster} alt="No hay imagen ..."></img>
          </div>
          <Card id="card">
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
