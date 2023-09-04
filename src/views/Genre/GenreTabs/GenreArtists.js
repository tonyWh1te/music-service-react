import withContent from '../../../hoc/withContent';
import ArtistList from '../../../components/ArtistList/ArtistList';
import MusicService from '../../../service/MusicService.service';

const GenreArtists = ({ genreId }) => {
  const ContentWithArtists = withContent(ArtistList, () => new MusicService().getArtistsByGenre(genreId));

  return (
    <section className="pb-14">
      <div className="container px-12 mx-auto md:mx-0">
        <div className="section-top mb-5">
          <h2 className="section-title">Artists</h2>
        </div>
        <ContentWithArtists gridComposition={'table'} />
      </div>
    </section>
  );
};

export default GenreArtists;