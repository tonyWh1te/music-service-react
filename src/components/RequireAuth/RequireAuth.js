import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/hooks';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/auth"
      state={{ from: location }}
      replace
    />
  );
};

export default RequireAuth;
