import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import BottomPlayer from '../BottomPlayer/BottomPlayer';
import usePlayer from '../../hooks/usePlayer';

const Layout = ({ children }) => {
  const {
    state: { show },
  } = usePlayer();

  return (
    <div className="relative">
      <Sidebar />
      <div className="absolute left-0 right-0 md:left-56">
        <Header />
        <main>{children}</main>
      </div>
      {show && <BottomPlayer />}
    </div>
  );
};

export default Layout;
