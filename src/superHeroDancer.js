var MakeSuperHearDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node = $(<span class="dancer" id="superHeroDancer"></span>);
  this.$node = $('<span class="dancer" id="superHeroDancer" ><img src="../gif/batman.gif" class="animated-gif"></img></span>');
  this.oldStep = MakeDancer.prototype.step;
  this.oldStep();
  this.setPosition(top, left);
};

MakeSuperHearDancer.prototype = Object.create(MakeDancer.prototype);
MakeSuperHearDancer.prototype.constructor = MakeSuperHearDancer;

MakeSuperHearDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep.call(this, this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

