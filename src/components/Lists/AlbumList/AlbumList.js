import { Link } from 'react-router-dom';
import './AlbumList.css';

const AlbumList = (props) => {
  const { errorMessage, loading, list, gridComposition } = props;

  const renderItems = (array) => {
    const classes = gridComposition === 'table' ? 'album-list' : 'songs-list';

    const items = array.map(({ id, coverImg, title, artistName }) => (
      <AlbumCard
        key={id}
        albumInfo={{ id, coverImg, title, artistName }}
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

const AlbumCard = ({ albumInfo }) => {
  const { id, coverImg, title, artistName } = albumInfo;

  return (
    <li className="card-album animation-card">
      <Link to={`/album/${id}`}>
        <img
          className="card-album__cover"
          src={coverImg}
          alt={title}
        />
        <h4 className="card-title">{title}</h4>
        <p className="card-album__singer">{artistName}</p>
      </Link>
    </li>
  );
};

export default AlbumList;
