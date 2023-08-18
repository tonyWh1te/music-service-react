import './GenresList.css';

const GenresList = (props) => {
  const { errorMessage, loading, list } = props;

  const renderItems = (arr) => {
    const items = arr.map(({ genrePic, name }, i) => {
      if (name === 'All') return null;

      return (
        <GenreCard
          key={i}
          genreInfo={{ genrePic, name }}
        />
      );
    });

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
  const { genrePic, name } = genreInfo;

  return (
    <li className="genre-card">
      <img
        className="genre-card__img"
        src={genrePic}
        alt={name}
      />
      <h4 className="title-main genre-card__title">{name}</h4>
    </li>
  );
};

export default GenresList;
