describe('pugDancer', function() {

  var pugDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pugDancer = new MakePugDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pugDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(pugDancer.$node, 'toggle');
    pugDancer.step();
    expect(pugDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pugDancer, 'step');

      expect(pugDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pugDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pugDancer.step.callCount).to.be.equal(2);
    });
  });
});
