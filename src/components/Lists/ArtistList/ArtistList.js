import ArtistCard from '../../ArtistCard/ArtistCard';
import './ArtistList.css';

const ArtistList = ({ errorMessage, spinner, list, gridComposition }) => {
  const classes =
    gridComposition === 'table' ? 'artists-table' : 'artists-list';

  const renderItems = (artistList) => {
    return (artistList ?? []).map(({ id, image, name }) => (
      <ArtistCard
        key={id}
        artistInfo={{ image, name, id }}
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

export default ArtistList;
