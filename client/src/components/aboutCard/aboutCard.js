import React from 'react';
import {Image} from 'react-bootstrap';
import './aboutCard.css';
export const AboutCard = (props) => {
    return(

        <div className= "row">
            <div className="col-md-12 col-sm-12">
                <div className="card card-profile mb-4">
                <div className="card-header"></div>
                    <div className = "card-body text-center">
                        <Image src={props.user.avatarUrl} className="card-profile-img"/>
                        <h3>{props.user.displayName}</h3>
                    </div>
                </div>

                <div className="card d-md-block d-md-block mb-4">
                    <div className="card-body">
                        <h6 className="mb-3">About</h6>
                            <ul className="list-unstyled list-spaced">
                                <li><span className="text-muted icon glyphicon glyphicon-home mr-3"></span> Lives in<span className="user_props"> {props.user.lives}</span></li>
                                <li><span className="text-muted icon glyphicon glyphicon-map-marker mr-3"></span> From<span className="user_props"> {props.user.from}</span></li>
                                <li><span className="text-muted icon glyphicon glyphicon-globe mr-3"></span> Native Language<span className="user_props"> {props.user.nativeLanguage}</span></li>
                                <li><span className="text-muted icon glyphicon glyphicon-education mr-3"></span> Studying<span className="user_props"> {props.user.studiedLanguage}</span></li>
                                <li><span className="text-muted icon glyphicon glyphicon-user mr-3"></span> UID <span className="user_props"> {props.user.uid} </span></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>

        
    );
}; 