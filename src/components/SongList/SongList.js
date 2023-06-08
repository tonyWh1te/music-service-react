import { useEffect } from 'react';
import usePlayer from '../../hooks/usePlayer';
import './SongList.css';

const SongList = (props) => {
  const { setSongList, setCurrentSong } = usePlayer();
  const { errorMessage, loading, list } = props;

  useEffect(() => setSongList(list), [list]);

  const renderItems = (arr) => {
    const items = arr.map(({ id, coverImg, title, artistName }) => (
      <SongCard
        key={id}
        songInfo={{ coverImg, title, artistName }}
        onClick={() => {
          setCurrentSong(id - 1);
        }}
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

const SongCard = ({ songInfo, onClick }) => {
  const { coverImg, title, artistName } = songInfo;

  return (
    <li
      className="card-song"
      onClick={onClick}
    >
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
