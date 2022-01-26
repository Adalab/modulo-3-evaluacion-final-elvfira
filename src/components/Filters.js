function Filters (props) {
    return (
        <>
        <form>
          <label htmlFor="name">Busca por personaje:</label>
          <input
            type="text" 
            id="name"
            placeholder="Ej.: Harry Potter"
            value={props.search}
            onChange={props.handleSearch}
          />
          <label htmlFor="house">Selecciona la casa:</label>
          <select name="house">
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