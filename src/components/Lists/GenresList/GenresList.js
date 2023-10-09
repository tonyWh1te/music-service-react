import { Link } from 'react-router-dom';
import './GenresList.css';

const GenresList = ({ errorMessage, spinner, list }) => {
  const renderItems = (genresList) => {
    return (genresList ?? []).map(({ image, name, id }) => {
      if (id === 0) return null;

      return (
        <GenreCard
          key={id}
          genreInfo={{ image, name, id }}
        />
      );
    });
  };

  const items = renderItems(list);

  return (
    <>
      {errorMessage}
      {spinner}
      <ul className="genre-card__list mt-5">{items}</ul>
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
