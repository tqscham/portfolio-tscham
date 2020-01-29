import React from 'react';
import contactPicture from "../../../static/assets/images/auth/login.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function() {
    return (
        <div className={"content-page-wrapper"}>
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="mobile-alt" />
                        </div>

                        <div className="text">
                            555-555-5555
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="at" />
                        </div>

                        <div className="text">
                            tscham@exp.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="compass" />
                        </div>

                        <div className="text">
                            Lincoln, NE
                        </div>
                    </div>
                </div>
            </div>
            
            <div 
            className="left-column"
            style={{
                background: "url(" + contactPicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "7px"
            }}
            >

            </div>
            

        </div>
    );
}