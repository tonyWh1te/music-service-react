import { useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import { usePlayer } from '../../../hooks/hooks';
import withContent from '../../../hoc/withContent';
import { ClockIcon } from '@heroicons/react/20/solid';
import Layout from '../../../components/Layout/Layout';
import TrackTable from '../../../components/TrackTable/TrackTable';
import AlbumInfo from '../AlbumInfo/AlbumInfo';
import './AlbumPage.css';

const GET_ALBUM = 'getAlbum';

const AlbumPage = () => {
  const { albumId } = useParams();

  const ContentWithAlbum = withContent(InnerPage, { methodName: GET_ALBUM, methodParams: [albumId] });

  return (
    <Layout>
      <ContentWithAlbum />
    </Layout>
  );
};

const InnerPage = ({ spinner, errorMessage, list: album }) => {
  const {
    setSongList,
    setCurrentSong,
    state: { currentSong },
  } = usePlayer();

  useEffect(() => {
    if (album?.tracksData) {
      setSongList(album.tracksData);
    }
  }, [album]);

  const content = !(errorMessage || spinner || !album) ? (
    <View
      album={album}
      setCurrentSong={setCurrentSong}
      currentSong={currentSong}
    />
  ) : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = memo(({ album, setCurrentSong, currentSong }) => {
  const { tracksData } = album;

  const tableHeaders = [
    { content: 'Title', classes: 'button-title' },
    { content: 'Artist', classes: 'button-title' },
    { content: 'Album', classes: 'button-title' },
    {
      content: (
        <div className="flex justify-center">
          <ClockIcon className="w-6 h-6" />
        </div>
      ),
      classes: 'w-1/12',
    },
    { content: <>&nbsp;</>, classes: '' },
  ];

  return (
    <>
      <AlbumInfo
        album={album}
        setCurrentSong={setCurrentSong}
      />
      <div className="album-songs album-song__block">
        <div className="container-wrapper md:mx-0">
          <TrackTable
            tableHeaders={tableHeaders}
            tracksData={tracksData}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        </div>
      </div>
    </>
  );
});

export default AlbumPage;
