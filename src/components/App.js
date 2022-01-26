import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.scss";
import getApi from "../services/callsApi";
import CardList from "./CardList";
import CardDetail from "./CardDetail";
import Filters from "./Filters";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  // Declaro variables de estado
  const [character, setCharacterData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchByHouse, setSearchByHouse] = useState("Gryffindor");
  // const [data, setData] = useState('');
  // Hago la petición a la API según carga la página.
  useEffect(() => {
    getApi().then((character) => {
      setCharacterData(character);
    });
  }, [character]);

  useEffect(() => {
    getApi(searchByHouse).then(() => {
      setSearchByHouse(searchByHouse);
    });
  }, [searchByHouse]);

  // Handlers de los inputs
  const handleInput = (data) => {
    if (data.key === "name") {
      setSearch(data.value);
    } else if (data.key === "house") {
      setSearchByHouse(data.value);
    }
  };

  // Renderizado página
  const filterName = character
    .filter((characterData) => {
      if (search !== "") {
        return characterData.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      } else {
        return true;
      }
    })
    .map((characterData, index) => {
      return (
        <li key={index} className="character">
          <article>
            <img
              alt="foto del personaje"
              src={
                characterData.image !== ""
                  ? characterData.image
                  : "https://via.placeholder.com/210x295/e8ffe9/666666/?text=HarryPotter"
              }
            />
            <h2>{characterData.name}</h2>
            <p>{characterData.species}</p>
          </article>
        </li>
      );
    });

  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.characterId;
    const characterFound = character.find((person) => character.id === routeId);
    return <CardDetail character={characterFound} />;
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div>
            <Filters
              character={search}
              handleInput={handleInput}
              house={searchByHouse}
            />
            <CardList character={filterName} />
          </div>
        </Route>
        <Route path="/person/:personId" render={renderCharacterDetail} />
      </Switch>
      <Footer />
      <section>
        <ul>{filterName}</ul>
      </section>
    </>
  );
}

export default App;
