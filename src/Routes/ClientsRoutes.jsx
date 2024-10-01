import { Routes, Route } from 'react-router-dom';
import ClientsLayout from '../Pages/Clients/ClientsLayout';
import ClientsAccueil from '../Pages/Clients/ClientsAccueil';
import Presentation from '../Pages/Clients/Presentation';
import Contact from '../Pages/Clients/Contact';
import PrivateRoute from './PrivateRoute';

const ClientsRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<ClientsLayout />}>
          <Route path="/" element={<ClientsAccueil />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default ClientsRoutes;
