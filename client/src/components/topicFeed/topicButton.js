import React from "react";
import "./topicButton.css";

export const TopicButton = props =>{
    return (
    <div>
    <button  type="button" className="btn btn-outline-primary postButton create-topic" onClick={props.handleSubmit}>Post</button>
    </div>
    )
}
export default TopicButton;