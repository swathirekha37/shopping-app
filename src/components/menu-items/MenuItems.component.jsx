import React from 'react';
import './menuItems.styles.scss';
import {Navigate, useNavigate} from 'react-router-dom'

const MenuItems = ({title,size,imageUrl,linkUrl,history,match}) => {
    let navigate = useNavigate()
   return (
        <div className={`${size} menu-item`} onClick={()=>navigate(`${linkUrl}`)}>
            <div className='background-image' style={{backgroundImage : `url(${imageUrl})`}} />
            <div className='content'>
                <h1>{title.toUpperCase()}</h1>
                <span>SHOP NOW</span>
            </div>
        </div>
   )
}

export default MenuItems;
