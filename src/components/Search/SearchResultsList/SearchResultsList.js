import { Link } from 'react-router-dom';
import SearchResult from '../SearchResult/SearchResult';

// Сделать предзагрузку в виде скелетона

const SearchResultsList = ({ errorMessage, list, onCloseRes }) => {
  const renderItems = (list) => {
    if (!list) return;

    if (list.length === 0) {
      return (
        <span className="results__msg results__msg--not-found">Not found</span>
      );
    }

    return list.map(({ id, title, coverImg, type, artistName }) => (
      <Link
        key={id}
        to={`/${type}/${id}`}
        onClick={onCloseRes}
      >
        <SearchResult info={{ title, coverImg, artistName, type }} />
      </Link>
    ));
  };

  const items = renderItems(list);
  const errorSearchMessage = errorMessage && (
    <span className="results__msg results__msg--error">
      Something went wrong
    </span>
  );

  return (
    <>
      {errorSearchMessage}
      <ul className="results__list">{items}</ul>
    </>
  );
};

export default SearchResultsList;
