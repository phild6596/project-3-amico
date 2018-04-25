$( document ).ready(function(){

  let recentAmicos = [];
  const recentAmicosContainer = $('.recent-amicos-container')
  function displayUserProfile(user){

    if(firebase.auth().currentUser){
      if(firebase.auth().currentUser){
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
         $.ajax({
            url: '/profiles/'+user.uid,
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('idtoken',idToken)
            },
            data: {},
            success: function (currentUser) {
             
              $('.current-user-email').text(currentUser.email);
              $('.current-user-bio').text(currentUser.bio);
              $('.current-user-name').html(currentUser.displayName);
              $('.current-user-avatar').attr("src",currentUser.avatarUrl);

            },
            error: function () { },
        });
       })
    
   

      /*
     */
    }
       else{
        //POP UP MODAL FOR NOT LOGGED IN
        console.log('Not logged in...');
      }
    }
  
}

  function formatUser(data){
    const user = data;
    const recentUserElement = '<li class="media recent-amico-entry">'+
                          '<a class="media-left" href="#">'+
                            '<img class="media-object d-flex align-self-start mr-3" src="' + user.avatarUrl + '">'+
                          '</a>'+
                          '<div class="media-body">'+
                            '<strong>'+ user.displayName + '</strong>'+
                            '<div class="media-body-actions">'+
                            '<span class="text-muted icon glyphicon glyphicon-globe mr-3">'+
                            '</span>Native language <a href="#">Tamil</a>'+
                              '<button class="btn btn-outline-primary btn-sm">'+
                                '<span class="icon glyphicon glyphicon-envelope"></span> Message</button>'+
                            '</div>'+
                          '</div>'+
                        '</li>';
      return recentUserElement;
  }


  function getRecentUsers(){
    if(firebase.auth().currentUser){
      if(firebase.auth().currentUser){
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
         $.ajax({
            url: '/profiles/',
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('idtoken',idToken)
            },
            data: {},
            success: function (recentUsers) {
             
             console.log(recentUsers);
             recentAmicos = [];
             recentAmicosContainer.empty();

             recentUsers.map(function(user){

              recentAmicos.unshift(formatUser(user));

             })
             recentAmicosContainer.append(recentAmicos);
            },
            error: function () { },
        });
       })
 
    }
       else{
        //POP UP MODAL FOR NOT LOGGED IN
        console.log('Not logged in...');
      }
    }




  }
  function initialize(){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      displayUserProfile(user);
      getRecentUsers();
      console.log(user);
    } else {
      // No user is signed in.
    }
    });
  }

  initialize();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      displayUserProfile(user);
      //console.log(user);
    } else {
      // No user is signed in.
    }
    });
 
});