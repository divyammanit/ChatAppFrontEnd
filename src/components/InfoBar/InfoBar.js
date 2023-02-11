import React from 'react'
import './InfoBar.css';
import onlineIcon from '../../components/icon/onlineIcon.png';
import closeIcon from '../../components/icon/closeIcon.png';


const InfoBar = ({ room }) => {
  return (
    <div className='infoBar'>
        <div className='leftInnerContainer'> 
            <img className='onlineIcon' src={onlineIcon} alt='online Img'/>
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'> 
            <a href='/'> <img src={closeIcon} alt='close Img'/></a>
        </div>
    </div>
  )
}

export default InfoBar;