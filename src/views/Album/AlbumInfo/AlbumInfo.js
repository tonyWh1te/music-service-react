import useMediaQuery from '../../../hooks/useMediaQuery';
import { Link } from 'react-router-dom';
import { ShareIcon, PlusSmallIcon, PlayIcon } from '@heroicons/react/20/solid';
import { formatSeconds } from '../../../utils/helpers/time.helpers';
import './AlbumInfo.css';

const AlbumInfo = ({ album, setCurrentSong }) => {
  const { coverImg, title, artistName, total, duration, date } = album;

  const media = useMediaQuery('lg');

  const buttons = [
    {
      label: <PlusSmallIcon className="album__icon fill-black" />,
      classes: 'button__primary p-1',
      onClick: () => {},
    },
    {
      label: media ? 'play' : <PlayIcon className="album__icon fill-black" />,
      classes: 'button__primary album__btn',
      onClick: () => setCurrentSong(0),
    },
    {
      label: media ? 'share' : <ShareIcon className="album__icon" />,
      classes: 'button__secondary album__btn',
      onClick: () => {},
    },
  ];

  return (
    <div className="album__info mb-7 md:mb-14">
      <div className="album__info-content">
        <div className="album__pic-wrap mb-4">
          <img
            className="album__pic"
            src={coverImg}
            alt="album-pic"
          />
        </div>
        <div className="album__info-block">
          <p className="album__info-text mb-2">Album</p>
          <h2 className="album__info-title">{title}</h2>
          <Link
            to={'/artist'}
            className="album__artist-link"
          >
            {artistName}
          </Link>
          <ul className="album__additional-list">
            <li className="album__additional-item">
              <span className="album__additional-text">{total} songs</span>
            </li>
            <li className="album__additional-item">
              <span className="album__additional-text">{formatSeconds(duration)}</span>
            </li>
            <li className="album__additional-item">
              <span className="album__additional-text">{date}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="album__info-btns">
        {buttons.map(({ label, classes, onClick }, i) => (
          <button
            key={i}
            className={`${classes}`}
            onClick={onClick}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlbumInfo;
