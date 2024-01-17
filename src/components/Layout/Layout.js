import { Outlet } from 'react-router-dom';
import { FavoritesProvider, PlayerProvider } from '../../context';
import BottomPlayerWrapper from '../BottomPlayer/BottomPlayerWrapper';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './Layout.css';

const Layout = () => {
  return (
    <PlayerProvider>
      <FavoritesProvider>
        <div className="relative h-full">
          <Sidebar />
          <div className="page-content-wrapper">
            <Header />
            <main className="main">
              <Outlet />
            </main>
          </div>
          <BottomPlayerWrapper />
        </div>
      </FavoritesProvider>
    </PlayerProvider>
  );
};

export default Layout;
