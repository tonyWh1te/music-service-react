import { Link } from 'react-router-dom';
import { AuthForms } from '../AuthForms';
import { logo } from '../../../assets';
import './AuthPage.css';

const AuthPage = () => {
  return (
    <div className="wrapper">
      <main className="main-form">
        <div className="container px-12 mx-auto">
          <div className="main-form__inner">
            <Link to={'/'}>
              <img
                className="main-form__logo"
                src={logo}
                alt="logo"
              />
            </Link>
            <AuthForms />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
