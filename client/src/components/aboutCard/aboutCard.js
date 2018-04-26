import React from 'react';

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
        </div>
    );
};