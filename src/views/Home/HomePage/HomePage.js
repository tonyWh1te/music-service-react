import { useState, useRef, useEffect } from 'react';
import { home, library, profilePic, coverPic1, coverPic2, coverPic3, artistPic } from '../../../assets';
import './HomePage.css';

function HomePage() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const arrowRef = useRef();

  const toggleDropdown = (e) => {
    if (e.target !== menuRef.current && e.target !== arrowRef.current) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', toggleDropdown);

    return () => {
      window.removeEventListener('click', toggleDropdown);
    };
  });

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
        <header>
          <div className="container px-12 mx-auto md:mx-0">
            <div className="header__inner">
              <div className="flex justify-between items-center">
                <div className="relative">
                  <input className="search__input" type="text" placeholder="Search" />
                  <div className="search__img" data-search>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 stroke-1 stroke-gray-icon text-gray-icon md:stroke-black md:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="search__close" data-close>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-black">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <img className="user__img" src={profilePic} alt="profile-pic" />
                  </div>
                  <div className="user__text">Tiffany Kim</div>
                  <div className="cursor-pointer" onClick={() => setOpen(!open)} ref={arrowRef}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-icon pointer-events-none"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {open && (
                <div className="dropdown-menu" ref={menuRef} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                  <div className="bg-gray-gradient-dark shadow-dropdown rounded-md">
                    <div className="py-1" role="none">
                      <a href="#" className="dropdown-menu__link animation-main" role="menuitem" tabIndex="-1" id="menu-item-0">
                        Account settings
                      </a>
                      <form method="POST" action="#" role="none">
                        <button type="submit" className="dropdown-menu__btn animation-main" role="menuitem" tabIndex="-1" id="menu-item-3">
                          Sign out
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        <main>
          <div className="container px-12 mx-auto md:mx-0">
            <h1 className="page-title">Home</h1>
          </div>
          <section className="pb-14">
            <div className="container px-12 mx-auto md:mx-0">
              <h2 className="section-title">Popular songs</h2>
              <ul className="songs-list">
                <li className="card-song">
                  <img className="card-song__cover" src={coverPic1} alt="cover" />
                  <h4 className="card-title">LukeXXy</h4>
                  <p className="card-song__singer">The Vegabonds</p>
                </li>
                <li className="card-song">
                  <img className="card-song__cover" src={coverPic2} alt="cover" />
                  <h4 className="card-title">Cameron Williamson</h4>
                  <p className="card-song__singer">The Vegabonds</p>
                </li>
                <li className="card-song">
                  <img className="card-song__cover" src={coverPic3} alt="cover" />
                  <h4 className="card-title">RonaldRich</h4>
                  <p className="card-song__singer">The Vegabonds</p>
                </li>
                <li className="card-song">
                  <img className="card-song__cover" src={coverPic2} alt="cover" />
                  <h4 className="card-title">CameronW</h4>
                  <p className="card-song__singer">The Vegabonds</p>
                </li>
                <li className="card-song">
                  <img className="card-song__cover" src={coverPic1} alt="cover" />
                  <h4 className="card-title">JJDevon</h4>
                  <p className="card-song__singer">The Vegabonds</p>
                </li>
                <li className="card-song">
                  <img className="card-song__cover" src={coverPic1} alt="cover" />
                  <h4 className="card-title">JJDevon</h4>
                  <p className="card-song__singer">The Vegabonds</p>
                </li>
                <li className="card-song">
                  <img className="card-song__cover" src={coverPic2} alt="cover" />
                  <h4 className="card-title">CameronW</h4>
                  <p className="card-song__singer">The Vegabonds</p>
                </li>
              </ul>
            </div>
          </section>
          <section className="pb-32 md:pb-14">
            <div className="container px-12 mx-auto md:mx-0">
              <h2 className="section-title">Popular artists</h2>
              <ul className="artists-list">
                <li className="card-artist">
                  <img className="card-artist__img" src={artistPic} alt="artist" />
                  <h4 className="card-title">David Bowie</h4>
                </li>
                <li className="card-artist">
                  <img className="card-artist__img" src={artistPic} alt="artist" />
                  <h4 className="card-title">David Bowie</h4>
                </li>
                <li className="card-artist">
                  <img className="card-artist__img" src={artistPic} alt="artist" />
                  <h4 className="card-title">David Bowie</h4>
                </li>
                <li className="card-artist">
                  <img className="card-artist__img" src={artistPic} alt="artist" />
                  <h4 className="card-title">David Bowie</h4>
                </li>
                <li className="card-artist">
                  <img className="card-artist__img" src={artistPic} alt="artist" />
                  <h4 className="card-title">David Bowie</h4>
                </li>
                <li className="card-artist">
                  <img className="card-artist__img" src={artistPic} alt="artist" />
                  <h4 className="card-title">David Bowie</h4>
                </li>
                <li className="card-artist">
                  <img className="card-artist__img" src={artistPic} alt="artist" />
                  <h4 className="card-title">David Bowie</h4>
                </li>
                <li className="card-artist">
                  <img className="card-artist__img" src={artistPic} alt="artist" />
                  <h4 className="card-title">David Bowie</h4>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
