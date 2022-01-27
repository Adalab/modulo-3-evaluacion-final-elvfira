import { useEffect, useState } from "react";
import "../styles/App.scss";
import getApi from "../services/callsApi";
import CardList from "./CardList";
// import CardDetail from "./CardDetail";
// import CardItem from "./CardItem";
import Filters from "./Filters";

function App() {
  // Declaro variables de estado
  const [character, setCharacterData] = useState([]);
  const [search, setSearch] = useState("");
  // const [data, setData] = useState('');
  // Hago la petición a la API según carga la página.
  useEffect(() => {
    getApi().then((character) => {
      console.log(character);
      setCharacterData(character);
    });
  }, [character]);

  // Handlers
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  // Renderizado página
  const renderData = character
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

        <CardList index= {index} characterData= {characterData}/>
        </li>
        
      );
    });

  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <Filters handleSearch={handleSearch} />

        <section>
          <ul>{renderData}</ul>
        </section>
      </main>
      <footer>
        <small>&copy; 2022 elvfira </small>
      </footer>
    </>
  );
}

export default App;
