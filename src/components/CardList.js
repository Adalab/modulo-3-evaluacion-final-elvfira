import CardItem from "./CardItem";
import Mistake from "./Mistake";

const CardList = (props) => {
  const charactersElement = props.person.map((person) => {
    console.log(charactersElement);
    return (
      <li className="card" key={person.id}>
        <CardItem person={person} />
      </li>
    );
  });

  if (props.characters.length === 0) {
    return <Mistake />;
  } else {
    return (
      <section className="sectionCards">
        <ul className="cards">{charactersElement}</ul>
      </section>
    );
  }
}
export default CardList;
