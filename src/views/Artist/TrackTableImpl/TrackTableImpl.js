import { ClockIcon } from '@heroicons/react/20/solid';
import withContent from '../../../hoc/withContent';
import TrackTable from '../../../components/TrackTable/TrackTable';

const GET_TOP_SONGS_ARTIST = 'getTopSongsArtist';

const TrackTableImpl = ({ artist }) => {
  const { id } = artist;

  const tableHeaders = [
    { content: 'Title', classes: 'button-title' },
    { content: 'Artist', classes: 'button-title' },
    { content: 'Album', classes: 'button-title' },
    {
      content: (
        <div className="flex justify-center">
          <ClockIcon className="w-6 h-6" />
        </div>
      ),
      classes: 'w-1/12',
    },
    { content: <>&nbsp;</>, classes: '' },
  ];

  const ContentWithTable = withContent(TrackTableWrapper, {
    methodName: GET_TOP_SONGS_ARTIST,
    methodParams: [id],
  });

  return <ContentWithTable tableHeaders={tableHeaders} />;
};

const TrackTableWrapper = ({
  spinner,
  errorMessage,
  list: tracks,
  tableHeaders,
}) => {
  const content = !(errorMessage || spinner || !tracks) ? (
    <TrackTable
      tracksData={tracks}
      tableHeaders={tableHeaders}
    />
  ) : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

export default TrackTableImpl;
