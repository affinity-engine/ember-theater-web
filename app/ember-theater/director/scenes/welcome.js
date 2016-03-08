import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Welcome',

  script: async function() {
    this.Backdrop('classroom');
    const bitsy = this.Character('bitsy').position('offLeft', 0).position('center', 1000).namePosition('right');
    await bitsy.Text('theaters.welcome.bitsyGreeting');

    const emma = this.Character('emma').position('offLeft', 0).position('centerLeft', 1000);
    bitsy.position('centerRight', 400).delay(100);
    await emma.Text('theaters.welcome.emmaGreeting');

    await bitsy.Text('theaters.welcome.bitsyMakeGames');
    await emma.Text('theaters.welcome.emmaMakeGames');

    bitsy.Expression('bitsy-panic');
    await bitsy.Text('theaters.welcome.bitsyShock');
    bitsy.Expression('bitsy-laughing');
    await bitsy.Text('theaters.welcome.bitsyFun');
    emma.Expression('emma-laughing');
    await emma.Text('theaters.welcome.emmaFun');

    bitsy.Expression('bitsy-happy');
    emma.Expression('emma-neutral');
    await bitsy.Text('theaters.welcome.bitsyNext');
    emma.position('offLeft', 1000);
    bitsy.position('offLeft', 1300).delay(100);
  }
});
