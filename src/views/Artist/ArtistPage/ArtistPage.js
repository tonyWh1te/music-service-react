import { useParams } from 'react-router-dom';
import withContent from '../../../hoc/withContent';
import Layout from '../../../components/Layout/Layout';
import ArtistInfo from '../ArtistInfo/ArtistInfo';
import ArtistAlbums from '../ArtistAlbums/ArtistAlbums';
import TrackTableImpl from '../TrackTableImpl/TrackTableImpl';
import './ArtistPage.css';

const GET_ARTIST = 'getArtist';

const ArtistPage = () => {
  const { artistId } = useParams();

  const ContentWithArtist = withContent(InnerPage, { methodName: GET_ARTIST, methodParams: [artistId] });

  return (
    <Layout>
      <ContentWithArtist />
    </Layout>
  );
};

const InnerPage = ({ spinner, errorMessage, list: artist }) => {
  const content = !(errorMessage || spinner || !artist) && <View artist={artist} />;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ artist }) => {
  return (
    <>
      <ArtistInfo artist={artist} />
      <div className="top-songs top-songs__block">
        <div className="container-wrapper md:mx-0">
          <h4 className="top-songs__title">Popular songs</h4>
          <TrackTableImpl artist={artist} />
        </div>
      </div>
      <ArtistAlbums artist={artist} />
    </>
  );
};

export default ArtistPage;
