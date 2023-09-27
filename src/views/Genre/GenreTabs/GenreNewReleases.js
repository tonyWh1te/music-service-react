import withContent from '../../../hoc/withContent';
import { AlbumList } from '../../../components/Lists';

const GET_NEW_RELEASES = 'getNewReleases';

const GenreNewReleases = ({ genreId }) => {
  const ContentWithReleases = withContent(AlbumList, {
    methodName: GET_NEW_RELEASES,
    methodParams: [genreId, false],
  });

  return (
    <section className="pb-14">
      <div className="container-wrapper md:mx-0">
        <div className="section-top mb-5">
          <h2 className="section-title">New Releases</h2>
        </div>
        <ContentWithReleases gridComposition={'table'} />
      </div>
    </section>
  );
};

export default GenreNewReleases;
