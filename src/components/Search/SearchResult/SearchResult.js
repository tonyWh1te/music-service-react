import './SearchResult.css';

const SearchResult = ({ info }) => {
  const { title, coverImg, artistName, type } = info;

  const content = {
    album: (
      <>
        <p className="results__item-title">{title}</p>
        <p className="card-info results__item-artist-info">{artistName}</p>
      </>
    ),
    artist: (
      <>
        <p className="results__item-title">{artistName}</p>
      </>
    ),
  };

  return (
    <li className="results__item">
      <img
        className="results__item-img"
        src={coverImg}
        alt="img"
      />
      <div className="results__item-text">{content[type]}</div>
    </li>
  );
};

export default SearchResult;
