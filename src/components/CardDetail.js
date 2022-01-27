
import { Link } from 'react-router-dom';

const CardDetail = (props) => {
    return (
        <>
        <Link to={'/'} style={{ textDecoration: "none" }}>
                            <button>Volver</button>
                        </Link>
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
        </>
    )
}

export default CardDetail;