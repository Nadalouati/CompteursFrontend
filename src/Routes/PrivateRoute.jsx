import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Assuming the user is always authenticated for this case
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
