import Film from "./components/Film";
import { useState} from "react";

const api = {
  key: "c49b5d8",
  base: "http://www.omdbapi.com/?apikey=",
};

function App() {


  const [datos, setDatos] = useState();
  const [film, setFilm] = useState("");

  
    

  const search = evt => {
    if (evt.key === "Enter") {
      fetch
        (`${api.base}${api.key}&t=${film}`)
        .then(res => res.json())
        .then((response) => {
          console.log(response);
          setDatos(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }



  return (
    <div className="App">
      <header className="box-search">
        <input
          type="text"
          className="search-film"
          placeholder="Introduce pelicula (en ingles).."
          onChange={(e) => setFilm(e.target.value)}
          value={film}
          onKeyPress={search}
        />
      </header>
      {(typeof datos != "undefined") ? (
        <Film datos={datos} />
        ):('')}
    </div>
  );
}

export default App;
