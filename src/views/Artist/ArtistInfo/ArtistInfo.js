import { Fragment } from 'react';
import { useMediaQuery } from '../../../hooks';
import { ShareIcon, HeartIcon } from '@heroicons/react/20/solid';
import SocialShareWidget from '../../../components/SocialShareWidget/SocialShareWidget';
import Popover from '../../../components/Popover/Popover';
import Button from '../../../components/Button/Button';
import ButtonGroup from '../../../components/ButtonGroup/ButtonGroup';
import { BUTTON_IDS } from '../../../utils/constants';
import { formatNumberWithCommas } from '../../../utils/helpers/nums.helper';
import './ArtistInfo.css';

const ArtistInfo = ({ artist }) => {
  const { image, name, shareLink, fanBase } = artist;

  const media = useMediaQuery('lg');

  const buttons = [
    {
      id: BUTTON_IDS.SHARE,
      label: media ? 'share' : <ShareIcon className="icon" />,
      classes: 'artist__btn button__secondary',
      onClick: () => {},
    },
    {
      id: BUTTON_IDS.FOLLOW,
      label: media ? 'follow' : <HeartIcon className="icon fill-black" />,
      classes: 'artist__btn button__primary',
      onClick: () => {},
    },
  ];

  const renderItems = (array) => {
    const items = array.map(({ id, label, classes, onClick }) => {
      return id === 'share' ? (
        <Fragment key={id}>
          <Popover preferredPosition="top-center">
            <Popover.Trigger>
              <Button className={classes}>{label}</Button>
            </Popover.Trigger>
            <Popover.Content>
              <SocialShareWidget
                url={shareLink}
                title={'Check out this awesome album!'}
              />
            </Popover.Content>
          </Popover>
        </Fragment>
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
    <div className="artist__info artist__block">
      <div className="container-wrapper md:mx-0">
        <div className="artist__info-inner">
          <div className="artist__info-content">
            <div className="info-pic__wrap artist-pic__wrap">
              <img
                src={image}
                alt={name}
                className="info-pic__img"
              />
            </div>
            <div className="artist__info-block">
              <p className="artist__info-text">Artist</p>
              <h2 className="artist__info-title info-title">{name}</h2>
              <p className="artist__info-followers">
                Folowers <span id="followers-num">{formatNumberWithCommas(fanBase)}</span>
              </p>
              <ButtonGroup className="artist__btn-group">{items}</ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
