var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  console.log(timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.oldStep = MakeDancer.prototype.step;
  this.oldStep();
  // this.step();
  this.setPosition(top, left);

  var colors = ['red', 'blue', 'yellow', 'purple', 'orange', 'green'];
  var colorMin = 0;
  var colorMax = colors.length - 1;
  var getrandomInt = function(max) {
    return Math.floor(Math.random() * max);
  };
  this.color = colors[getrandomInt(colorMax)];
  var styleSettings = {
    top: top,
    left: left,
    border: 10 + 'px solid ' + this.color
  };
  this.$node.css(styleSettings);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};


MakeBlinkyDancer.prototype.setPosition = function(top, left, color) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
    color: color
  };
  this.$node.css(styleSettings);
  console.log('blinky step', blinkyDancer.step);
  return blinkyDancer;
};