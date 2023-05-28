import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Sidebar />
      <div className="absolute left-0 right-0 md:left-56">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
