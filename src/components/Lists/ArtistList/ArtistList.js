import { Link } from 'react-router-dom';
import './ArtistList.css';

const ArtistList = (props) => {
  const { errorMessage, loading, list, gridComposition } = props;

  const renderItems = (arr) => {
    const classes = gridComposition === 'table' ? 'artists-table' : 'artists-list';

    const items = arr.map(({ id, image, name }) => (
      <ArtistCard
        key={id}
        artistInfo={{ image, name, id }}
      />
    ));

    return <ul className={classes}>{items}</ul>;
  };

  const items = renderItems(list);

  const content = !errorMessage && !loading ? items : null;

  return (
    <>
      {errorMessage}
      {loading}
      {content}
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
