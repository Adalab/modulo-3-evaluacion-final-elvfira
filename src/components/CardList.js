function CardList (props) {
    return (
        <>
       
          <article>
            <img alt="foto del personaje" src={props.characterData.image} />
            <h2>{props.characterData.name}</h2>
            <p>{props.characterData.species}</p>
          </article>
        
        </>

    )
   

}

export default CardList;