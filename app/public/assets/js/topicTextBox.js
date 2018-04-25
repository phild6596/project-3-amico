$(document).ready(function() {
    var text_max = 200;
    $('#count_message').html(text_max + ' remaining');
    
    $('#topic-text-box').keyup(function() {
      var text_length = $('#topic-text-box').val().length;
      var text_remaining = text_max - text_length;
      
      $('#count_message').html(text_remaining + ' remaining');
    });

    $('input.expand').blur(function () {
        $(this).animate({ width: "9.7em"}, 500); 
    });

    $('input.expand').focus(function () {
        $(this).animate({ width: "15em"}, 500); 
    });
    
    $('textarea.expand').blur(function () {
        $(this).animate({ height: "2.4em" }, 500); 
    });

    $('textarea.expand').focus(function () {
        $(this).animate({ height: "8em" }, 500); 
    });
    });