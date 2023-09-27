import { useEffect } from 'react';
import { usePlayer } from '../../../hooks/hooks';
import './SongList.css';

const SongList = ({ errorMessage, spinner, list }) => {
  const { setSongList, setCurrentSong } = usePlayer();

  useEffect(() => {
    if (list !== null) {
      setSongList(list);
    }
  }, [list]);

  const renderItems = (songList) => {
    return (songList ?? []).map(({ id, coverImg, title, artistName }, i) => (
      <SongCard
        key={id}
        songInfo={{ coverImg, title, artistName }}
        onClick={() => {
          setCurrentSong(i);
        }}
      />
    ));
  };

  const items = renderItems(list);

  return (
    <>
      {errorMessage}
      {spinner}
      <ul className="songs-list">{items}</ul>
    </>
  );
};

const SongCard = ({ songInfo, onClick }) => {
  const { coverImg, title, artistName } = songInfo;

  return (
    <li
      className="card-song animation-card"
      onClick={onClick}
    >
      <img
        className="card-song__cover"
        src={coverImg}
        alt={title}
      />
      <h4 className="card-title">{title}</h4>
      <p className="card-info">{artistName}</p>
    </li>
  );
};

export default SongList;
