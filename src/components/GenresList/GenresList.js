import './GenresList.css';

const GenresList = (props) => {
  const { errorMessage, loading, list } = props;

  const renderItems = (arr) => {
    const items = arr.map(({ image, genre }, i) => (
      <GenreCard
        key={i}
        genreInfo={{ image, genre }}
      />
    ));

    return <ul className="genre-card__list">{items}</ul>;
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

const GenreCard = ({ genreInfo }) => {
  const { image, genre } = genreInfo;

  return (
    <li className="genre-card">
      <img
        className="genre-card__img"
        src={image}
        alt={genre}
      />
      <h4 className="title-main genre-card__title">{genre}</h4>
    </li>
  );
};

export default GenresList;
