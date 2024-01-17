import { useSearchParams } from 'react-router-dom';
import { useFavorites } from '../../../hooks';
import { LibraryAlbums, LibraryArtists, LibraryTracks } from '../LibraryTabs';
import Tabs from '../../../components/Tabs/Tabs';
import {
  PARAM_NAME,
  LIBRARY_PARAM_VALUE_DEFAULT,
} from '../../../utils/constants';
import './LibraryPage.css';

const LibraryPage = () => {
  const {
    context: { favItems },
  } = useFavorites();

  const [searchParam, setSearchParam] = useSearchParams();
  const tabQuery = searchParam.get(PARAM_NAME) || LIBRARY_PARAM_VALUE_DEFAULT;

  const tabs = [
    {
      id: 'artists',
      label: 'Artists',
      content: <LibraryArtists artists={favItems.artist} />,
    },
    {
      id: 'tracks',
      label: 'Favorite Music',
      content: <LibraryTracks tracks={favItems.track} />,
    },
    {
      id: 'albums',
      label: 'Albums',
      content: <LibraryAlbums albums={favItems.album} />,
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
        <h1 className="page-title">Library</h1>
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

export default LibraryPage;
