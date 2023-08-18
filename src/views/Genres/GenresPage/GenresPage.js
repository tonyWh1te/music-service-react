import MusicService from '../../../service/MusicService.service';
import Layout from '../../../components/Layout/Layout';
import GenresList from '../../../components/GenresList/GenresList';
import withList from '../../../hoc/withList';

const GenresPage = () => {
  const ListWithGenres = withList(GenresList, new MusicService().getAllGenres);

  return (
    <Layout>
      <div className="container px-12 mx-auto md:mx-0">
        <h1 className="page-title">Browse</h1>
      </div>
      <section className="pb-14">
        <div className="container px-12 mx-auto md:mx-0">
          <div className="section-top">
            <h2 className="section-title">Genres</h2>
          </div>
          {<ListWithGenres />}
        </div>
      </section>
    </Layout>
  );
};

export default GenresPage;
