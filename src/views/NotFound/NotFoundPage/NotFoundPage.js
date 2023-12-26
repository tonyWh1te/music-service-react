import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <section className="not-found">
      <div className="container-wrapper">
        <div className="not-found__inner">
          <h1 className="title-main text-9xl tracking-wider mb-5">404</h1>
          <p className="not-found__text">Page Not Found</p>
          <Link
            to="/home"
            className="group not-found__link"
          >
            <span className="group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
