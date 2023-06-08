import Layout from '../../../components/Layout/Layout';
import ArtistList from '../../../components/ArtistList/ArtistList';
import SongList from '../../../components/SongList/SongList';
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
        <div className="container px-12 mx-auto md:mx-0">
          <h2 className="section-title">Popular songs</h2>
          <ListWithSongs />
        </div>
      </section>
      <section className="pb-14 md:pb-32">
        <div className="container px-12 mx-auto md:mx-0">
          <h2 className="section-title">Popular artists</h2>
          <ListWithArtists />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
