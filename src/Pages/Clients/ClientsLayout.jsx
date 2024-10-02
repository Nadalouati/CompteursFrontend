import '../../Styles/Clients/ClientsLayout.css'; // Importation du fichier CSS
import { Outlet } from 'react-router-dom';
import ClientsNavbar from './Components/ClientsNavbar';

const ClientsLayout = () => {
  return (
    <div className="clients-layout">
      <ClientsNavbar />
      <div className="clients-page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default ClientsLayout;
