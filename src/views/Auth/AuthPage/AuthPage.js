import { AuthForms } from '../AuthForms';
import { logo } from '../../../assets';
import './AuthPage.css';

const AuthPage = () => {
  return (
    <div className="wrapper">
      <main className="main-form">
        <div className="container px-12 mx-auto">
          <div className="main-form__inner">
            <img
              className="main-form__logo"
              src={logo}
              alt="logo"
            />
            <AuthForms />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
