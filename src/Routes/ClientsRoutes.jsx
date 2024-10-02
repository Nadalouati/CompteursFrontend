import { Routes, Route } from 'react-router-dom';
import ClientsLayout from '../Pages/Clients/ClientsLayout';
import ClientsAccueil from '../Pages/Clients/ClientsAccueil';
import Presentation from '../Pages/Clients/Presentation';
import Contact from '../Pages/Clients/Contact';
import PrivateRoute from './PrivateRoute';
import Autres from '../Pages/Clients/Autres';
import SignUp from '../Pages/Clients/SignUp';

const ClientsRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<ClientsLayout />}>
          <Route path="/" element={<ClientsAccueil />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/autres" element={<Autres/>} />
          <Route path="/signup" element={ <SignUp/>}  />
        </Route>
      </Route>
    </Routes>
  );
};

export default ClientsRoutes;
