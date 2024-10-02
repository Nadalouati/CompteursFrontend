import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';  // Vérifiez cette ligne
import '../../Styles/Admin/AdminLogin.css';
import passlogin from '../../Assets/passlog.svg';
import logologin from '../../Assets/logologin.jpg';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Veuillez entrer un email valide.');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5002/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/Dashboard');
            } else {
                setError(data.msg || 'Une erreur est survenue lors de la connexion.');
            }
        } catch (err) {
            setError('Erreur de serveur. Veuillez réessayer plus tard.');
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Bienvenue Admin</h2>
                <img className="logoimg" src={logologin} alt="Login Illustration" />
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Entrez Votre Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="password-input-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Entrez Votre Mot de Passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="toggle-password-visibility"
                        >
                            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </button>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-button" disabled={isLoading}>
                        {isLoading ? 'Connexion...' : 'Se Connecter'} <span className="arrow">→</span>
                    </button>
                </form>
                <div className="forgot-password">
                    <a href="/reset-password-request">Mot de passe oublié ?</a>
                </div>
            </div>
            <div className="login-right">
                <img src={passlogin} alt="Login Illustration" />
            </div>
        </div>
    );
};

export default AdminLogin;