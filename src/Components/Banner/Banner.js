import React from 'react';
import './Banner.scss';
import mockup from '../../Images/mockup.png';

const Banner = () => {
    return ( 
    <div className="sectionWrapper">
        <div className="bannerWrapper">
            <div className="bannerImage">
                <img src={mockup} alt="contigo_mockup" id="mockupImage"></img>
            </div>
            <div className="bannerForm">
                <div className="bannerInfo">
                    <span>Una comunidad segura empieza </span>
                    <span id="contigoWord">contigo</span>
                </div>
                <form className="formInputs" action="#" method="POST">
                    <div className="firstRow">
                        <div className="rowInput">
                            <label for="name">
                                Name:
                            </label>
                            <input type="text" name="name" id="name" placeholder="Eg. Daniel"/>
                        </div>
                        <div className="rowInput">
                            <label for="lastName">
                                Last Name:
                            </label>
                            <input type="text" name="lastName" id="lastName" placeholder="Eg. Perez"/>
                        </div>
                    </div>
                    <div className="rowInput">
                        <label>
                            Email:
                        </label>
                        <input type="email" name="email" placeholder="Eg. Daniel_prz@gmail.com"/>
                    </div>
                    <div className="rowInput">
                        <button type="submit" className="submitButton">¡Registrate Para Más Información!</button>
                    </div>
                </form>
            </div>
        </div>
    </div> 
    );
}
 
export default Banner;