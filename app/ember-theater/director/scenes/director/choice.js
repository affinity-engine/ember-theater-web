import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Director/choice',

  script: async function() {
    await this.choice('theaters.choice.intro', ['theaters.choice.clickMe']);

    this.menu();
  },

  menu: async function() {
    const choice = await this.choice('theaters.choice.menu.header', ['theaters.choice.menu.styles', 'theaters.choice.menu.transitions', 'theaters.choice.menu.buttons']);

    switch (choice.key) {
      case 0: this.styles(); break;
      case 1: this.transitions(); break;
      case 2: this.buttons(); break;
    }
  },

  styles: async function() {
    await this.choice('theaters.choice.styles.default', ['theaters.choice.continue']);
    await this.choice('theaters.choice.styles.wide', ['theaters.choice.continue'], { classNames: { structural: 'et-wide' } });
    await this.choice('theaters.choice.styles.full', ['theaters.choice.continue'], { classNames: { structural: 'et-full' } });
    await this.choice('theaters.choice.styles.coastal', ['theaters.choice.continue'], { classNames: { decorative: 'et-coastal' } });
    await this.choice('theaters.choice.styles.ember', ['theaters.choice.continue'], { classNames: { decorative: 'et-ember' } });
    await this.choice('theaters.choice.styles.transparent', ['theaters.choice.continue'], { classNames: { decorative: 'et-transparent' } });
    await this.choice('theaters.choice.styles.defaultExplained', ['theaters.choice.continue']);
    await this.choice('theaters.choice.styles.mixAndMatch', ['theaters.choice.continue'], { classNames: { structural: 'et-wide', decorative: 'et-coastal' } });
    await this.choice('theaters.choice.styles.define', ['theaters.choice.continue']);

    this.menu();
  },

  transitions: async function() {
    await this.choice('theaters.choice.transitions.default', ['theaters.choice.continue']);
    await this.choice('theaters.choice.transitions.transOutDuration', ['theaters.choice.continue'], { transitionOut: { duration: 1000 } });
    await this.choice('theaters.choice.transitions.transInDuration', ['theaters.choice.continue']);
    await this.choice('theaters.choice.transitions.transInDurationComment', ['theaters.choice.continue'], { transitionIn: { duration: 1000 } });
    await this.choice('theaters.choice.transitions.setBoth', ['theaters.choice.continue'], { transitionDuration: 1000 });
    await this.choice('theaters.choice.transitions.transOutEffect', ['theaters.choice.continue'], { transitionDuration: 1000, transitionOut: { effect: 'transition.whirlOut' } });
    await this.choice('theaters.choice.transitions.transInEffect', ['theaters.choice.continue'], { transitionDuration: 1000, transitionIn: { effect: { translateX: ['-100vw', 0], opacity: [0, 1]} } });

    this.menu();
  },

  buttons: async function() {
    await this.choice('theaters.choice.buttons.default', ['theaters.choice.continue']);
    await this.choice('theaters.choice.buttons.inputable', [{ text: 'theaters.choice.clickMe', inputable: true }]);

    this.menu();
  }
});
