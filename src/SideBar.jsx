import { Avatar } from '@material-ui/core';
import React from 'react'
import './SideBar.css';
import PicSidebar from './bg-pic-sidebar.jpg'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function SideBar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={PicSidebar} alt='' />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Qui vous a vu</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Vues</p>
                    <p className='sidebar__statNumber'>2,448</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Récent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default SideBar
