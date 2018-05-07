import React from 'react';
import {Col,Image} from 'react-bootstrap';
import  './aboutCard.css';
export const AboutCard = (props) => {
    return(
        <div>
            
                <div className="about-card about-card-profile about-card-header text-center">
                    
                        <div className = "about-card-body text-center">
                            <Image src={props.user.avatarUrl}className="about-card-photo"/>
                        </div>
                        <div className="about-card-body">
                        <ul>
                            <h3>{props.user.displayName}</h3>
                            <li><span className="bold-label">Lives: </span>{props.user.lives}</li>
                            <li><span className="bold-label">From: </span>{props.user.from}</li>
                            <li><span className="bold-label">Native Language: </span>{props.user.nativeLanguage}</li>
                            <li><span className="bold-label">Studying: </span>{props.user.studiedLanguage}</li>
                            <li><span className="bold-label">UID: </span>{props.user.uid}</li>
                        </ul>
                        </div>
                    
                </div>
            
        </div>
    );
}; 