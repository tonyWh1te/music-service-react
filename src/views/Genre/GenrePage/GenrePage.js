import { useParams, useSearchParams } from 'react-router-dom';
import withContent from '../../../hoc/withContent';
import { PARAM_NAME, PARAM_VALUE_DEFAULT } from '../../../utils/constants';
import { GenreArtists, GenreNewReleases, GenreOverwiew } from '../GenreTabs/index';
import Layout from '../../../components/Layout/Layout';
import Tabs from '../../../components/Tabs/Tabs';
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

  const [searchParam, setSearchParam] = useSearchParams();

  const tabQuery = searchParam.get(PARAM_NAME) || PARAM_VALUE_DEFAULT;

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: <GenreOverwiew genreId={id} />,
    },
    {
      id: 'new releases',
      label: 'New Releases',
      content: <GenreNewReleases genreId={id} />,
    },
    {
      id: 'artists',
      label: 'Artists',
      content: <GenreArtists genreId={id} />,
    },
  ];

  const onChangeTab = (id) => {
    if (tabQuery !== id) {
      setSearchParam({ tab: id });
    }
  };

  const selectedTab = tabs.find(({ id }) => id === tabQuery);

  return (
    <>
      <div className="container px-12 mx-auto md:mx-0">
        <h1 className="page-title">{name}</h1>
      </div>
      <div className="genre-tabs">
        <Tabs
          tabs={tabs}
          value={tabQuery}
          onChangeTab={onChangeTab}
        />
      </div>
      {selectedTab.content}
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
