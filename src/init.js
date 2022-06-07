$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(this);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    // console.log(dancerMakerFunctionName);
    // console.log(dancerMakerFunction);
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addPugButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
});

$('.addSuperHerobutton').on('click', function(event) {
  var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
  var dancerMakerFunction = window[dancerMakerFunctionName];
  var dancer = new dancerMakerFunction(
    $("body").height() * Math.random(),
    $("body").width() * Math.random(),
    Math.random() * 1000
  );
  $('body').append(dancer.$node);
});

$('.lineUp').on('click', function(event) {
  var dancers = document.getElementsByClassName('dancer');
  for (var dancer = 0; dancer < dancers.length; dancer++) {
    var style = dancers[dancer].style;
    // if (style.top !== 50) {
    //   style.top = 50;
    // }
    if (style.left !== 0) {
      style.left = 0;
    }
    console.log('top:', style.top, 'left:', style.left);
  }
});

$('.BackToDancing').on('click', function(event) {
  console.log(event);
  var dancers = document.getElementsByClassName('dancer');

  for (var dancer = 0; dancer < dancers.length; dancer++) {
    var style = dancers[dancer].style;
    var newTop = $("body").height() * Math.random();
    var newLeft = $("body").width() * Math.random();
    style.top = newTop + 'px';
    style.left = newLeft + 'px';
    // somehow call setPosition(newTop, newLeft)
    console.log('top:', style.top, 'left:', style.left);
  }
});

$(document).on('click', function(event) {
  var clientX = event.clientX;
  var clientY = event.clientY;
  console.log('x', clientX);
  console.log('y', clientY);
  var dancers = document.getElementsByClassName('dancer');
  for (var dancer = 0; dancer < dancers.length; dancer++) {
    var style = dancers[dancer].style;
    if (clientY > 50) {
      style.left = clientX + 'px';
    }
  }
});