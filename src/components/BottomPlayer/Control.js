import usePlayer from '../../hooks/usePlayer';
import { PlayCircleIcon, PauseCircleIcon, ForwardIcon, BackwardIcon, ArrowPathIcon, HeartIcon } from '@heroicons/react/20/solid';

const Control = ({ toggleAudio }) => {
  const {
    state: { repeat, playing },
    togglePlaying,
    toggleRepeat,
    prevSong,
    nextSong,
  } = usePlayer();

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
        onClick={() => {
          togglePlaying();
          toggleAudio();
        }}
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
        <ArrowPathIcon className={` ${repeat ? 'media-player__button--active' : ''}`} />
      </button>
    </div>
  );
};

export default Control;
