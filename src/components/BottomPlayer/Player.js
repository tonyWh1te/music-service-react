import { useRef, useEffect } from 'react';

const Player = ({
  activeSong,
  onTimeUpdate,
  onLoadedData,
  onEnded,
  isPlaying,
  volume,
  seekTime,
}) => {
  const audio = useRef(null);

  const { songFile } = activeSong;

  if (audio.current) {
    if (isPlaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }

  useEffect(() => {
    audio.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    audio.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      ref={audio}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
      onEnded={onEnded}
      preload='metadata'
      itemType='audio/mp3'
      src={songFile}
    />
  );
};

export default Player;
