import React from 'react';
import { useMediaQuery } from '../../../hooks';
import { Link } from 'react-router-dom';
import { ShareIcon, PlusSmallIcon, PlayIcon } from '@heroicons/react/20/solid';
import Popover from '../../../components/Popover/Popover';
import SocialShareWidget from '../../../components/SocialShareWidget/SocialShareWidget';
import Button from '../../../components/Button/Button';
import { formatSeconds } from '../../../utils/helpers/time.helpers';
import { BUTTON_IDS } from '../../../utils/constants';
import './AlbumInfo.css';

const AlbumInfo = ({ album, setCurrentSong }) => {
  const { link } = album;

  const media = useMediaQuery('lg');

  const buttons = [
    {
      id: BUTTON_IDS.ADD,
      label: <PlusSmallIcon className="album__icon fill-black" />,
      classes: 'button__primary p-1',
      onClick: () => {},
    },
    {
      id: BUTTON_IDS.PLAY,
      label: media ? 'play' : <PlayIcon className="album__icon fill-black" />,
      classes: 'button__primary album__btn',
      onClick: () => setCurrentSong(0),
    },
    {
      id: BUTTON_IDS.SHARE,
      label: media ? 'share' : <ShareIcon className="album__icon" />,
      classes: 'button__secondary album__btn',
      onClick: () => {},
    },
  ];

  const renderItems = (array) => {
    const items = array.map(({ id, label, classes, onClick }) => {
      return id === 'share' ? (
        <React.Fragment key={id}>
          <Popover preferredPosition="top-center">
            <Popover.Trigger>
              <Button className={classes}>{label}</Button>
            </Popover.Trigger>
            <Popover.Content>
              <SocialShareWidget
                url={link}
                title={'Check out this awesome album!'}
              />
            </Popover.Content>
          </Popover>
        </React.Fragment>
      ) : (
        <Button
          key={id}
          className={classes}
          onClick={onClick}
        >
          {label}
        </Button>
      );
    });

    return items;
  };

  const items = renderItems(buttons);

  return (
    <View
      album={album}
      items={items}
    />
  );
};

const View = ({ album, items }) => {
  const { coverImg, title, artistName, artistId, total, duration, date } = album;

  return (
    <div className="album__info mb-7 md:mb-14">
      <div className="album__info-content">
        <div className="album__pic-wrap mb-4">
          <img
            className="album__pic"
            src={coverImg}
            alt="album-pic"
          />
        </div>
        <div className="album__info-block">
          <p className="album__info-text mb-2">Album</p>
          <h2 className="album__info-title">{title}</h2>
          <Link
            to={`/artist/${artistId}`}
            className="album__artist-link"
          >
            {artistName}
          </Link>
          <ul className="album__additional-list">
            <li className="album__additional-item">
              <span className="album__additional-text">{total} songs</span>
            </li>
            <li className="album__additional-item">
              <span className="album__additional-text">{formatSeconds(duration)}</span>
            </li>
            <li className="album__additional-item">
              <span className="album__additional-text">{date}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="album__info-btns">{items}</div>
    </div>
  );
};

export default AlbumInfo;
