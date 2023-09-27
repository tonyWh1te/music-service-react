import { Link } from 'react-router-dom';
import './ArtistList.css';

const ArtistList = ({ errorMessage, spinner, list, gridComposition }) => {
  const classes = gridComposition === 'table' ? 'artists-table' : 'artists-list';

  const renderItems = (artistList) => {
    return (artistList ?? []).map(({ id, image, name }) => (
      <ArtistCard
        key={id}
        artistInfo={{ image, name, id }}
      />
    ));
  };

  const items = renderItems(list);

  return (
    <>
      {errorMessage}
      {spinner}
      <ul className={classes}>{items}</ul>
    </>
  );
};

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

export default ArtistList;
