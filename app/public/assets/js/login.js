$( document ).ready(function(){

  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/home',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
       firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '<your-tos-url>'
  };

  ui.start('#firebaseui-auth-container', uiConfig);

$(".register form").on("submit", function(event){
    event.preventDefault();
        $(document).ready(function() {

    var email = $(".register .email").val();
    var password = $(".register .password").val();
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user){
            console.log(user);
        })
        .catch(function(err){
            console.log(err);
        });   
      });

    })
});

  












