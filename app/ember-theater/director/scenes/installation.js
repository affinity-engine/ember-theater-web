import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Installation',

  start: async function(script) {
    script.Backdrop('classroom');

    const emma = script.Character('emma').expression('happy').position('offLeft', 0).position('centerLeft', 1000);
    await emma.Text('theaters.installation.emmaGreeting');

    const bitsy = script.Character('bitsy').expression('laughing').position('offRight', 0).position('centerRight', 800).namePosition('right');
    await bitsy.Text('theaters.installation.bitsyGreeting');

    await emma.Text('theaters.installation.emmaInstalling');
    await bitsy.expression('neutral').Text('theaters.installation.bitsyInstalling');
    await emma.expression('neutral').Text('theaters.installation.emmaCommandLine');
    await bitsy.expression('sad').Text('theaters.installation.bitsyCommandLine');
    await emma.expression('embarrassed').Text('theaters.installation.emmaCommandLineDetail');
    await bitsy.expression('embarrassed').Text('theaters.installation.bitsyCommandLineDetail');
    await emma.expression('neutral').Text('theaters.installation.emmaNoWorries');
    await bitsy.expression('angry').Text('theaters.installation.bitsyNoWorries');
    await emma.expression('happy').Text('theaters.installation.emmaGuide');
    await bitsy.expression('sad').Text('theaters.installation.bitsyGuide');
    await emma.expression('neutral').Text('theaters.installation.emmaUnderstand');
    await bitsy.expression('neutral').Text('theaters.installation.bitsyUnderstand');
    await emma.expression('happy').Text('theaters.installation.emmaBye');
    await bitsy.expression('happy').Text('theaters.installation.bitsyBye');

    bitsy.delay(100).position('offLeft', 1300);
    emma.delay(100).position('offLeft', 1000);
  }
});
