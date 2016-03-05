import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Welcome',

  script: async function() {
    this.Backdrop('classroom');
    await this.Character('bebe').position('offLeft').position('center', 1000).Text('theaters.welcome.bebeGreeting');
    this.Character('blixie').position('offLeft').position('centerLeft', 1000);
    await this.Pause(100);
    this.Character('bebe').position('centerRight', 400);
    await this.Character('blixie').Text('theaters.welcome.blixieGreeting');
    await this.Character('bebe').Text('theaters.welcome.bebeMakeGames', { namePosition: 'right' });
    await this.Character('blixie').Text('theaters.welcome.blixieMakeGames');
    this.Character('bebe').Expression('bebe-panic');
    await this.Character('bebe').Text('theaters.welcome.bebeShock', { namePosition: 'right' });
    this.Character('bebe').Expression('bebe-laughing');
    await this.Character('bebe').Text('theaters.welcome.bebeFun', { namePosition: 'right' });
    this.Character('blixie').Expression('blixie-laughing');
    await this.Character('blixie').Text('theaters.welcome.blixieFun');
    this.Character('bebe').Expression('bebe-happy');
    this.Character('blixie').Expression('blixie-neutral');
    await this.Character('bebe').Text('theaters.welcome.bebeNext', { namePosition: 'right' });
    this.Character('blixie').position('offLeft', 1000);
    await this.Pause(100);
    this.Character('bebe').position('offLeft', 1300);
  }
});
