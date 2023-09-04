import withContent from '../../../hoc/withContent';
import ArtistList from '../../../components/ArtistList/ArtistList';
import AlbumList from '../../../components/AlbumList/AlbumList';
import SongList from '../../../components/SongList/SongList';
import Carousel from '../../../components/Carousel/Carousel';
import MusicService from '../../../service/MusicService.service';

const GenreOverwiew = ({ genreId }) => {
  const musicService = new MusicService();

  const ContentWithArtists = withContent(ArtistList, () => musicService.getTopArtists(genreId));
  const ContentWithSongs = withContent(SongList, () => musicService.getTopSongs(genreId));
  const ContentWithReleases = withContent(AlbumList, () => musicService.getNewReleases(genreId));

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
