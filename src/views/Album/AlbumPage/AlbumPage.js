import { useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import usePlayer from '../../../hooks/usePlayer';
import withContent from '../../../hoc/withContent';
import { ClockIcon } from '@heroicons/react/20/solid';
import Layout from '../../../components/Layout/Layout';
import TrackTable from '../../../components/TrackTable/TrackTable';
import AlbumInfo from '../AlbumInfo/AlbumInfo';
import MusicService from '../../../service/MusicService.service';

const AlbumPage = () => {
  const { albumId } = useParams();

  const ContentWithAlbum = withContent(InnerPage, () => new MusicService().getAlbum(albumId));

  return (
    <Layout>
      <ContentWithAlbum />
    </Layout>
  );
};

const InnerPage = (props) => {
  const { loading, errorMessage, list: album } = props;

  const {
    setSongList,
    setCurrentSong,
    state: { currentSong },
  } = usePlayer();

  useEffect(() => {
    if (album.tracksData) {
      const tracksData = album.tracksData.map((track) => ({
        id: track.id,
        title: track.title,
        artistName: track.artist.name,
        coverImg: track.album.cover_big,
        songFile: track.preview,
        link: track.link,
      }));

      setSongList(tracksData);
    }
  }, [album]);

  const content = !errorMessage && !loading && (
    <View
      album={album}
      setCurrentSong={setCurrentSong}
      currentSong={currentSong}
    />
  );

  return (
    <>
      {errorMessage}
      {loading}
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
    <div className="pb-14">
      <div className="container px-12 mx-auto md:mx-0">
        <AlbumInfo
          album={album}
          setCurrentSong={setCurrentSong}
        />
        <TrackTable
          tableHeaders={tableHeaders}
          tracksData={tracksData}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      </div>
    </div>
  );
});

export default AlbumPage;
