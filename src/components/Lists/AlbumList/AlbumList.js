import AlbumCard from '../../AlbumCard/AlbumCard';

const AlbumList = ({ errorMessage, spinner, list, gridComposition }) => {
  const classes = gridComposition === 'table' ? 'album-list' : 'songs-list';

  const renderItems = (albumList) => {
    return (albumList ?? []).map(({ id, coverImg, title, artistName, releaseDate }) => (
      <AlbumCard
        key={id}
        albumInfo={{ id, coverImg, title, artistName, releaseDate }}
      />
    ));
  };

  const items = renderItems(list);

  return (
    <>
      {errorMessage}
      {spinner}
      <ul className={classes}>{items}</ul>
    </>
  );
};

export default AlbumList;
