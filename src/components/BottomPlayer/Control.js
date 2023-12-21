import clsx from 'clsx';
import { usePlayer } from '../../hooks';
import {
  PlayCircleIcon,
  PauseCircleIcon,
  ForwardIcon,
  BackwardIcon,
  ArrowPathIcon,
  HeartIcon,
} from '@heroicons/react/20/solid';

const Control = ({ toggleAudio }) => {
  const {
    state: { repeat, playing },
    toggleRepeat,
    prevSong,
    nextSong,
  } = usePlayer();

  const arrowClasses = clsx({ 'media-player__button--active': repeat });

  const onPlayPauseClick = () => {
    toggleAudio();
  };

  return (
    <div className="media-player__buttons">
      <button className="media-player__button animation-main block">
        <HeartIcon className="" />
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
