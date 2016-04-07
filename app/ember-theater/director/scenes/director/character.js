import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Director/character',

  start: async function(script) {
    script.Backdrop('classroom').transition('transition.fadeIn');
    const emma = script.Character('emma').position('offLeft', 0).position('center', 1500);
    await emma.Text('theaters.character.intro.emmaGreeting');

    const bitsy = script.Character('bitsy').initialExpression('laughing').position('center', 0).transition('transition.bounceUpIn', 1000).position('centerRight', 500).namePosition('right');
    emma.position('centerLeft', 500).expression('panic');
    await bitsy.Text('theaters.character.intro.bitsyGreeting');

    bitsy.expression('happy');
    await emma.expression('embarrassed').Text('theaters.character.intro.emmaHiding');
    emma.expression('neutral');
    await bitsy.Text('theaters.character.intro.bitsyHiding');

    emma.expression('laughing');
    await emma.Text('theaters.character.intro.emmaCharacters');
    emma.delay(250).expression('neutral');
    bitsy.expression('surprised');
    await bitsy.Text('theaters.character.intro.bitsyCharacters');

    bitsy.expression('neutral');
    await emma.Text('theaters.character.intro.emmaPosition');
    await emma.position('left', 500).Text('theaters.character.intro.emmaPositionLeft');
    await emma.position('farLeft', 500).Text('theaters.character.intro.emmaPositionFarLeft');
    bitsy.expression('bored');
    await emma.position('offLeft', 500).Text('theaters.character.intro.emmaPositionOffLeft');
    await emma.position('centerLeft', 500).Text('theaters.character.intro.emmaPositionCenterLeft');
    await emma.position('nudgeLeft', 500).Text('theaters.character.intro.emmaPositionNudgeLeft');
    await emma.position('nudgeLeft', 500).Text('theaters.character.intro.emmaPositionNudgeLeftAgain');
    await emma.position('nudgeUp', 500).Text('theaters.character.intro.emmaPositionNudgeUp');
    await emma.position('nudgeDown', 500).Text('theaters.character.intro.emmaPositionNudgeDown');
    await emma.position('nudgeBack', 500).Text('theaters.character.intro.emmaPositionNudgeBack');
    await emma.position('nudgeForward', 500).Text('theaters.character.intro.emmaPositionNudgeForward');
    await emma.Text('theaters.character.intro.emmaPositionConfig');

    await bitsy.Text('theaters.character.intro.bitsyPosition');
    await emma.Text('theaters.character.intro.emmaPosition2');
    bitsy.position('farRight', 2000).expression('neutral');
    await bitsy.Text('theaters.character.intro.bitsyPosition2');
    emma.position('farRight', 3000).position('right', 1000).expression('laughing');
    bitsy.delay(3000).expression('laughing');
    await emma.Text('theaters.character.intro.emmaPosition3');
    await bitsy.Text('theaters.character.intro.bitsyPosition3');
    await script.Delay(250);

    emma.position('centerLeft', 2500).expression('neutral');
    await bitsy.position('centerRight', 2500).delay(300).expression('neutral');
    await emma.Text('theaters.character.intro.emmaTransition');
    emma.transition('callout.bounce', 750).transition('callout.bounce', 600).transition('callout.bounce').transition('transition.perspectiveDownOut', 1000).transition('transition.bounceUpIn', 1000).delay(250);
    await bitsy.delay(1750).expression('laughing').Text('theaters.character.intro.bitsyTransition').delay(2000);

    await emma.Text('theaters.character.intro.emmaTransition2');
    bitsy.transition('callout.bounce').expression('neutral');
    await bitsy.Text('theaters.character.intro.bitsyTransition2');
    await emma.Text('theaters.character.intro.emmaTransition3');
    bitsy.transition('callout.swing');
    await bitsy.Text('theaters.character.intro.bitsyTransition3');
    emma.expression('laughing');
    await emma.Text('theaters.character.intro.emmaTransition4');
    bitsy.transition('transition.bounceUpIn').expression('laughing');
    await bitsy.Text('theaters.character.intro.bitsyTransition4');
    await emma.Text('theaters.character.intro.emmaTransition5');
    bitsy.transition('callout.bounce').transition('callout.swing').transition('transition.bounceUpIn').expression('laughing');
    await bitsy.Text('theaters.character.intro.bitsyTransition5');

    emma.delay(500).expression('neutral');
    await emma.Text('theaters.character.intro.emmaInstance');
    const emma2 = script.Character('emma').position('farRight', 0).transition('transition.whirlIn').name('Emma 2').namePosition('right');
    bitsy.delay(1000).expression('surprised');
    await emma2.Text('theaters.character.intro.emma2Instance');
    await bitsy.namePosition('center').delay(500).position('nudgeLeft', 1500).delay(1000).position('nudgeLeft', 1500).delay(1500).position('nudgeLeft', 1000).Text('theaters.character.intro.bitsyInstance');
    await emma.Text('theaters.character.intro.emmaInstance2');
    await emma2.Text('theaters.character.intro.emma2Instance2');
    bitsy.delay(1000).position('nudgeLeft', 1000);
    await emma2.position('centerRight', 2500).Text('theaters.character.intro.emma2Instance3');
    emma2.delay(250).position('right').expression('embarrassed');
    emma.delay(250).expression('sad');
    await bitsy.transition('callout.shake').transition('callout.shake').expression('panic').Text('theaters.character.intro.bitsyPanic');
    await emma.Text('theaters.character.intro.emmaPanic');
    await bitsy.expression('blush').Text('theaters.character.intro.bitsyForgive');
    await emma.Text('theaters.character.intro.emmaInstanceConclude');
    bitsy.expression('neutral');
    await emma2.Text('theaters.character.intro.emma2InstanceConclude');
    await emma.expression('neutral').Text('theaters.character.intro.emmaInstanceConclude2');
    await emma2.delay(500).transition('transition.whirlOut').Text('theaters.character.intro.emma2InstanceConclude2');
    await bitsy.namePosition('right').Text('theaters.character.intro.bitsyInstanceConclude');

    await emma.Text('theaters.character.intro.emmaExpression');
    await bitsy.position('center', 500).expression('laughing').Text('theaters.character.intro.bitsyExpression');
    await emma.expression('laughing');
    await emma.delay(500).expression('neutral').Text('theaters.character.intro.emmaExpression2');
    await bitsy.expression('neutral').Text('theaters.character.intro.bitsyExpression2');
    await emma.Text('theaters.character.intro.emmaExpression3');
    await bitsy.expression('happy').Text('theaters.character.intro.bitsyExpression3');

    await emma.Text('theaters.character.intro.emmaName');
    await emma.name('Em').Text('theaters.character.intro.emmaName2');
    await bitsy.name('theaters.character.intro.bitsysNewName').expression('angry').Text('theaters.character.intro.bitsyName');

    await emma.name('Emma').Text('theaters.character.intro.emmaNamePosition');
    await bitsy.namePosition('center').Text('theaters.character.intro.bitsyNamePositionCenter');
    await bitsy.namePosition('left').Text('theaters.character.intro.bitsyNamePositionLeft');
    await bitsy.namePosition('right').Text('theaters.character.intro.bitsyNamePositionRight');
    await emma.expression('laughing').Text('theaters.character.intro.emmaNamePositionPraise');

    await bitsy.expression('laughing').Text('theaters.character.intro.bitsyBye');
    await emma.Text('theaters.character.intro.emmaBye');

    emma.position('offLeft', 750);
    bitsy.delay(500).position('offLeft', 1000);
  }
});
