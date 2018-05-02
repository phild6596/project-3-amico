import React from "react";
import { TopicButton } from "./topicButton";

export const InputBar = props => {
  return (
        <div className="col-md-12 col-sm-12">
           <form acceptCharset="UTF-8">
             <textarea className="expand form-control message-input-button-position" id="topic-text-box" name="text" placeholder="Type in your message" rows="1" />
             <div className="float-right">
               <small className="pull-left text-muted"  id="count_message" />
              <TopicButton />
             </div>
           </form>
         </div>
  );
}
export default InputBar;