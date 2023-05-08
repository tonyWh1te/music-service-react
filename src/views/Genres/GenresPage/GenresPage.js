import Header from '../../../components/Header/Header';
import {
  home,
  library,
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
    <div className="relative">
      <div className="nav">
        <nav className="nav__inner">
          <ul className="nav__list">
            <li className="nav__list-item nav__item--active">
              <a className="nav__link nav__link--active" href="#">
                <img className="nav__img" src={home} alt="nav-icon" />
                <span className="nav__name">Home</span>
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="nav__img">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="nav__name">Browse</span>
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#">
                <img className="nav__img" src={library} alt="nav-icon" />
                <span className="nav__name">Library</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="absolute left-0 right-0 md:left-56">
        <Header />
        <main>
          <div className="container px-12 mx-auto md:mx-0">
            <h1 className="page-title">Browse</h1>
          </div>
          <section className="pb-14">
            <div className="container px-12 mx-auto md:mx-0">
              <h2 className="section-title">Genres</h2>
              <ul className="genre-card__list">
                {genres.map((genre, i) => (
                  <li key={i} className="genre-card">
                    <img className="genre-card__img" src={genre.pic} alt="genre" />
                    <h4 className="title-main genre-card__title">{genre.name}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GenresPage;
