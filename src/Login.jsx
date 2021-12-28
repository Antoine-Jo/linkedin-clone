import React from 'react';
import './Login.css';
import linkedin from './linkedin.svg';

function Login() {

    const loginToApp = () => {

    }

    const register = () => {

    }

    return (
        <div className='login'>
            <img src={linkedin} alt=''/>

            <form>
                <input placeholder='Nom complet (Obligatoire si inscription)' type="text" />
                
                <input placeholder='Image de profil URL (optionnel)' type="text" />
                
                <input placeholder='Email' type="email" />

                <input placeholder='Mot de passe' type="password" />

                <button type='submit' onClick={loginToApp}>S'identifier</button>
            </form>

            <p>Nouveau sur LinkedIn ?{" "}
                <span className='login__register' onClick={register}>S'inscrire maintenant</span>
            </p>
        </div>
    )
}

export default Login
