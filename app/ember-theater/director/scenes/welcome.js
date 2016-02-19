import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Welcome',

  script: async function() {
    this.backdrop('classroom');
    this.character('bebe', { left: '50%' }, { duration: 1000 });
    await this.text('bebe', 'theaters.welcome.bebeGreeting');
    this.character('blixie', { left: '30%' }, { duration: 1000 });
    await this.pause(100);
    this.character('bebe', { left: '70%' }, { duration: 700 });
    await this.text('blixie', 'theaters.welcome.blixieGreeting');
    await this.text('bebe', 'theaters.welcome.bebeMakeGames', { namePosition: 'right' });
    await this.text('blixie', 'theaters.welcome.blixieMakeGames');
    this.expression('bebe', 'bebe-panic');
    await this.text('bebe', 'theaters.welcome.bebeShock', { namePosition: 'right' });
    this.expression('bebe', 'bebe-laughing');
    await this.text('bebe', 'theaters.welcome.bebeFun', { namePosition: 'right' });
    this.expression('blixie', 'blixie-laughing');
    await this.text('blixie', 'theaters.welcome.blixieFun');
    this.expression('bebe', 'bebe-happy');
    this.expression('blixie', 'blixie-neutral');
    await this.text('bebe', 'theaters.welcome.bebeNext', { namePosition: 'right' });
    this.character('blixie', { left: '-100%' }, { duration: 1000 });
    await this.pause(100);
    this.character('bebe', { left: '-100%' }, { duration: 1300 });
  }
});
