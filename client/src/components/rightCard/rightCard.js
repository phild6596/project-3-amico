import React from 'react';
import Avatar1 from  '../../assets/avatar-random.png';
import Avatar2 from  '../../assets/avatar-random-2.png';
import './rightCard.css';

export const RightCard = (props) => {
    return(

        <div className= "row">
            <div className="col-md-12 col-sm-">
            <div className="alert alert-warning alert-dismissible d-none d-md-block" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close"></button>
                <a className="alert-link" href="profile/index.html">Visit your profile!</a>
                <p>Check your self, you aren't looking well.</p>
            </div>
            

            <div className="card mb-4 d-none d-md-block">
                <div className="card-body">
                <h6 className="mb-3">Users <small>· <a>View All</a></small></h6>
                <ul className="media-list media-list-stream">

                <li className="media mb-2">
                <a className="">
                    <img src={Avatar1} alt="user_pic" className="rounded-circle img-responsive topic-avatar-photo media-object d-flex align-self-start mr-3"/>
                </a> 
                    <div className="media-body">
                    <strong>Random Random</strong> @fat
                    <div className="media-body-actions">
                    <span className="text-muted icon glyphicon glyphicon-globe mr-3"></span>Native language<a>Tamil</a>
                    <div>
                        <button className="btn btn-outline-primary btn-sm">Follow</button>
                    </div>
                    </div>
                    </div>
                </li>

                <li className="media mb-2">
                <a className="">
                    <img src={Avatar2} alt="user_pic" className="rounded-circle img-responsive topic-avatar-photo media-object d-flex align-self-start mr-3"/>
                </a>
                    <div className="media-body">
                    <strong>Cool Dude</strong> @weak
                    <div className="media-body-actions">
                    <span className="text-muted icon glyphicon glyphicon-globe mr-3"></span>Native language<a>Tamil</a>
                    <div>
                        <button className="btn btn-outline-primary btn-sm">Follow</button>
                    </div>
                    </div>
                    </div>
                </li>
                </ul>
                </div>
                <div className="card-footer"> Follow suggested people to know about their side of the story. </div>
            </div>
            </div>

        </div>

        
    );
}; 