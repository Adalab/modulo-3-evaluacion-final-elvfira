function Filters (props) {
    const handleName = (ev) => {
      props.handleSearch({
        'key':'name',
        'value':ev.currentTarget.value
      });
    }
    const handleHouse = (ev) => {
      props.handleSearch({
        'key':'house',
        'value':ev.currentTarget.value
      });
    }

    return (
        <>
        <form>
          <label htmlFor="name">Busca por personaje:</label>
          <input
            type="text" 
            id="name"
            placeholder="Ej.: Harry Potter"
            value={props.filterName}
            onChange={handleName}
          />
          <label htmlFor="house">Selecciona la casa:</label>
          <select name="house" value={props.filterHouse} onChange={handleHouse}>
            <option value="gryffindor">Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="hufflepuff">Hufflepuff</option>
          </select>
        </form>
        </>
    )


}

export default Filters; 