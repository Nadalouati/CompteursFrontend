import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../Pages/Admin/AdminLayout';
import AdminAccueil from '../Pages/Admin/AdminAccueil';
import Reclamation from '../Pages/Admin/Reclamation';
import AdminLogin from '../Pages/Admin/AdminLogin';
import PrivateRoute from './PrivateRoute';

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Route for login */}
      <Route path="/" element={<AdminLogin />} />
      
      {/* Protected routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/acc" element={<AdminAccueil />} />
          <Route path="/reclamation" element={<Reclamation />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
