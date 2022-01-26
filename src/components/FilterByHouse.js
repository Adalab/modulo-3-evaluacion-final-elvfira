// import "../styles/Filter.scss"
function FilterByHouse(props) {
  const handleHouse = (event) => {
    props.handleInput({
      key: "house",
      value: event.currentTarget.value,
    });
  };
  return (
    <>
      <label htmlFor="house">Selecciona la casa:</label>
      <select
        name="house"
        id="houses"
        className="input-boxes-name"
        onChange={handleHouse}
        value={props.searchbyHouse}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="hufflepuff">Hufflepuff</option>
      </select>
    </>
  );
}
export default FilterByHouse;
