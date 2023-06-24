import { useRef, useEffect, useState } from 'react';
import usePlayer from '../../hooks/usePlayer';
import { XMarkIcon, ShareIcon, SpeakerWaveIcon } from '@heroicons/react/20/solid';
import Control from './Control';
import { fmtMSS } from '../../utils/helpers/time.helpers';
import './styles/BottomPlayer.css';
import './styles/inputs.css';

const BottomPlayer = () => {
  const {
    state: { currentSong, songList, playing },
    onEndSong,
    closePlayer,
  } = usePlayer();

  const [volume, setVolume] = useState(0.2);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audio = useRef(null);

  useEffect(() => {
    audio.current.volume = volume;

    if (playing) {
      toggleAudio();
    }
  }, [currentSong]);

  const onChangeVolume = (e) => {
    const newVolume = e.target.value / 100;

    setVolume(newVolume);
    audio.current.volume = newVolume;
  };

  const toggleAudio = () => {
    if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  };

  const onChangeProgress = (e) => {
    const compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  const onTimeUpdate = (e) => setCurrentTime(e.target.currentTime);

  const onCanPlay = (e) => {
    setDur(e.target.duration);
  };

  const onEnded = () => {
    onEndSong();
    toggleAudio();
  };

  return (
    <div className="media-player">
      <audio
        ref={audio}
        onTimeUpdate={onTimeUpdate}
        onCanPlayThrough={onCanPlay}
        onEnded={onEnded}
        preload="metadata"
        itemType="audio/mp3"
        src={songList[currentSong].link}
      />
      <div className="media-player__left">
        <button
          className="media-player__button animation-main block"
          onClick={closePlayer}
        >
          <XMarkIcon />
        </button>
        <div className="media-player__song-info">
          <img
            className="media-player__song-cover"
            src={songList[currentSong].coverImg}
            alt="mini-cover"
          />
          <div className="media-player__song-text">
            <h4 className="truncate">{songList[currentSong].title}</h4>
            <p className="opacity-70">{songList[currentSong].artistName}</p>
          </div>
        </div>
      </div>
      <div className="media-player__center">
        <Control toggleAudio={toggleAudio} />
        <div className="media-player__progress">
          <span className="media-player__time">{fmtMSS(currentTime)}</span>
          <input
            id="prgbar"
            type="range"
            value={dur ? (currentTime * 100) / dur : 0}
            onChange={onChangeProgress}
          />
          <span className="media-player__time">{fmtMSS(dur)}</span>
        </div>
      </div>
      <div className="media-player__right">
        <button
          className="media-player__button animation-main"
          type="button"
        >
          <ShareIcon />
        </button>
        <div className="media-player__volume">
          <SpeakerWaveIcon className="h-7 w-7 opacity-70" />
          <input
            type="range"
            id="volume-range"
            value={Math.round(volume * 100)}
            max={100}
            onChange={onChangeVolume}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
