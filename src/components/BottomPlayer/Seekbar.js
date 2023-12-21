import { fmtMSS } from '../../utils/helpers/time.helpers';

const Seekbar = ({ currentTime, dur, onInputProgress }) => {
  return (
    <div className="media-player__progress">
      <span className="media-player__time">{fmtMSS(currentTime)}</span>
      <input
        id="prgbar"
        type="range"
        value={dur ? (currentTime * 100) / dur : 0}
        onInput={onInputProgress}
      />
      <span className="media-player__time">{fmtMSS(dur)}</span>
    </div>
  );
};

export default Seekbar;
