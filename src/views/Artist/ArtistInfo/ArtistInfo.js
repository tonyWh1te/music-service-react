import { Fragment, useState } from 'react';
import { useMediaQuery, useFavorites } from '../../../hooks';
import clsx from 'clsx';
import { ShareIcon, HeartIcon } from '@heroicons/react/20/solid';
import SocialShareWidget from '../../../components/SocialShareWidget/SocialShareWidget';
import Popover from '../../../components/Popover/Popover';
import Button from '../../../components/Button/Button';
import ButtonGroup from '../../../components/ButtonGroup/ButtonGroup';
import { BUTTON_IDS } from '../../../utils/constants';
import { formatNumberWithCommas } from '../../../utils/helpers/nums.helper';
import './ArtistInfo.css';

const ArtistInfo = ({ artist }) => {
  const { shareLink, type, id } = artist;

  const [isFollowClicked, setIsFollowClicked] = useState(false);
  const media = useMediaQuery('lg');
  const { addToFavorites, deleteFromFavorites, isFavorited } = useFavorites();

  const isFav = isFavorited(id, type);

  const onCLickFollow = (item) => {
    if (isFav) {
      deleteFromFavorites(item);
    } else {
      setIsFollowClicked(true);
      addToFavorites(item);
    }
  };

  const followText = `${isFav ? 'un' : ''}follow`;
  const heartIconClassName = clsx('icon', {
    'fill-white': isFav,
    'fill-black': !isFav,
  });
  const feedbackClassName = clsx('artist__feedback', {
    'artist__feedback--press': isFav && isFollowClicked,
  });

  const buttons = [
    {
      id: BUTTON_IDS.SHARE,
      label: media ? 'share' : <ShareIcon className="icon" />,
      classes: 'artist__btn button__secondary',
      onClick: () => {},
    },
    {
      id: BUTTON_IDS.FOLLOW,
      label: (
        <>
          {media ? followText : <HeartIcon className={heartIconClassName} />}
          <span className={feedbackClassName}>
            <HeartIcon className="artist__feedback-icon" />
          </span>
        </>
      ),
      classes: 'artist__btn button__primary',
      onClick: () => onCLickFollow(artist),
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
    <View
      buttons={items}
      artist={artist}
    />
  );
};

const View = ({ buttons, artist }) => {
  const { image, name, fanBase } = artist;

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
                Folowers{' '}
                <span id="followers-num">
                  {formatNumberWithCommas(fanBase)}
                </span>
              </p>
              <ButtonGroup className="artist__btn-group overflow-visible">
                {buttons}
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
