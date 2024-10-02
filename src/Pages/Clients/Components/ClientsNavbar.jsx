import { Link } from 'react-router-dom';
import '../../../Styles/Clients/ClientsNavbar.css';

// Importation des images
import logoCompt from '../../../Assets/logocompt.jpg';
import seegLogo from '../../../Assets/SEEG.jpg';

const ClientsNavbar = () => {
  return (
    <nav className="clients-navbar">
      <div className="navbar-content">
        {/* Utilisation des images importées */}
        <img src={logoCompt} alt="Logo Compt" className="logo-left" />

        <ul className="navbar-links">
          <li>
            <Link to="/">ACCEUIL</Link>
          </li>
          <li>
            <Link to="/presentation">PRESENTATION</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>

        <img src={seegLogo} alt="SEEG Logo" className="logo-right" />
      </div>
    </nav>
  );
};

export default ClientsNavbar;
