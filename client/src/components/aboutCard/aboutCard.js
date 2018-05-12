import React from 'react';
import {Col,Image} from 'react-bootstrap';
import  './aboutCard.css';
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
                                <li><span className="text-muted icon glyphicon glyphicon-home mr-3"> Lives: </span>{props.user.lives}</li>
                                <li><span className="text-muted icon glyphicon glyphicon-map-marker mr-3"> From: </span>{props.user.from}</li>
                                <li><span className="text-muted icon glyphicon glyphicon-globe mr-3"> NativeLanguage: </span>{props.user.nativeLanguage}</li>
                                <li><span className="text-muted icon glyphicon glyphicon-education mr-3"> Studying: </span>{props.user.studiedLanguage}</li>
                                <li><span className="text-muted icon glyphicon glyphicon-user mr-3"> UID: </span>{props.user.uid}</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}; 