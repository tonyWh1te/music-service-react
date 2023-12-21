import { SpeakerWaveIcon } from '@heroicons/react/20/solid';

const VolumeBar = ({ volume, onChangeVolume }) => {
  return (
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
  );
};

export default VolumeBar;
