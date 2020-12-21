import React from 'react';
import './Banner.scss';

const Banner = () => {
    return ( 
    <div className="sectionWrapper">
        <div className="bannerWrapper">
            <div className="bannerImage">
                IMAGE
            </div>
            <div className="bannerForm">
                <div className="bannerInfo">
                    Una comunidad segura empieza
                    <span> contigo</span>
                </div>
                <form className="formInputs">
                    <div className="firstRow">
                        <div className="rowInput">
                            <label for="name">
                                Name:
                            </label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="rowInput">
                            <label for="lastName">
                                Last Name:
                            </label>
                            <input type="text" name="lastName" id="lastName"/>
                        </div>
                    </div>
                    <div className="rowInput">
                        <label>
                            Email:
                        </label>
                        <input type="email" name="email" />
                    </div>
                    <div className="rowInput">
                        <input type="submit" value="Submit" className="submitButton"/>
                    </div>
                </form>
            </div>
        </div>
    </div> 
    );
}
 
export default Banner;