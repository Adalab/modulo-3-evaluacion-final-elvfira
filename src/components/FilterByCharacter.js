// import "../styles/Filter.scss"
function FilterByCharacter(props) {
  const handleName = (event) => {
    event.preventDefault();

    props.handleInput({
      key: 'name',
      value: event.currentTarget.value,
    });
  };
  return (
    <>
      <label htmlFor="name">Busca por personaje:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Ej.: Harry Potter"
        value={props.search}
        onChange={handleName}
      />
    </>
  );
}
export default FilterByCharacter;
