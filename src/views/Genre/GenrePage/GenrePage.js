import { useParams } from 'react-router-dom';
import withContent from '../../../hoc/withContent';
import Carousel from '../../../components/Carousel/Carousel';
import ArtistList from '../../../components/ArtistList/ArtistList';
import AlbumList from '../../../components/AlbumList/AlbumList';
import SongList from '../../../components/SongList/SongList';
import Layout from '../../../components/Layout/Layout';
import MusicService from '../../../service/MusicService.service';
import './GenrePage.css';

const InnerPage = (props) => {
  const { errorMessage, loading, list: genre } = props;

  const content = !errorMessage && !loading ? <View genre={genre} /> : null;

  return (
    <>
      {errorMessage}
      {loading}
      {content}
    </>
  );
};

const View = ({ genre }) => {
  const { id, name } = genre;

  const musicService = new MusicService();

  const ContentWithArtists = withContent(ArtistList, () => musicService.getTopArtists(id));
  const ContentWithSongs = withContent(SongList, () => musicService.getTopSongs(id));
  const ContentWithReleases = withContent(AlbumList, () => musicService.getNewReleases(id));

  return (
    <>
      <div className="container px-12 mx-auto md:mx-0">
        <h1 className="page-title">{name}</h1>
      </div>
      <section className="pb-14">
        <Carousel title={'Popular songs'}>
          <ContentWithSongs />
        </Carousel>
      </section>
      <section className="pb-14">
        <Carousel title={'New releases'}>
          <ContentWithReleases />
        </Carousel>
      </section>
      <section className="pb-14">
        <Carousel title={'Artists'}>
          <ContentWithArtists />
        </Carousel>
      </section>
    </>
  );
};

const GenrePage = () => {
  const { genreId } = useParams();

  const ContentWithGenre = withContent(InnerPage, () => new MusicService().getGenre(genreId));

  return (
    <Layout>
      <ContentWithGenre />
    </Layout>
  );
};

export default GenrePage;
