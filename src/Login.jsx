import React, { useState } from 'react';
import './Login.css';
import linkedin from './linkedin.svg';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profilUrl: userAuth.user.photoURL,
            }))
        })
        .catch((error) => alert(error));
    }

    const register = () => {
        if (!name) {
            return alert("Entrer un nom complet SVP !")
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            updateProfile(userAuth.user,{
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
            })
        })
        .catch((error) => alert(error));
    }

    return (
        <div className='login'>
            <img src={linkedin} alt=''/>

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Nom complet (Obligatoire si inscription)' type="text" />
                
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Image de profil URL (optionnel)' type="text" />
                
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />

                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Mot de passe' type="password" />

                <button type='submit' onClick={loginToApp}>S'identifier</button>
            </form>

            <p>Nouveau sur LinkedIn ?{" "}
                <span className='login__register' onClick={register}>S'inscrire maintenant</span>
            </p>
        </div>
    )
}

export default Login
