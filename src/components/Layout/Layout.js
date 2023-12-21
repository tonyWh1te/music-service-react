import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="relative h-full">
      <Sidebar />
      <div className="page-content-wrapper">
        <Header />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
