import { Link } from 'react-router-dom';
const CardItem = (props) => {
  return (
    <Link to={`/person/${props.person.id}`}>
      <img
        className="imageStyles"
        src={props.person.image}
        alt={`Foto de ${props.person.name}`}
        title={`Foto de ${props.person.name}`}
      />
      <div className="divTitleName">
        <h1 className="nameTitle">{props.person.name}</h1>
        <p className="specieTitle">{props.person.species}</p>
        <p className="houseTitle">{props.person.house}</p>
      </div>
    </Link>
  );
};

export default CardItem;
