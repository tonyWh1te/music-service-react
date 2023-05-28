import Layout from '../../../components/Layout/Layout';
import {
  genrePic1,
  genrePic2,
  genrePic3,
  genrePic4,
  genrePic5,
  genrePic6,
  genrePic7,
  genrePic8,
  genrePic9,
  genrePic10,
  genrePic11,
  genrePic12,
} from '../../../assets';
import './GenresPage.css';

const GenresPage = () => {
  const genres = [
    {
      name: 'hip-hop',
      pic: genrePic1,
    },
    {
      name: 'electro',
      pic: genrePic2,
    },
    {
      name: 'pop',
      pic: genrePic3,
    },
    {
      name: 'rock',
      pic: genrePic5,
    },
    {
      name: 'indie',
      pic: genrePic6,
    },
    {
      name: 'country',
      pic: genrePic4,
    },
    {
      name: 'latin',
      pic: genrePic7,
    },
    {
      name: 'k-pop',
      pic: genrePic8,
    },
    {
      name: 'r&b',
      pic: genrePic9,
    },
    {
      name: 'classical',
      pic: genrePic10,
    },
    {
      name: 'jazz',
      pic: genrePic11,
    },
    {
      name: 'blues',
      pic: genrePic12,
    },
  ];
  return (
    <Layout>
      <div className="container px-12 mx-auto md:mx-0">
        <h1 className="page-title">Browse</h1>
      </div>
      <section className="pb-14">
        <div className="container px-12 mx-auto md:mx-0">
          <h2 className="section-title">Genres</h2>
          <ul className="genre-card__list">
            {genres.map((genre, i) => (
              <li
                key={i}
                className="genre-card"
              >
                <img
                  className="genre-card__img"
                  src={genre.pic}
                  alt="genre"
                />
                <h4 className="title-main genre-card__title">{genre.name}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default GenresPage;
