import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import '../../Styles/Clients/ClientsAccueil.css';
import compteurMonophase from '../../Assets/compteurMonophase.jpg';
import compteurTripphase from '../../Assets/compteurTripphase.jpg';

const ClientsAccueil = () => {
  const navigate = useNavigate(); 

  return (
    <div className="clients-accueil">
      <h2>Bienvenue chez 1 Gabonais 1 compteur vous souhaitez avoir :</h2>
      <div className="compteurs-container">
        <div className="compteur-card">
          <img src={compteurMonophase} alt="Compteur Monophasé" />
          <div className="compteur-details">
            <input type="checkbox" className="checkbox" />
            <h3>Compteur Monophasé</h3>
            <p>75 000 FCFA</p> {/* Corrected the price */}
            <div className="quantity-selector">
              <label>Nombre d'articles à acheter</label>
              <div className="quantity-buttons">
                <button>-</button>
                <input type="number" value="1" min="0" readOnly />
                <button>+</button>
              </div>
            </div>
          </div>
        </div>

        <div className="compteur-card">
          <img src={compteurTripphase} alt="Compteur Triphasé" />
          <div className="compteur-details">
            <input type="checkbox" className="checkbox" />
            <h3>Compteur Triphasé</h3>
            <p>125 000 FCFA</p> {/* Corrected the price */}
            <div className="quantity-selector">
              <label>Nombre d'articles à acheter</label>
              <div className="quantity-buttons">
                <button>-</button>
                <input type="number" value="0" min="0" readOnly />
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <button className="other-button" onClick={() => navigate('/autres')}> 
          Autres
        </button>
        <button className="buy-button">
          <i className="fas fa-shopping-cart"></i> Acheter
        </button>
      </div>
    </div>
  );
};

export default ClientsAccueil;
