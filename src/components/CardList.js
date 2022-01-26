function CardList (props) {
    return (
        <>
        <li key={props.index} className="character">
          <article>
            <img alt="foto del personaje" src={props.characterData.image} />
            <h2>{props.characterData.name}</h2>
            <p>{props.characterData.species}</p>
          </article>
        </li>
        </>

    )
   

}

export default CardList;