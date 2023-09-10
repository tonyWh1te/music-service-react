import { fmtMSS } from '../../utils/helpers/time.helpers';
import { HeartIcon } from '@heroicons/react/20/solid';
import './TrackTable.css';

const TrackTable = (props) => {
  const { tracksData, tableHeaders, currentSong, setCurrentSong } = props;

  const onClickSong = (i) => {
    setCurrentSong(i);
  };

  return (
    <table className="table-fixed w-full">
      <thead>
        <tr>
          {tableHeaders.map(({ content, classes }, i) => (
            <th
              key={i}
              className={`table-songs__head ${classes}`}
            >
              {content}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tracksData.map(({ id, title, artist, album, duration }, i) => (
          <tr
            className={`table-songs__row ${currentSong === i ? 'table-songs__row--active' : ''}`}
            key={id}
          >
            <td className="table-songs__data table-songs__text">
              <span onClick={() => onClickSong(i)}>{title}</span>
            </td>
            <td className="table-songs__data table-songs__text">{artist.name}</td>
            <td className="table-songs__data table-songs__text hidden md:table-cell">{album.title}</td>
            <td className="table-songs__data table-songs__text">{fmtMSS(duration)}</td>
            <td className="table-songs__data">
              <button>
                <HeartIcon className="w-5 h-5 hover:fill-main-green animation-main" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrackTable;
