import { useEffect, useState } from "react";
import "../styles/App.scss";
import getApi from "../services/callsApi";
// import CardList from "./CardList";
// import CardDetail from "./CardDetail";
// import CardItem from "./CardItem";
// import Filters from "./Filters";

function App() {
  // Declaro variables de estado
  const [character, setCharacterData] = useState([]);
  const [search, setSearch] = useState("");
  // const [data, setData] = useState('');
  // Hago la petición a la API según carga la página.
  useEffect(() => {
    getApi().then((character) => {
      setCharacterData(character);
    });
  }, [character]);

  // Handlers
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  // Render HTML
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
          <article>
            <h2>{characterData.name}</h2>
            <p>{characterData.species}</p>
          </article>
        </li>
      );
    });

  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <form>
          <label htmlFor="name">Busca por personaje:</label>
          <input
            type="text"
            id="name"
            placeholder="Ej.: Harry Potter"
            value={search}
            onChange={handleSearch}
          />
          <label htmlFor="house">Selecciona la casa:</label>
          <select name="house">
            <option value="gryffindor">Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="hufflepuff">Hufflepuff</option>
          </select>
        </form>
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
