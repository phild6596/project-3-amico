import React from "react";

export const InputBar = props => 
        <div class="col-md-12 col-sm-12">
           <form accept-charset="UTF-8">
             <textarea class="expand form-control message-input-button-position" id="topic-text-box" name="text" placeholder="Type in your message" rows="1" />
             <div class="float-right">
               <small class="pull-left text-muted" style="" id="count_message" />
               <button type="button" class="btn btn-outline-primary postButton create-topic" style="margin-left:4px">
                 Post
               </button>
             </div>
           </form>
         </div>;