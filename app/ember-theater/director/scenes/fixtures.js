import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Fixtures',

  start: async function(script) {
    script.Backdrop('classroom');

    const emma = script.Character('emma').position('centerLeft');
    const bitsy = script.Character('bitsy').position('centerRight').namePosition('right');

    await emma.Text('theaters.fixtures.emmaIntro');
    await bitsy.expression('happy').Text('theaters.fixtures.bitsyIntro');
    await emma.expression('surprised').Text('theaters.fixtures.emmaBigReveal');
    await bitsy.expression('panic').Text('theaters.fixtures.bitsyBigReveal');
    await emma.expression('laughing').Text('theaters.fixtures.emmaAttributes');
    await bitsy.expression('angry').Text('theaters.fixtures.bitsyWeird');
    await emma.expression('sad').Text('theaters.fixtures.emmaWeird');
    await bitsy.expression('bored').Text('theaters.fixtures.bitsyApology');
    await emma.expression('neutral').Text('theaters.fixtures.emmaApology');
    await bitsy.expression('blush').Text('theaters.fixtures.bitsyXray');
    await emma.expression('happy').Text('theaters.fixtures.emmaXray');
    await bitsy.expression('neutral').Text('theaters.fixtures.bitsyYakChat');
    await emma.expression('neutral').Text('theaters.fixtures.emmaYakChat');
    await bitsy.expression('bored').Text('theaters.fixtures.bitsyWhy');
    await emma.expression('happy').Text('theaters.fixtures.emmaWhy');
    await bitsy.expression('neutral').Text('theaters.fixtures.bitsyUse');
    await emma.expression('neutral').Text('theaters.fixtures.emmaUse');
    await bitsy.expression('happy').Text('theaters.fixtures.bitsy100');
    await emma.expression('happy').Text('theaters.fixtures.emma100');
    await bitsy.expression('neutral').Text('theaters.fixtures.bitsyConclude');
    await emma.expression('neutral').Text('theaters.fixtures.emmaConclude');

    bitsy.delay(100).position('offLeft', 1300);
    emma.delay(100).position('offLeft', 1000);
  }
});
