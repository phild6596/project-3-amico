$( document ).ready(function(){
  
  let topics = [];
  const topicContainer = $('#topic-container');
  const newTopicButton = $('.create-topic');

 

  function formatTopic(topic){
    const timestamp = moment.tz(topic.timestamp, moment.tz.guess()).format('h:mm:ss A - MM/DD/YYYY');
    let topicElement = '<li class="media list-group-item p-4 topic-element">'+
                        '<img class="media-object d-flex align-self-start mr-3" src="' +topic.authorAvatarUrl + ' ">'+
                        '<div class="media-body">'+
                          '<div class="media-heading">'+
                            '<small class="float-right text-muted">' + timestamp+'</small>'+
                            '<h6>' + topic.authorName + '</h6>'+
                        '</div>'+
                          '<p>'+
                            topic.text+
                          '</p>'+
                          '<a href="#">Discuss</a>'+
                        '</div>'+
                        '</li>';

    return topicElement;
  }
    
  function getTopics(){

   if(firebase.auth().currentUser){
      firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
        $.post('/topic/search',{language:'english',idToken:idToken})
        .then(function(data){
          topics = [];
           console.log(data)
           data.map(function(topic){
           topics.push(formatTopic(topic));
           });
           topicContainer.empty();
           topicContainer.append(topics);
         });
        }).catch(function(error) {
            //POP UP ERROR MODAL
            console.log('Error...' + error);
          });
    }
    else{
      //POPUP NOT SIGNED IN MODAL
      console.log('Not logged in...');
    }  
  }


  function createNewTopic(text){
    if(firebase.auth().currentUser){
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        $.post('/topic',{topic:{text:text},idToken:idToken}).then(function(data){
           console.log(data)
           getTopics();
         });
        }).catch(function(error) {
            //POP UP ERROR MODAL
            console.log('Error...' + error);
          });
    }
    else{
      //POPUP NOT SIGNED IN MODAL
      console.log('Not logged in...');
    }
  }

  function  messageTranslate(topicText) {
    $.post("/message", {
      topicText: topicText, //NewMessage
    }).then(function(data) {
        console.log("Created new message");
        console.log(data);
    });
  };


      
  $(document).on('click','.create-topic',function(){
    event.preventDefault();
    const topicText =  $('#topic-text-box').val().trim();
    createNewTopic(topicText);
    messageTranslate(topicText);
  })

  //wait for the user's session to change and if it is a user, then get the topics
   firebase.auth().onAuthStateChanged(function(user) {

       if(user){
          getTopics();
       }

   });

 

});