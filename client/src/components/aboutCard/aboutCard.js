import React from 'react';
<<<<<<< HEAD
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
=======
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
import {Col,Image} from 'react-bootstrap';
import  './aboutCard.css';
export const AboutCard = (props) => {
    return(
        <div>
<<<<<<< HEAD
            <Col sm={9} >
                <div className="about-card about-card-profile about-card-header text-center">
                    
                        <div className = "about-card-body text-center">
                            <Image src={props.user.avatarUrl}className="about-card-photo "/>
=======
            
                <div className="about-card about-card-profile about-card-header text-center">
                    
                        <div className = "about-card-body text-center">
                            <Image src={props.user.avatarUrl}className="about-card-photo"/>
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
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
<<<<<<< HEAD
            </Col>
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
            
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
        </div>
    );
}; 