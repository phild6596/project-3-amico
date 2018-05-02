import React from "react";
import { TopicButton } from "./topicButton";

export const InputBar = props => {
  return (
        <div class="col-md-12 col-sm-12">
           <form accept-charset="UTF-8">
             <textarea class="expand form-control message-input-button-position" id="topic-text-box" name="text" placeholder="Type in your message" rows="1" />
             <div class="float-right">
               <small class="pull-left text-muted"  id="count_message" />
              <TopicButton />
             </div>
           </form>
         </div>
  );
}
export default InputBar;