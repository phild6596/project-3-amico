import React from 'react';
<<<<<<< HEAD

export const AboutCard = (props) => {
    return(
        <div className ="aboutCard-container">
            <h6> About </h6>
            <ul className = "info-list">
                <li><span>Lives: </span>{props.user.lives}</li>
                <li><span>From: </span>{props.user.from}</li>
                <li><span>Native Language: </span>{props.user.nativeLanguage}</li>
                <li><span>Studied Language: </span>{props.user.studiedLanguage}</li>
            </ul>
=======
import {Col,Image} from 'react-bootstrap';
import  './aboutCard.css';
export const AboutCard = (props) => {
    return(
        <div>
            <Col sm={9} >
                <div className="about-card about-card-profile about-card-header text-center">
                    
                        <div className = "about-card-body text-center">
                            <Image src={props.user.avatarUrl}className="about-card-photo "/>
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
            </Col>
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
        </div>
    );
}; 