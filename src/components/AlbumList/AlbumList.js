import './AlbumList.css';

const AlbumList = (props) => {
  const { errorMessage, loading, list, gridComposition } = props;

  const renderItems = (array) => {
    const items = array.map(({ id, coverImg, title, artistName }) => (
      <AlbumCard
        key={id}
        albumInfo={{ id, coverImg, title, artistName }}
      />
    ));

    return <ul className={`${gridComposition === 'table' ? 'album-list' : 'songs-list'}`}>{items}</ul>;
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
      <img
        className="card-album__cover"
        src={coverImg}
        alt={title}
      />
      <h4 className="card-title">{title}</h4>
      <p className="card-album__singer">{artistName}</p>
    </li>
  );
};

export default AlbumList;
