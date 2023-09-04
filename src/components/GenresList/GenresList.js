import { Link } from 'react-router-dom';
import './GenresList.css';

const GenresList = (props) => {
  const { errorMessage, loading, list } = props;

  const renderItems = (arr) => {
    const items = arr.map(({ image, name, id }) => {
      if (name === 'All') return null;

      return (
        <GenreCard
          key={id}
          genreInfo={{ image, name, id }}
        />
      );
    });

    return <ul className="genre-card__list mt-5">{items}</ul>;
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
  const { image, name, id } = genreInfo;

  return (
    <li className="genre-card">
      <Link to={`/genres/${id}`}>
        <img
          className="genre-card__img"
          src={image}
          alt={name}
        />
        <h4 className="title-main genre-card__title">{name}</h4>
      </Link>
    </li>
  );
};

export default GenresList;
