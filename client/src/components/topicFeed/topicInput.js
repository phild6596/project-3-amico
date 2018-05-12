import React from "react";
import './topicInput.css';

export const TopicInput = props => {
  return (
      <div class="col-md-12 col-sm-12">
                    
      <ul class="list-group media-list media-list-stream mb-4 ">

        <li class="media list-group-item p-4 new-topic-box">
          <div class="col-md-12 col-sm-12">
            <form accept-charset="UTF-8">
                <textarea className="expand form-control message-input-button-position" id="topic-text-box" name="text" placeholder="Type in your topic" rid="topic-text-box" {...props} rows="4" />
            </form>
            <div>
                  <button  type="button" className="btn btn-outline-primary postButton create-topic" onClick={props.handleSubmit}>Post</button></div>
            </div>

            

        </li>        
      </ul>
      </div>
  );
}
export default TopicInput;
