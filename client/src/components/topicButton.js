import React from "react";

export const TopicButton = props =>
    <button {...props} type="button" class="btn btn-outline-primary postButton create-topic" style={{ marginLeft:4 }} onClick={()=> {onClick()}}>
        Post
    </button>;

export default TopicButton;