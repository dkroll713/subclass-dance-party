var MakePugDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $(
    `<span class="dancer" id="pugDancer"><img class="animated-gif" src="gif/pug.gif"></img>
    </span>`);

  this.oldStep = MakeDancer.prototype.step;
  this.oldStep();
  this.setPosition(top, left);
};

MakePugDancer.prototype = Object.create(MakeDancer.prototype);
MakePugDancer.prototype.constructor = MakePugDancer;

MakePugDancer.prototype.step = function() {
  this.oldStep(this.timeBetweenSteps);
  // this.$node.toggle();
};

{/* <div class="tenor-gif-embed" id="pugDancer" data-postid="17357329" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/pug-dance-moves-cute-gif-17357329">Pug Dance GIF</a>from <a href="https://tenor.com/search/pug-gifs">Pug GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}