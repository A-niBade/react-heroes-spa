import { Link } from "react-router-dom";

import "./styles/HeroCard.css";

const CharacterByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `../assets/heroes/${id}.jpg`;

  return (
    <Link
      to={`/hero/${id}`}
      className="hero-pic animate__animated animate__fadeIn"
    >
      <img src={heroImageUrl} className="img img-responsive" alt={superhero} />
      <div className="hero-pic__name">{superhero}</div>
      <div className="hero-pic__alter">{alter_ego}</div>
      <div className="hero-pic__profile">
        <div className="hero-pic__profile">
          <div className="row">
            <div className="col-ms-4">
              <h4>{publisher}</h4>
              <p className="fw-bold">
                First appaerance: <br />
                {first_appearance}
              </p>
              {alter_ego !== characters && <p>{characters}</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
