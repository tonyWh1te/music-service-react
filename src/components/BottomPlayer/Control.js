import clsx from 'clsx';
import { usePlayer, useFavorites } from '../../hooks';
import {
  PlayCircleIcon,
  PauseCircleIcon,
  ForwardIcon,
  BackwardIcon,
  ArrowPathIcon,
  HeartIcon,
} from '@heroicons/react/20/solid';

const Control = ({ toggleAudio, track }) => {
  const {
    state: { repeat, playing },
    toggleRepeat,
    prevSong,
    nextSong,
  } = usePlayer();

  const {
    onAddToFavClick,
    context: { isFavorited },
  } = useFavorites();

  const { id, type } = track;

  const isFav = isFavorited(id, type);

  const heartIconClasses = clsx({ 'fill-main-green': isFav });
  const arrowClasses = clsx({ 'media-player__button--active': repeat });

  const onPlayPauseClick = () => {
    toggleAudio();
  };

  const onAddClick = (item) => () => {
    onAddToFavClick(item, isFav);
  };

  return (
    <div className="media-player__buttons">
      <button className="media-player__button animation-main block">
        <HeartIcon
          className={heartIconClasses}
          onClick={onAddClick(track)}
        />
      </button>
      <button
        className="media-player__button animation-main"
        onClick={prevSong}
      >
        <BackwardIcon />
      </button>
      <button
        className="media-player__button animation-main block w-8 h-8"
        onClick={onPlayPauseClick}
      >
        {playing ? <PauseCircleIcon /> : <PlayCircleIcon />}
      </button>
      <button
        className="media-player__button animation-main"
        onClick={nextSong}
      >
        <ForwardIcon />
      </button>
      <button
        className="media-player__button animation-main"
        onClick={toggleRepeat}
      >
        <ArrowPathIcon className={arrowClasses} />
      </button>
    </div>
  );
};

export default Control;
