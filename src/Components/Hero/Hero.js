import React from 'react';
import nightImg from '../../Images/undraw_dreamer.png';
import './Hero.scss'


const Hero = () => {
    return ( 
    <div className="heroWrapper">
        <div className="heroText">
            <h1>Estamos creando una comunidad activa <br/> que se cuida el uno al otro. ¡Uneté!</h1>
        </div>
        <div className="heroImgContainer">
            <img src={nightImg} alt="undraw_nightImg" id="nightImage" className="heroImg"></img>
        </div>
    </div> 
    );
}
 
export default Hero;