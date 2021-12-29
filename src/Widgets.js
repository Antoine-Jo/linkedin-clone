import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn Actualités</h2>
                <InfoIcon />
            </div>

            {newsArticle("Covid-19/Vaccin", "À la une - 36 877 lecteurs")}
            {newsArticle("Les 10 tendances qui marqueront 2022", "il y a 21j - 34 781 lecteurs")}
            {newsArticle("Télétravail: halte au clichés", "il y a 28j - 700 lecteurs")}
            {newsArticle("Ras-le-bol des professions de terrain", "il y a 2j - 2 032 lecteurs")}
            {newsArticle("Managers: renoncer à ses idées ?", "il y a 13j - 739 lecteurss")}
            <p className='see__more'>Voir plus <ArrowDropDownIcon /></p>
        </div>
    )
}

export default Widgets
