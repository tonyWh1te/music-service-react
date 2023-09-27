import Layout from '../../../components/Layout/Layout';
import { SongList, ArtistList } from '../../../components/Lists';
import Carousel from '../../../components/Carousel/Carousel';
import withContent from '../../../hoc/withContent';

const GET_TOP_SONGS = 'getTopSongs';
const GET_TOP_ARTISTS = 'getTopArtists';

const HomePage = () => {
  const ContentWithSongs = withContent(SongList, { methodName: GET_TOP_SONGS });
  const ContentWithArtists = withContent(ArtistList, { methodName: GET_TOP_ARTISTS });

  return (
    <Layout>
      <div className="container-wrapper md:mx-0">
        <h1 className="page-title mb-10">Home</h1>
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
