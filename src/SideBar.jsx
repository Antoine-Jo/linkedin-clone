import { Avatar } from '@material-ui/core';
import React from 'react'
import './SideBar.css';
import PicSidebar from './bg-pic-sidebar.jpg'

function SideBar() {

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
                <Avatar className='sidebar__avatar' />
                <h2>Antoine Jonville</h2>
                <h4>antoinejonville@yahoo.fr</h4>
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