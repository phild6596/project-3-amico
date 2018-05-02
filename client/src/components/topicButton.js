import React from "react";

export const TopicButton = props =>{
    return (
    <button {...props} type="button" class="btn btn-outline-primary postButton create-topic" onClick={() => props.createNewTopic()}>
        Post
    </button>
    )
}
export default TopicButton;