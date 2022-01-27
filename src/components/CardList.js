import { Link } from "react-router-dom";

function CardList (props) {
    return (
        <>
       <Link to={`./character/${props.characterData.id}`} style={{ textDecoration: "none" }}>
          <article>
          <img
              alt="foto del personaje"
              src={
                props.characterData.image !== ""
                  ? props.characterData.image
                  : "https://via.placeholder.com/210x295/e8ffe9/666666/?text=HarryPotter"
              }
            />
            <h2>{props.characterData.name}</h2>
            <p>{props.characterData.species}</p>
          </article>
          </Link>
        
        </>

    )
   

}

export default CardList;