import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
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
              <Suspense
                fallback={
                  <Bars
                    height="80"
                    width="80"
                    color="#1AB26B"
                    ariaLabel="bars-loading"
                    wrapperClass="spinner"
                    visible={true}
                  />
                }
              >
                <Outlet />
              </Suspense>
            </main>
          </div>
          <BottomPlayerWrapper />
        </div>
      </FavoritesProvider>
    </PlayerProvider>
  );
};

export default Layout;
