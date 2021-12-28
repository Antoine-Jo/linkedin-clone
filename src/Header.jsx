import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import logo from './logo-lkdin.svg';
import picture from './pdp.jpg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
           <div className="header__left">
                <img src={logo} alt=''/>

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Recherche' type="text"/>
                </div>
           </div>

           <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Accueil' />
                <HeaderOption Icon={SupervisorAccountIcon} title='Réseau' />
                <HeaderOption Icon={BusinessCenterIcon} title='Emplois' />
                <HeaderOption Icon={ChatIcon} title='Messagerie' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar={picture} title='Vous'/>
           </div>
        </div>
    )
}

export default Header
