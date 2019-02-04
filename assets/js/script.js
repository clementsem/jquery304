$(document).ready(function(){

  $('#sizeButton').click(function() {
    $('#green').animate({width: '+=10px'});
    var width = $('#green').width();
    if (width >= 100)
    {
      $('#green').animate({width: '10px'});
    }
  });

  $('#colorButton').click(function() {
    $('#green').css('background', 'red');
  });

  $('#resetButton').click(function() {
    $('#green').css('background', 'green');
  });

  $('#hideButton').click(function() {
    $('#green').hide();
  });

  $('#displayButton').click(function() {
    $('#green').show();
  });
});
