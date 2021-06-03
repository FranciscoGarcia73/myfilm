import Film from "./components/Film";
import Search from "./components/Search";
import React, { useEffect } from "react";
import { useState, Suspense } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch} from "react-router-dom";

const api = {
  key: "c49b5d8",
  base: "https://www.omdbapi.com/?apikey=",
};

function App() {

  const [datos, setDatos] = useState();
  const [films, setFilms] = useState("");

  const handleClick = (titulo) => setFilms(titulo);

  useEffect (() => {
    axios.get(`${api.base}${api.key}&t=${films}`)
      .then((response) => {
        console.log(response);
        setDatos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
  },[films]);

  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
             <Route path="/" exact>
              <Suspense fallback={<div>Cargando...</div>}>
                <Search onClick = {handleClick} />
              </Suspense>
            </Route>
            <Route path="/film" exact>
              <Suspense fallback={<div>Cargando...</div>}>
                <Film datos={datos} />
              </Suspense>
            </Route>
            <Route render={() => <h1>404 Not Found</h1>} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
