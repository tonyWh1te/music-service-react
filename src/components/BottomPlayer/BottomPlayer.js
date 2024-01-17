import { useEffect, useState } from 'react';
import { usePlayer } from '../../hooks';
import { XMarkIcon, ShareIcon } from '@heroicons/react/20/solid';
import Control from './Control';
import Track from './Track';
import VolumeBar from './VolumeBar';
import Seekbar from './Seekbar';
import Player from './Player';
import SocialShareWidget from '../SocialShareWidget/SocialShareWidget';
import Popover from '../Popover/Popover';
import './styles/BottomPlayer.css';
import './styles/inputs.css';

const BottomPlayer = () => {
  const {
    state: { currentSongIndex, songList, activeSong, playing },
    onEndSong,
    closePlayer,
    playPause,
  } = usePlayer();

  const [volume, setVolume] = useState(0.2);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekTime, setSeekTime] = useState(0);

  useEffect(() => {
    if (songList.length) {
      playPause(true);
    }
  }, [currentSongIndex]);

  const onChangeVolume = (e) => {
    const newVolume = e.target.value / 100;

    setVolume(newVolume);
  };

  const toggleAudio = () => {
    playPause(!playing);
  };

  const onInputProgress = (e) => {
    const compute = (e.target.value * dur) / 100;
    setSeekTime(compute);
  };

  const onTimeUpdate = (e) => setCurrentTime(e.target.currentTime);

  const onLoadedData = (e) => {
    setDur(e.target.duration);
  };

  const onEnded = () => {
    playPause(false);
    onEndSong();
  };

  return (
    <div className="media-player">
      <div className="media-player__inner">
        <Player
          activeSong={activeSong}
          volume={volume}
          seekTime={seekTime}
          isPlaying={playing}
          onTimeUpdate={onTimeUpdate}
          onLoadedData={onLoadedData}
          onEnded={onEnded}
        />
        <div className="media-player__left">
          <button
            className="media-player__button animation-main block"
            onClick={closePlayer}
          >
            <XMarkIcon />
          </button>
          <Track track={activeSong} />
        </div>
        <div className="media-player__center">
          <Control
            toggleAudio={toggleAudio}
            track={activeSong}
          />
          <Seekbar
            currentTime={currentTime}
            dur={dur}
            onInputProgress={onInputProgress}
          />
        </div>
        <div className="media-player__right">
          <Popover preferredPosition="top-center">
            <Popover.Trigger>
              <button className="media-player__button animation-main">
                <ShareIcon />
              </button>
            </Popover.Trigger>
            <Popover.Content>
              <SocialShareWidget
                url={activeSong.link}
                title={'Check out this awesome song!'}
              />
            </Popover.Content>
          </Popover>
          <VolumeBar
            volume={volume}
            onChangeVolume={onChangeVolume}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
