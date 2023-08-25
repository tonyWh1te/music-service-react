const AlbumList = (props) => {
  const { errorMessage, loading, list } = props;

  const renderItems = (array) => {
    const items = array.map(({ id, coverImg, title, artistName }) => (
      <AlbumCard
        key={id}
        albumInfo={{ id, coverImg, title, artistName }}
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

  return;
};

const AlbumCard = ({ albumInfo }) => {
  const { id, coverImg, title, artistName } = albumInfo;

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

export default AlbumList;
