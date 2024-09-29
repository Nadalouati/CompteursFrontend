import { Routes, Route } from 'react-router-dom';
import ClientsLayout from '../Pages/Clients/ClientsLayout';
import ClientsAccueil from '../Pages/Clients/ClientsAccueil';
import PrivateRoute from './PrivateRoute';

const ClientsRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<ClientsLayout />}>
          <Route path="/" element={<ClientsAccueil />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default ClientsRoutes;
