import React from 'react';
import '../../Styles/Clients/Autres.css'; // Importing the CSS file for styling
import compteurMonophase from '../../Assets/compteurMonophase.jpg';
import compteurTripphase from '../../Assets/compteurTripphase.jpg';
import Disjoncteurs from '../../Assets/Disjoncteurs.jpg';
import clavier from '../../Assets/clavier.png';
import collier from '../../Assets/collier.jpg';

const Autres = () => {
  return (
    <div className="autres-container">
      <h2>Bienvenue chez 1 Gabonais 1 compteur vous souhaitez avoir :</h2>

      {/* Top product cards - Monophasé and Triphasé */}
      <div className="top-products">
        <div className="product-card">
          <input type="checkbox" className="checkbox" />
          <img src={compteurMonophase} alt="Compteur Monophasé" />
          <h3>Compteur Monophasé</h3>
          <p>75 000 FCFA</p>
          <div className="quantity-selector">
            <label>Nombre d'articles à acheter</label>
            <div className="quantity-buttons">
              <button>-</button>
              <input type="number" value="1" min="0" readOnly />
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <input type="checkbox" className="checkbox" />
          <img src={compteurTripphase} alt="Compteur Triphasé" />
          <h3>Compteur Triphasé</h3>
          <p>125 000 FCFA</p>
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

      {/* Bottom product cards */}
      <div className="bottom-products">
        <div className="product-card">
          <input type="checkbox" className="checkbox" />
          <img src={Disjoncteurs} alt="Disjoncteurs" />
          <h3>Disjoncteurs</h3>
          <p>35 000 FCFA</p>
          <div className="quantity-selector">
            <label>Nombre d'articles à acheter</label>
            <div className="quantity-buttons">
              <button>-</button>
              <input type="number" value="0" min="0" readOnly />
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <input type="checkbox" className="checkbox" />
          <img src={clavier} alt="clavier" />
          <h3>Claviers (CUI)</h3>
          <p>45 000 FCFA</p>
          <div className="quantity-selector">
            <label>Nombre d'articles à acheter</label>
            <div className="quantity-buttons">
              <button>-</button>
              <input type="number" value="0" min="0" readOnly />
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="product-card">
          <input type="checkbox" className="checkbox" />
          <img src={collier} alt="collier" />
          <h3>Colliers</h3>
          <p>15 000 FCFA</p>
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

      <button className="buy-button">
        <i className="fas fa-shopping-cart"></i> Acheter
      </button>
    </div>
  );
};

export default Autres;
