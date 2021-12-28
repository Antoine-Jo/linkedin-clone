import React from 'react';
import './Login.css';
import linkedin from './linkedin.svg';

function Login() {
    return (
        <div className='login'>
            <img src={linkedin} alt=''/>

            <form>
                <input placeholder='Full name (required if registering)' type="text" />
                
                <input placeholder='Profile pic URL (optional)' type="text" />
                
                <input placeholder='Email' type="email" />

                <input placeholder='Password' type="password" />

                <button>S'identifier</button>
            </form>

            <p>Pas un membre ?
                <span> S'inscrire maintenant</span>
            </p>
        </div>
    )
}

export default Login
