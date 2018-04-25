$(document).ready(() => {

    let translate = [];

  function getTranslations() {
    $.get("/api/home", function(data) {
      translate = data;
    });
  }

  function amicoTranslate(event) {
    event.preventDefault();
    var translate = {
      message: messageInput.val().trim(),
      languageOne: languageInputOne.val().trim(),
      languageTwo: languageinputTwo.val().trim()
    };

    $.post("/api/home", translate, getTranslations);
    $newTranslation.val("");
  }


     function  messageTranslate(newMessage) {
       $.post("/message", {
         newMessage: newMessage, 
       }).then(function(data) {
         console.log("Created new message");
         console.log(data);
       });
     };
 
    $(".postButton").on("click", function(event) {
      event.preventDefault();
      let newMessage = $("#messageInput").val().trim();
      console.log(newMessage);
      $("#messageInput").val("");
      $(".media-body").append();
      messageTranslate(newMessage);
    });

  


});