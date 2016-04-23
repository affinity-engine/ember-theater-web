import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Fixtures',

  start: async function(script) {
    script.Backdrop('classroom');

    const bitsy = script.Character('bitsy').expression('angry').position('center', 0).transition('transition.fadeIn').namePosition('right');
    await bitsy.Text('theaters.configuration.bitsyGrumble');

    const emma = script.Character('emma').position('offLeft', 0).position('left', 1000);
    await emma.Text('theaters.configuration.emmaEnter');

    await bitsy.expression('bored').Text('theaters.configuration.bitsyNotGreat');
    await emma.expression('sad').Text('theaters.configuration.emmaNotGreat');
    await bitsy.expression('angry').Text('theaters.configuration.bitsyConfigure');
    await emma.expression('happy').Text('theaters.configuration.emmaConfigure');
    await bitsy.expression('neutral').Text('theaters.configuration.bitsyBlue');
    await bitsy.Text('theaters.configuration.bitsyBlue2').classNames(['et-block', 'et-coastal']);
    await emma.expression('neutral').Text('theaters.configuration.emmaBlue').classNames(['et-block', 'et-coastal']);
    await bitsy.expression('happy').Text('theaters.configuration.bitsyTransition').classNames(['et-block', 'et-coastal']).transitionIn('transition.expandIn', 1000).transitionOut('transition.shrinkOut');
    await emma.expression('happy').Text('theaters.configuration.emmaTransition').classNames(['et-block', 'et-coastal']).transitionIn('transition.expandIn', 1000).transitionOut('transition.shrinkOut');
    await bitsy.expression('laughing').Text('theaters.configuration.bitsyOkay').classNames(['et-block', 'et-coastal']).transitionIn('transition.expandIn', 1000).transitionOut('transition.shrinkOut');
    await emma.expression('laughing').Text('theaters.configuration.emmaOkay').classNames(['et-block', 'et-coastal']).transitionIn('transition.expandIn', 1000).transitionOut('transition.shrinkOut');

    emma.delay(100).position('offLeft', 1000);

    await bitsy.delay(750).expression('neutral');

    expressionLoop(script, bitsy);
  }
});
