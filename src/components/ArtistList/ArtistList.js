import './ArtistList.css';

const ArtistList = (props) => {
  const { errorMessage, loading, list } = props;

  const renderItems = (arr) => {
    const items = arr.map(({ id, image, name }) => (
      <ArtistCard
        key={id}
        artistInfo={{ image, name }}
      />
    ));

    return <ul className="artists-list">{items}</ul>;
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
  const { image, name } = artistInfo;

  return (
    <li className="card-artist">
      <img
        className="card-artist__img"
        src={image}
        alt={name}
      />
      <h4 className="card-title">{name}</h4>
    </li>
  );
};

export default ArtistList;
