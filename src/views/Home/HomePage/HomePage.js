import Layout from '../../../components/Layout/Layout';
import ArtistList from '../../../components/ArtistList/ArtistList';
import SongList from '../../../components/SongList/SongList';
import Carousel from '../../../components/Carousel/Carousel';
import withContent from '../../../hoc/withContent';
import MusicService from '../../../service/MusicService.service';

const HomePage = () => {
  const musicService = new MusicService();

  const ContentWithSongs = withContent(SongList, musicService.getTopSongs);
  const ContentWithArtists = withContent(ArtistList, musicService.getTopArtists);

  return (
    <Layout>
      <div className="container px-12 mx-auto md:mx-0">
        <h1 className="page-title">Home</h1>
      </div>
      <section className="pb-14">
        <Carousel title={'Popular songs'}>
          <ContentWithSongs />
        </Carousel>
      </section>
      <section className="pb-14">
        <Carousel title={'Popular artists'}>
          <ContentWithArtists />
        </Carousel>
      </section>
    </Layout>
  );
};

export default HomePage;
