import React from "react";
import "./topicRow.css"

export const TopicRow = props => {
  return (
        <div className="topic-row">
        
            <a href={"/profile/" + props.topic.authorId}>
                <img src={props.topic.authorAvatarUrl} alt="user_pic" className="rounded-circle img-responsive topic-avatar-photo"/>
                 
            </a>
            <a href={"/profile/" + props.topic.authorId}>
                <span className="topic-author-name">{props.topic.authorName}</span>
            </a>
            <div className="topic-text">{props.topic.text}</div>
            <div className="topic-timestamp">{props.topic.timestamp}</div>  
        </div>
  );
}
export default TopicRow;