import React from 'react';
import '../../Styles/Clients/SignUp.css';
import logoCompt from '../../Assets/logocompt.jpg';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-actions">
        <button className="signup-login-button">Se connecter</button>
      </div>
      <div className="signup-box">
        <div className="signup-header">
          <img src={logoCompt} alt="Logo Compt" className="logo-signup" />
          <h2>Créer votre compte</h2>
        </div>
        <form className="signup-form">
          <div className="signup-row">
            <input type="text" placeholder="Nom" className="signup-input" />
            <input type="text" placeholder="Prénom" className="signup-input" />
          </div>
          <div className="signup-row">
            <select className="signup-input">
              <option value="">Province</option>
              {/* Add other options */}
            </select>
            <select className="signup-input">
              <option value="">Ville</option>
              {/* Add other options */}
            </select>
          </div>
          <input type="text" placeholder="Quartier" className="signup-input" />
          <input type="text" placeholder="Adresse" className="signup-input" />
          <div className="signup-row">
            <input type="file" className="signup-file-input" />
            <label>Mettez une photo de votre NIP</label>
          </div>
          <input type="text" placeholder="Téléphone" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" />
          <input type="password" placeholder="Mot de passe" className="signup-input" />
          <button className="signup-button">Créer un compte</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
