import React from "react";
import "./topicRow.css"

export const TopicRow = props => {
  return (
        <div className="topic-row">
        <div className="col-md-12 col-sm-12">
            <div className="media list-group-item p-4 new-topic-box">
                <a href={"/profile/" + props.topic.authorId}>
                    <img src={props.topic.authorAvatarUrl} alt="user_pic" className="rounded-circle img-responsive topic-avatar-photo"/>
                </a>

                <a href={"/profile/" + props.topic.authorId}>
                    <span className="topic-author-name">{props.topic.authorName}</span>
                </a>

                <div className="topic-text">{props.topic.text}</div>
                <div className="topic-timestamp">{props.topic.timestamp}</div>  

            </div>
        </div>
        </div>
  );
}
export default TopicRow;