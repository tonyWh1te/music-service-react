import { GenresList } from '../../../components/Lists';
import withContent from '../../../hoc/withContent';

const GET_ALL_GENRES = 'getAllGenres';

const GenresPage = () => {
  const ContentWithGenres = withContent(GenresList, {
    methodName: GET_ALL_GENRES,
  });

  return (
    <>
      <div className="container-wrapper md:mx-0">
        <h1 className="page-title mb-10">Browse</h1>
      </div>
      <section className="pb-14">
        <div className="container-wrapper md:mx-0">
          <div className="section-top">
            <h2 className="section-title">Genres</h2>
          </div>
          {<ContentWithGenres />}
        </div>
      </section>
    </>
  );
};

export default GenresPage;
