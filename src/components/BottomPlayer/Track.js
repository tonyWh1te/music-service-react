import { Link } from 'react-router-dom';

const Track = ({ track }) => {
  const { coverImg, title, artistName, artistId } = track;

  return (
    <div className='media-player__song-info'>
      <img
        className='media-player__song-cover'
        src={coverImg}
        alt='mini-cover'
      />
      <div className='media-player__song-text'>
        <h4 className='truncate'>{title}</h4>
        <Link
          to={`/artist/${artistId}`}
          className='media-player__artist-link'
        >
          {artistName}
        </Link>
      </div>
    </div>
  );
};

export default Track;
