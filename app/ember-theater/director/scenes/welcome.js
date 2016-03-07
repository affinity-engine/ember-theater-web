import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Welcome',

  script: async function() {
    this.Backdrop('classroom');
    const bebe = this.Character('bebe').position('offLeft', 0).position('center', 1000).namePosition('right');
    await bebe.Text('theaters.welcome.bebeGreeting');

    const blixie = this.Character('blixie').position('offLeft', 0).position('centerLeft', 1000);
    bebe.position('centerRight', 400).delay(100);
    await blixie.Text('theaters.welcome.blixieGreeting');

    await bebe.Text('theaters.welcome.bebeMakeGames');
    await blixie.Text('theaters.welcome.blixieMakeGames');

    bebe.Expression('bebe-panic');
    await bebe.Text('theaters.welcome.bebeShock');
    bebe.Expression('bebe-laughing');
    await bebe.Text('theaters.welcome.bebeFun');
    blixie.Expression('blixie-laughing');
    await blixie.Text('theaters.welcome.blixieFun');

    bebe.Expression('bebe-happy');
    blixie.Expression('blixie-neutral');
    await bebe.Text('theaters.welcome.bebeNext');
    blixie.position('offLeft', 1000);
    bebe.position('offLeft', 1300).delay(100);
  }
});
