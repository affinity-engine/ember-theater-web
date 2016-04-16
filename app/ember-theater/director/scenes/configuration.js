import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Configuration',

  start: async function(script) {
    script.Backdrop('classroom');

    const bitsy = script.Character('bitsy').expression('bored').position('center', 0).transition('transition.fadeIn').namePosition('right');
    await bitsy.Text('theaters.configuration.bitsyGrumble');

    const emma = script.Character('emma').position('offLeft', 0).position('left', 1000);
    await emma.Text('theaters.configuration.emmaEnter');

    await bitsy.expression('angry').Text('theaters.configuration.bitsyNotGreat');
    await emma.expression('sad').Text('theaters.configuration.emmaNotGreat');
    await bitsy.expression('bored').Text('theaters.configuration.bitsyConfigure');
    await emma.expression('happy').Text('theaters.configuration.emmaConfigure');
    await bitsy.expression('neutral').Text('theaters.configuration.bitsyBlue').classNames(['et-block', 'et-coastal']);
    await emma.expression('neutral').Text('theaters.configuration.emmaBlue').classNames(['et-block', 'et-coastal']);
    await bitsy.expression('happy').Text('theaters.configuration.bitsySpeed').classNames(['et-block', 'et-coastal']).textSpeed(15);
    await emma.expression('bored').Text('theaters.configuration.emmaSpeed').classNames(['et-block', 'et-coastal']).textSpeed(15);
    bitsy.expression('laughing');
    await script.Delay(500, ' ');
    await bitsy.expression('embarrassed').Text('theaters.configuration.bitsySorry').classNames(['et-block', 'et-coastal']);
    await emma.expression('neutral').Text('theaters.configuration.emmaSorry').classNames(['et-block', 'et-coastal']);
    await bitsy.expression('laughing').Text('theaters.configuration.bitsyOkay').classNames(['et-block', 'et-coastal']);
    await emma.expression('laughing').Text('theaters.configuration.emmaOkay').classNames(['et-block', 'et-coastal']);

    emma.delay(100).position('offLeft', 1000);

    bitsy.delay(750).expression('neutral');
  }
});
