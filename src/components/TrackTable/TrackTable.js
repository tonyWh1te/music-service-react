import clsx from 'clsx';
import { usePlayer, useFavorites } from '../../hooks';
import { fmtMSS } from '../../utils/helpers/time.helpers';
import { HeartIcon } from '@heroicons/react/20/solid';
import './TrackTable.css';

const TrackTable = (props) => {
  const { tracksData, tableHeaders } = props;

  const {
    setCurrentSong,
    setSongList,
    state: { activeSong },
  } = usePlayer();

  const {
    onAddToFavClick,
    context: { isFavorited },
  } = useFavorites();

  const onClickSong = (i, tracksData, songId) => {
    return () => {
      if (activeSong !== songId) {
        setSongList(tracksData);
        setCurrentSong(i);
      }
    };
  };

  const onAddClick = (item, isFav) => () => {
    onAddToFavClick(item, isFav);
  };

  return (
    <table className="table-songs">
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
        {tracksData.map((track, i) => {
          const { id, title, artistName, albumTitle, duration, type } = track;

          const isFav = isFavorited(id, type);

          const heartClasses = clsx('w-5', 'h-5', 'animation-main', {
            'fill-main-green': isFav,
            'hover:fill-main-green': !isFav,
          });

          const rowClasses = clsx({
            'table-songs__row': true,
            'table-songs__row--active': activeSong.id === id,
          });

          return (
            <tr
              className={rowClasses}
              key={id}
            >
              <td className="table-songs__data table-songs__text">
                <span onClick={onClickSong(i, tracksData, id)}>{title}</span>
              </td>
              <td className="table-songs__data table-songs__text">
                {artistName}
              </td>
              <td className="table-songs__data table-songs__text hidden md:table-cell">
                {albumTitle}
              </td>
              <td className="table-songs__data table-songs__text">
                {fmtMSS(duration)}
              </td>
              <td className="table-songs__data">
                <button>
                  <HeartIcon
                    className={heartClasses}
                    onClick={onAddClick(track, isFav)}
                  />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TrackTable;
