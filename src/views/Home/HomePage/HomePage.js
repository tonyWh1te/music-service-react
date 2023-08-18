import Layout from '../../../components/Layout/Layout';
import ArtistList from '../../../components/ArtistList/ArtistList';
import SongList from '../../../components/SongList/SongList';
import Carousel from '../../../components/Carousel/Carousel';
import withList from '../../../hoc/withList';
import MusicService from '../../../service/MusicService.service';

const HomePage = () => {
  const musicService = new MusicService();

  const ListWithSongs = withList(SongList, musicService.getAllSongs);
  const ListWithArtists = withList(ArtistList, musicService.getAllArtists);

  return (
    <Layout>
      <div className="container px-12 mx-auto md:mx-0">
        <h1 className="page-title">Home</h1>
      </div>
      <section className="pb-14">
        <Carousel title={'Popular songs'}>
          <ListWithSongs />
        </Carousel>
      </section>
      <section className="pb-14">
        <Carousel title={'Popular artists'}>
          <ListWithArtists />
        </Carousel>
      </section>
    </Layout>
  );
};

export default HomePage;
