import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../Pages/Admin/AdminLayout';
import AdminAccueil from '../Pages/Admin/AdminAccueil';
import Reclamation from '../Pages/Admin/Reclamation';
import AdminLogin from '../Pages/Admin/AdminLogin';
import PrivateRoute from './PrivateRoute';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/admin-accueil" element={<AdminAccueil />} />
          <Route path="/reclamation" element={<Reclamation/>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
