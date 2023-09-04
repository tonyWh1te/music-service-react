import withContent from '../../../hoc/withContent';
import AlbumList from '../../../components/AlbumList/AlbumList';
import MusicService from '../../../service/MusicService.service';

const GenreNewReleases = ({ genreId }) => {
  const ContentWithReleases = withContent(AlbumList, () => new MusicService().getNewReleases(genreId, false));

  return (
    <section className="pb-14">
      <div className="container px-12 mx-auto md:mx-0">
        <div className="section-top mb-5">
          <h2 className="section-title">New Releases</h2>
        </div>
        <ContentWithReleases gridComposition={'table'} />
      </div>
    </section>
  );
};

export default GenreNewReleases;
