import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Welcome',

  start: async function(script) {
    script.Backdrop('classroom');
    const bitsy = script.Character('bitsy').position('offLeft', 0).position('center', 1500).namePosition('right');
    await bitsy.Text('theaters.welcome.bitsyGreeting');

    const emma = script.Character('emma').expression('happy').position('offLeft', 0).position('centerLeft', 1000);
    bitsy.position('centerRight', 1000);
    await emma.Text('theaters.welcome.emmaGreeting');

    await bitsy.expression('happy').Text('theaters.welcome.bitsyMakeGames');
    await emma.expression('neutral').Text('theaters.welcome.emmaMakeGames');

    bitsy.expression('panic');
    await bitsy.Text('theaters.welcome.bitsyShock');
    bitsy.expression('laughing');
    await bitsy.Text('theaters.welcome.bitsyFun');
    emma.expression('laughing');
    await emma.Text('theaters.welcome.emmaFun');

    bitsy.expression('happy');
    emma.expression('neutral');
    await bitsy.Text('theaters.welcome.bitsyShare');
    await emma.expression('happy').Text('theaters.welcome.emmaShare');
    await bitsy.expression('laughing').Text('theaters.welcome.bitsyNext');
    bitsy.delay(100).position('offLeft', 1300);
    await emma.delay(200).expression('laughing').delay(500).position('center', 500).Text('theaters.welcome.emmaNext');
    await emma.expression('neutral').Text('theaters.welcome.emmaNext2');
    emma.delay(100).position('offLeft', 1000);
  }
});
