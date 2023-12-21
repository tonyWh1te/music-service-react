import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './Layout.css';

const Layout = () => {
  return (
    <div className="relative h-full">
      <Sidebar />
      <div className="page-content-wrapper">
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
