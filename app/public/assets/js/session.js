$( document ).ready(function(){

  $(document).on('click','.logout-action',function(){
    firebase.auth().signOut();
    window.location = '/';
    console.log('SIGNED OUT!');
  })    
});