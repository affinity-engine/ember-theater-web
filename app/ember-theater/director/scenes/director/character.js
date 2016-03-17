import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Director/character',

  script: async function() {
    this.Backdrop('classroom').transition('transition.fadeIn');
    const emma = this.Character('emma').position('offLeft', 0).position('center', 1000);
    await emma.Text('theaters.character.intro.emmaGreeting');

    const bitsy = this.Character('bitsy').initialExpression('bitsy-laughing').position('center', 0).transition('transition.bounceUpIn', 1000).position('centerRight', 500).namePosition('right');
    emma.position('centerLeft', 500).Expression('emma-panic');
    // await bitsy.Text('theaters.character.intro.bitsyGreeting');
    //
    // bitsy.Expression('bitsy-happy');
    // await emma.Expression('emma-embarrassed').Text('theaters.character.intro.emmaHiding');
    // emma.Expression('emma-neutral');
    // await bitsy.Text('theaters.character.intro.bitsyHiding');
    //
    // emma.Expression('emma-laughing');
    // await emma.Text('theaters.character.intro.emmaCharacters');
    // emma.Expression('emma-neutral').delay(250);
    // bitsy.Expression('bitsy-surprised');
    // await bitsy.Text('theaters.character.intro.bitsyCharacters');
    //
    // bitsy.Expression('bitsy-neutral');
    // await emma.Text('theaters.character.intro.emmaPosition');
    // await emma.position('left').Text('theaters.character.intro.emmaPositionLeft');
    // await emma.position('farLeft').Text('theaters.character.intro.emmaPositionFarLeft');
    // bitsy.Expression('bitsy-bored');
    // await emma.position('offLeft').Text('theaters.character.intro.emmaPositionOffLeft');
    // await emma.position('centerLeft').Text('theaters.character.intro.emmaPositionCenterLeft');
    // await emma.position('nudgeLeft').Text('theaters.character.intro.emmaPositionNudgeLeft');
    // await emma.position('nudgeLeft').Text('theaters.character.intro.emmaPositionNudgeLeftAgain');
    // await emma.position('nudgeUp').Text('theaters.character.intro.emmaPositionNudgeUp');
    // await emma.position('nudgeDown').Text('theaters.character.intro.emmaPositionNudgeDown');
    // await emma.position('nudgeBack').Text('theaters.character.intro.emmaPositionNudgeBack');
    // await emma.position('nudgeForward').Text('theaters.character.intro.emmaPositionNudgeForward');
    // await emma.Text('theaters.character.intro.emmaPositionConfig');
    //
    // await bitsy.Text('theaters.character.intro.bitsyPosition');
    // await emma.Text('theaters.character.intro.emmaPosition2');
    // bitsy.position('farRight', 2000).Expression('bitsy-neutral');
    // await bitsy.Text('theaters.character.intro.bitsyPosition2');
    // emma.position('farRight', 3000).position('right', 1000).Expression('emma-laughing');
    // bitsy.Expression('bitsy-laughing').delay(3000);
    // await emma.Text('theaters.character.intro.emmaPosition3');
    // await bitsy.Text('theaters.character.intro.bitsyPosition3');
    // await this.Pause(250);
    //
    // emma.position('centerLeft', 2500).Expression('emma-neutral');
    // await bitsy.position('centerRight', 2500).Expression('bitsy-neutral').delay(300);
    // await emma.Text('theaters.character.intro.emmaTransition');
    // emma.transition('callout.bounce', 750).transition('callout.bounce', 600).transition('callout.bounce').transition('transition.perspectiveDownOut', 1000).transition('transition.bounceUpIn', 1000).delay(250);
    // await bitsy.Expression('bitsy-laughing').delay(1750).Text('theaters.character.intro.bitsyTransition').delay(2000);
    //
    // await emma.Text('theaters.character.intro.emmaTransition2');
    // bitsy.transition('callout.bounce').Expression('bitsy-neutral');
    // await bitsy.Text('theaters.character.intro.bitsyTransition2');
    // await emma.Text('theaters.character.intro.emmaTransition3');
    // bitsy.transition('callout.swing');
    // await bitsy.Text('theaters.character.intro.bitsyTransition3');
    // emma.Expression('emma-laughing');
    // await emma.Text('theaters.character.intro.emmaTransition4');
    // bitsy.transition('transition.bounceUpIn').Expression('bitsy-laughing');
    // await bitsy.Text('theaters.character.intro.bitsyTransition4');
    // await emma.Text('theaters.character.intro.emmaTransition5');
    // bitsy.transition('callout.bounce').transition('callout.swing').transition('transition.bounceUpIn').Expression('bitsy-laughing');
    // await bitsy.Text('theaters.character.intro.bitsyTransition5');

    emma.Expression('emma-neutral').delay(500);
    await emma.Text('theaters.character.intro.emmaInstance');
    const emma2 = this.Character('emma').position('farRight', 0).transition('transition.whirlIn').name('Emma 2').namePosition('right');
    bitsy.Expression('bitsy-surprised').delay(1000);
    await emma2.Text('theaters.character.intro.emma2Instance');
    await bitsy.namePosition('center').position('nudgeLeft', 1500).position('nudgeLeft', 1500, { delay: 1000 }).position('nudgeLeft', 1000, { delay: 1500 }).delay(500).Text('theaters.character.intro.bitsyInstance');
    await emma.Text('theaters.character.intro.emmaInstance2');
    await emma2.Text('theaters.character.intro.emma2Instance2');
    bitsy.position('nudgeLeft', 1000).delay(1000);
    await emma2.position('centerRight', 2500).Text('theaters.character.intro.emma2Instance3');
    emma2.position('right').Expression('emma-embarrassed').delay(250);
    emma.Expression('emma-sad').delay(250);
    await bitsy.transition('callout.shake').transition('callout.shake').Expression('bitsy-panic').Text('theaters.character.intro.bitsyPanic');
    await emma.Text('theaters.character.intro.emmaPanic');
    await bitsy.Expression('bitsy-blush').Text('theaters.character.intro.bitsyForgive');
    await emma.Text('theaters.character.intro.emmaInstanceConclude');
    bitsy.Expression('bitsy-neutral');
    await emma2.Text('theaters.character.intro.emma2InstanceConclude');
    await emma.Expression('emma-neutral').Text('theaters.character.intro.emmaInstanceConclude2');
    await emma2.transition('transition.whirlOut').delay(500).Text('theaters.character.intro.emma2InstanceConclude2');
    await bitsy.namePosition('right').Text('theaters.character.intro.bitsyInstanceConclude');

    await emma.Text('theaters.character.intro.emmaExpression');
    await bitsy.position('center').Expression('bitsy-laughing').Text('theaters.character.intro.bitsyExpression');
    await emma.Expression('emma-laughing');
    await emma.Expression('emma-neutral').delay(500).Text('theaters.character.intro.emmaExpression2');
    await bitsy.Expression('bitsy-neutral').Text('theaters.character.intro.bitsyExpression2');
    await emma.Text('theaters.character.intro.emmaExpression3');
    await bitsy.Expression('bitsy-happy').Text('theaters.character.intro.bitsyExpression3');

    await emma.Text('theaters.character.intro.emmaName');
    await emma.name('Em').Text('theaters.character.intro.emmaName2');
    await bitsy.name('theaters.character.intro.bitsysNewName').Expression('bitsy-angry').Text('theaters.character.intro.bitsyName');

    await emma.name('Emma').Text('theaters.character.intro.emmaNamePosition');
    await bitsy.namePosition('center').Text('theaters.character.intro.bitsyNamePositionCenter');
    await bitsy.namePosition('left').Text('theaters.character.intro.bitsyNamePositionLeft');
    await bitsy.namePosition('right').Text('theaters.character.intro.bitsyNamePositionRight');
    await emma.Expression('emma-laughing').Text('theaters.character.intro.emmaNamePositionPraise');

    await bitsy.Expression('bitsy-laughing').Text('theaters.character.intro.bitsyBye');
    await emma.Text('theaters.character.intro.emmaBye');

    emma.position('offLeft', 750);
    bitsy.position('offLeft', 1000).delay(500);
  }
});
