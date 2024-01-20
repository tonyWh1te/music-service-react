import { useEffect, memo, useMemo, useCallback } from 'react';
import { usePagination } from '../../../hooks';
import { TailSpin } from 'react-loader-spinner';
import clsx from 'clsx';
import withContent from '../../../hoc/withContent';
import AlbumCard from '../../../components/AlbumCard/AlbumCard';
import Button from '../../../components/Button/Button';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import MusicService from '../../../service/MusicService.service';
import './ArtistAlbums.css';

const GET_ARTIST_ALBUMS = 'getArtistAlbums';

const ArtistAlbums = ({ artist }) => {
  const ContentWithAlbums = withContent(AlbumListContainer, {
    methodName: GET_ARTIST_ALBUMS,
    methodParams: [artist.id],
  });

  return (
    <div className="artist-albums artist-albums__block">
      <div className="container-wrapper md:mx-0">
        <div className="section-top mb-5">
          <h2 className="section-title">Albums</h2>
        </div>
        <div>
          <ContentWithAlbums
            gridComposition="table"
            artist={artist}
          />
        </div>
      </div>
    </div>
  );
};

const AlbumListContainer = ({
  errorMessage,
  spinner,
  list,
  gridComposition,
  artist,
}) => {
  const musicService = new MusicService();

  const getArtistAlbums = (offset) =>
    musicService.getArtistAlbums(artist.id, offset);

  const { newData, onDataLoaded, onUploadData, offset, dataEnded } =
    usePagination(getArtistAlbums);

  const { loading, error, clearError } = musicService.http;

  useEffect(() => {
    if (list !== null) {
      onDataLoaded(list);
    }
  }, [list]);

  const onAlbumsUpload = useCallback(() => {
    clearError();
    onUploadData();
  }, [offset]);

  const renderItems = (albumList) => {
    return (albumList ?? []).map(({ id, coverImg, title, releaseDate }) => (
      <AlbumCard
        key={id}
        albumInfo={{ id, coverImg, title, releaseDate }}
      />
    ));
  };

  const items = useMemo(() => renderItems(newData), [newData]);

  return (
    <>
      {errorMessage}
      {spinner}
      <AlbumListView
        albums={items}
        onAlbumsUpload={onAlbumsUpload}
        loading={loading}
        error={error}
        albumsEnded={dataEnded}
        gridComposition={gridComposition}
      />
    </>
  );
};

const AlbumListView = memo(
  ({
    albums,
    onAlbumsUpload,
    loading,
    error,
    gridComposition,
    albumsEnded,
  }) => {
    const classes = clsx(
      'album-list__block',
      gridComposition === 'table' ? 'album-list' : 'songs-list'
    );

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? (
      <TailSpin
        height="18"
        width="18"
        ariaLabel="tail-spin-loading"
        radius="1"
        color="#1AB26B"
        wrapperClass="spinner"
        visible={true}
      />
    ) : null;
    const content = !error ? <ul className={classes}>{albums}</ul> : null;

    const buttonVisible = albumsEnded ? 'none' : 'block';
    const buttonLabel = loading ? spinner : 'show more';

    return (
      <>
        {errorMessage}
        {content}
        <Button
          className="button__secondary artist-albums__btn"
          disabled={loading}
          onClick={onAlbumsUpload}
          style={{ display: buttonVisible }}
        >
          {buttonLabel}
        </Button>
      </>
    );
  }
);

export default ArtistAlbums;
