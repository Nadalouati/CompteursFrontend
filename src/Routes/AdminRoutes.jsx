import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../Pages/Admin/AdminLayout';
import AdminAccueil from '../Pages/Admin/AdminAccueil';
import Reclamation from '../Pages/Admin/Reclamation';
import PrivateRoute from './PrivateRoute';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<AdminAccueil />} />
          <Route path="/reclamation" element={<Reclamation/>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
