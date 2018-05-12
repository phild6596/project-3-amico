import React from 'react';
import {Image} from 'react-bootstrap';
import  './profileCard.css';

export const ProfileCard = (props) => {
    return(
        <div>
        <div className="profile-header text-center">
        <div className="container">
        <div className="container-inner">
            <Image className="img-circle media-object current-user-avatar"  src={props.user.avatarUrl}/>
            <h3 className="profile-header-user current-user-name"> {props.user.displayName} </h3>
            <p className="profile-header-bio current-user-bio">
            
            </p>
        </div>
        </div>
   
        <nav className="profile-header-nav">
            <ul className="nav nav-tabs">
                <li className="active">
                <a>About you</a>
                </li>
            </ul>
        </nav>
        </div>


        <div className="card d-md-block d-md-block mb-4">
            <div className="card-body">
                <ul className="list-unstyled list-spaced">
                    <li><span className="text-muted icon glyphicon glyphicon-home mr-3"> Lives: </span>{props.user.lives}</li>
                    <li><span className="text-muted icon glyphicon glyphicon-map-marker mr-3"> From: </span>{props.user.from}</li>
                    <li><span className="text-muted icon glyphicon glyphicon-globe mr-3"> NativeLanguage: </span>{props.user.nativeLanguage}</li>
                    <li><span className="text-muted icon glyphicon glyphicon-education mr-3"> Studying: </span>{props.user.studiedLanguage}</li>
                    <li><span className="text-muted icon glyphicon glyphicon-user mr-3"> UID: </span>{props.user.uid}</li>
                </ul>
            </div>
        </div>
        </div>
    );
};