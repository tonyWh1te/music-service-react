import { Link } from 'react-router-dom';
import './ArtistCard.css';

const ArtistCard = ({ artistInfo }) => {
  const { image, name, id } = artistInfo;

  return (
    <li className="card-artist animation-card">
      <Link to={`/artist/${id}`}>
        <img
          className="card-artist__img"
          src={image}
          alt={name}
        />
        <h4 className="card-title">{name}</h4>
      </Link>
    </li>
  );
};

export default ArtistCard;
