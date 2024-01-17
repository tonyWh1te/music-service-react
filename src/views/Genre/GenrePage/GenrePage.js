import { useParams, useSearchParams } from 'react-router-dom';
import withContent from '../../../hoc/withContent';
import {
  PARAM_NAME,
  GENRE_PARAM_VALUE_DEFAULT,
} from '../../../utils/constants';
import {
  GenreArtists,
  GenreNewReleases,
  GenreOverwiew,
} from '../GenreTabs/index';
import Tabs from '../../../components/Tabs/Tabs';
import './GenrePage.css';

const GET_GENRE = 'getGenre';

const InnerPage = ({ errorMessage, spinner, list: genre }) => {
  const content = !(errorMessage || spinner || !genre) ? (
    <View genre={genre} />
  ) : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ genre }) => {
  const { id, name } = genre;

  const [searchParam, setSearchParam] = useSearchParams();

  const tabQuery = searchParam.get(PARAM_NAME) || GENRE_PARAM_VALUE_DEFAULT;

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
      setSearchParam({ [PARAM_NAME]: id });
    }
  };

  const selectedTab = tabs.find(({ id }) => id === tabQuery);

  return (
    <>
      <div className="container-wrapper md:mx-0">
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

  const ContentWithGenre = withContent(InnerPage, {
    methodName: GET_GENRE,
    methodParams: [genreId],
  });

  return <ContentWithGenre />;
};

export default GenrePage;
