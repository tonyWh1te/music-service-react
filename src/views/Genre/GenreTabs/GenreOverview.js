import withContent from '../../../hoc/withContent';
import { ArtistList, AlbumList, SongList } from '../../../components/Lists';
import Carousel from '../../../components/Carousel/Carousel';

const GET_TOP_ARTISTS = 'getTopArtists';
const GET_TOP_SONGS = 'getTopSongs';
const GET_NEW_RELEASES = 'getNewReleases';

const GenreOverwiew = ({ genreId }) => {
  const ContentWithSongs = withContent(SongList, {
    methodName: GET_TOP_SONGS,
    methodParams: [genreId],
  });

  const ContentWithReleases = withContent(AlbumList, {
    methodName: GET_NEW_RELEASES,
    methodParams: [genreId],
  });

  const ContentWithArtists = withContent(ArtistList, {
    methodName: GET_TOP_ARTISTS,
    methodParams: [genreId],
  });

  return (
    <>
      <section className="pb-14">
        <Carousel title={'Popular songs'}>
          <ContentWithSongs />
        </Carousel>
      </section>
      <section className="pb-14">
        <Carousel
          title={'New releases'}
          linkProps={{ path: `/genres/${genreId}`, params: { tab: 'new releases' } }}
        >
          <ContentWithReleases />
        </Carousel>
      </section>
      <section className="pb-14">
        <Carousel
          title={'Artists'}
          linkProps={{ path: `/genres/${genreId}`, params: { tab: 'artists' } }}
        >
          <ContentWithArtists />
        </Carousel>
      </section>
    </>
  );
};

export default GenreOverwiew;
