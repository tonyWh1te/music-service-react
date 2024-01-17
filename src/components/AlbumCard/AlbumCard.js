import { Link } from 'react-router-dom';
import './AlbumCard.css';

const AlbumCard = ({ albumInfo }) => {
  const { id, coverImg, title, artistName, releaseDate } = albumInfo;

  return (
    <li className="card-album animation-card">
      <Link to={`/album/${id}`}>
        <img
          className="card-album__cover"
          src={coverImg}
          alt={title}
        />
        <h4 className="card-title">{title}</h4>
        {artistName && <p className="card-info">{artistName}</p>}
        {releaseDate && <p className="card-info">Released: {releaseDate}</p>}
      </Link>
    </li>
  );
};

export default AlbumCard;
