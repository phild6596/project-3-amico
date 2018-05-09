import React from "react";


export const TopicInput = props => {
  return (
        <div className="col-md-12 col-sm-12">
           <form acceptCharset="UTF-8">
             <input className="expand form-control message-input-button-position" id="topic-text-box" {...props} rows="1" />
             <div className="float-right">
               <small className="pull-left text-muted"  id="count_message" />
             </div>
           </form>
         </div>
  );
}
export default TopicInput;