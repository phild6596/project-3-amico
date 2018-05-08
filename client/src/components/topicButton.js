import React from "react";

export const TopicButton = props =>{
    return (
    <button {...props} type="button" className="btn btn-outline-primary postButton create-topic" onClick={() => this.onClick()}>
        Post
    </button>
    )
}
export default TopicButton;