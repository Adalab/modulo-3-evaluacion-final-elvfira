import { useEffect, useState } from "react";
import "../styles/App.scss";
import getApi from "../services/callsApi";
import CardList from "./CardList";
// import CardDetail from "./CardDetail";
// import CardItem from "./CardItem";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Filters from "./Filters";
import CardDetail from "./CardDetail";

function App() {
  // Declaro variables de estado
  const [character, setCharacterData] = useState([]);
  const [filterName, setFilterName] = useState("");
  // const [data, setData] = useState('');
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  // Hago la petición a la API según carga la página.
  const routeData = useRouteMatch('/character/:id');

  useEffect(() => {
    getApi(filterHouse).then((character) => {
      console.log(character);
      setCharacterData(character);
    });
  }, [filterHouse]);

  // Handlers
  const handleSearch = (data) => {
    if(data.key === 'name'){
      setFilterName(data.value);
    }
    if(data.key === 'house'){

      setFilterHouse(data.value);
    }
  };

  // Renderizado página
  const renderData = character
    .filter((characterData) => {
      if (filterName !== "") {
        return characterData.name
          .toLocaleLowerCase()
          .includes(filterName.toLocaleLowerCase());
      } else {
        return true;
      }
    })
    .map((characterData, index) => {
      return (
        <li key={index} className="character">

        <CardList index= {index} characterData= {characterData}/>
        </li>
        
      );
    });
    
    const characterDetail = routeData != null ? character.find((characterData) => characterData.id === routeData.params.id) : null;

  return (
    <>
      <Switch>
        <Route exact path="/">
        <header>
          <h1>Harry Potter</h1>
        </header>
        <main>
          <Filters handleSearch={handleSearch} filterName={filterName} filterHouse={filterHouse} />

          <section>
            <ul>{renderData}</ul>
          </section>
        </main>
        <footer>
          <small>&copy; 2022 elvfira </small>
        </footer>
        </Route>
        <Route exact path="/character/:id">
          <CardDetail characterData={characterDetail} />
        </Route>
      </Switch >
    </>
  );
}

export default App;
