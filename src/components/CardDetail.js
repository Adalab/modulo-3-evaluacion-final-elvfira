import { Link } from "react-router-dom";

function CardDetail(props) {
  const chooseSpecie = () => {
    if (props.person.specie === "human") {
      return "Humano";
    } else if (props.person.specie === "werewolf") {
      return "Hombre-lobo";
    } else if (props.person.specie === "half-giant") {
      return "Mitad gigante";
    } else if (props.person.specie === "Owl") {
      return "Búho";
    }
  };

  const getStatus = () => {
    return props.person.status === true ? "Vivo/a" : "Muerto/a";
  };

  const typeGender = () => {
    return props.person.gender === "female" ? "Mujer" : "Hombre";
  };

  return (
    <section className="result_details">
      <Link to="/"> Volver al inicio</Link>
      <h2>Detalle del mago o maga</h2>
      <img
        className="card__img"
        src={props.person.image}
        alt={`Foto de ${props.person.name}`}
        title={`Foto de ${props.person.name}`}
      />
      <h4 className="card_title">{props.person.name}</h4>
      <p className="card_status">
        {props.person.alive}
        {getStatus()}{" "}
      </p>
      <p className="card_specie">{chooseSpecie()}</p>
      <p className="card gender"></p> {typeGender()}
      <p className="card_house">{props.person.house}</p>
      <p className="card_alternate">{props.person.alternate}</p>
    </section>
  );
}
export default CardDetail;
