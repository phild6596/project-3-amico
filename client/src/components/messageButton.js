import React from "react";

export const MessageButton = props =>
    <button {...props} type="button" class="btn btn-outline-primary postButton create-topic" style={{ marginLeft:4 }} onClick={()=> {onClick()}}>
        Post
    </button>;