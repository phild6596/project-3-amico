import React from "react";
import styling from "./topicButton.css";

export const TopicButton = props =>{
    return (
    <button  type="button" className="btn btn-outline-primary postButton create-topic" onClick={() => props.onClick(props.text)}>
        Post Topic
    </button>
    )
}
export default TopicButton;