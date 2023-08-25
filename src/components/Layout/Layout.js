import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import BottomPlayer from '../BottomPlayer/BottomPlayer';
import usePlayer from '../../hooks/usePlayer';
import './Layout.css';

const Layout = ({ children }) => {
  const {
    state: { show },
  } = usePlayer();

  return (
    <div className="relative h-full">
      <Sidebar />
      <div className="page-content-wrapper">
        <Header />
        <main className="main">{children}</main>
      </div>
      {show && <BottomPlayer />}
    </div>
  );
};

export default Layout;
