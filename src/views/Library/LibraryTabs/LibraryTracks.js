import TrackTable from '../../../components/TrackTable/TrackTable';
import { ClockIcon } from '@heroicons/react/20/solid';

const LibraryTracks = ({ tracks }) => {
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

  return (
    <div className="pb-14">
      <div className="container-wrapper md:mx-0">
        <div className="section-top mb-5">
          <h2 className="section-title">Favorite music</h2>
        </div>
        <TrackTable
          tracksData={tracks}
          tableHeaders={tableHeaders}
        />
      </div>
    </div>
  );
};

export default LibraryTracks;
