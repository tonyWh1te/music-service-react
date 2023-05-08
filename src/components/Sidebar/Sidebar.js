import { home, library } from '../../assets';
import './Sidebar.css';

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
