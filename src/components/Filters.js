import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";

function Filters(props) {
  return (
    <section className="inputs">
      
        <form action="" className="inputs-boxes">
          <FilterByCharacter
            handleInput={props.handleInput}
            search={props.search}
          />
          <FilterByHouse
            handleInput={props.handleInput}
            searchByHouse={props.searchByHouse}
          />
        </form>

    </section>
  );
}

export default Filters
