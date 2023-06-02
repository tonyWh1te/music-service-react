import './SongList.css';

const SongList = (props) => {
  const { errorMessage, loading, list } = props;

  const renderItems = (arr) => {
    const items = arr.map(({ id, coverImg, title, artistName }) => (
      <SongCard
        key={id}
        songInfo={{ coverImg, title, artistName }}
      />
    ));

    return <ul className="songs-list">{items}</ul>;
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

const SongCard = ({ songInfo }) => {
  const { coverImg, title, artistName } = songInfo;

  return (
    <li className="card-song">
      <img
        className="card-song__cover"
        src={coverImg}
        alt={title}
      />
      <h4 className="card-title">{title}</h4>
      <p className="card-song__singer">{artistName}</p>
    </li>
  );
};

export default SongList;
