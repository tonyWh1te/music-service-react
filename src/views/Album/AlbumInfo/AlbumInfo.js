import React from 'react';
import { useMediaQuery } from '../../../hooks';
import { Link } from 'react-router-dom';
import { ShareIcon, PlusSmallIcon, PlayIcon } from '@heroicons/react/20/solid';
import Popover from '../../../components/Popover/Popover';
import SocialShareWidget from '../../../components/SocialShareWidget/SocialShareWidget';
import Button from '../../../components/Button/Button';
import ButtonGroup from '../../../components/ButtonGroup/ButtonGroup';
import { formatSeconds } from '../../../utils/helpers/time.helpers';
import { BUTTON_IDS } from '../../../utils/constants';
import './AlbumInfo.css';

const AlbumInfo = ({ album, setCurrentSong }) => {
  const { link } = album;

  const media = useMediaQuery('lg');

  const buttons = [
    {
      id: BUTTON_IDS.ADD,
      label: <PlusSmallIcon className="icon fill-black" />,
      classes: 'button__primary p-1',
      onClick: () => {},
    },
    {
      id: BUTTON_IDS.PLAY,
      label: media ? 'play' : <PlayIcon className="icon fill-black" />,
      classes: 'button__primary album__btn',
      onClick: () => setCurrentSong(0),
    },
    {
      id: BUTTON_IDS.SHARE,
      label: media ? 'share' : <ShareIcon className="icon" />,
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
    <div className="album__info album__info-item">
      <div className="container-wrapper md:mx-0">
        <div className="album__info-inner">
          <div className="album__info-left">
            <div className="info-pic__wrap album__pic-wrap">
              <img
                className="info-pic__img"
                src={coverImg}
                alt="album-pic"
              />
            </div>
            <div className="album__info-block">
              <p className="album__info-text">Album</p>
              <h2 className="album__info-title info-title">{title}</h2>
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
          <div className="album__info-right">
            <ButtonGroup className="album__btn-group">{items}</ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
