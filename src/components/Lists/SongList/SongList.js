import { usePlayer } from '../../../hooks';
import './SongList.css';

const SongList = ({ errorMessage, spinner, list }) => {
  const {
    setCurrentSong,
    setSongList,
    state: { activeSong },
  } = usePlayer();

  const renderItems = (songsData) => {
    const onSongClick = (songsData, i, songId) => {
      return () => {
        if (activeSong.id !== songId) {
          setSongList(songsData);
          setCurrentSong(i);
        }
      };
    };

    return (songsData ?? []).map((song, i) => (
      <SongCard
        key={song.id}
        songInfo={song}
        onClick={onSongClick(songsData, i, song.id)}
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
