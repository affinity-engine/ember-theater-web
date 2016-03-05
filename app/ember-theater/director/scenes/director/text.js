import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Director/text',

  script: async function() {
    // await this.text('theaters.text.intro.intro');
    // await this.text('theaters.text.intro.controls');
    // await this.text('theaters.text.intro.defaults');
    // await this.text('theaters.text.intro.encouragement');
    //
    // this.menu();
  },

  menu: async function() {
    const choice = await this.choice('theaters.text.menu.header', ['theaters.text.menu.styles', 'theaters.text.menu.transitions', 'theaters.text.menu.textAnimation', 'theaters.text.menu.name']);

    switch (choice.key) {
      case 0: this.styles(); break;
      case 1: this.transitions(); break;
      case 2: this.textAnimations(); break;
      case 3: this.name(); break;
    }
  },

  styles: async function() {
    await this.text('theaters.text.styles.intro');
    await this.text('theaters.text.styles.wide', { classNames: { structural: 'et-wide' } });
    await this.text('theaters.text.styles.full', { classNames: { structural: 'et-full' } });
    await this.text('theaters.text.styles.coastal', { classNames: { decorative: 'et-coastal' } });
    await this.text('theaters.text.styles.ember', { classNames: { decorative: 'et-ember' } });
    await this.text('theaters.text.styles.transparent', { classNames: { decorative: 'et-transparent' } });
    await this.text('theaters.text.styles.defaults');
    await this.text('theaters.text.styles.mix', { classNames: { structural: 'et-wide', decorative: 'et-coastal' } });
    await this.text('theaters.text.styles.css');

    this.menu();
  },

  transitions: async function() {
    await this.text('theaters.text.transitions.intro');
    await this.text('theaters.text.transitions.outDuration', { transitionOut: { duration: 1000 } });
    await this.text('theaters.text.transitions.inDuration');
    await this.text('theaters.text.transitions.inDurationComment', { transitionIn: { duration: 1000 } });
    await this.text('theaters.text.transitions.both', { transitionDuration: 1000 });
    await this.text('theaters.text.transitions.outEffect', { transitionDuration: 1000, transitionOut: { effect: 'transition.whirlOut' } });
    await this.text('theaters.text.transitions.inEffect', { transitionDuration: 1000, transitionIn: { effect: { translateX: ['-100vw', 0], opacity: [0, 1]} } });

    this.menu();
  },

  textAnimations: async function() {
    await this.text('theaters.text.textAnimations.intro');
    await this.text('theaters.text.textAnimations.rate', { textSpeed: 60 });
    await this.text('theaters.text.textAnimations.effect', { textAnimation: { translateX: '300px', translateY: '200px' } });
    await this.text('theaters.text.textAnimations.instant', { instant: true });
    await this.text('theaters.text.textAnimations.scrollable', { scrollable: true });

    this.menu();
  },

  name: async function() {
    await this.text('theaters.text.name.intro');
    await this.text('theaters.text.name.name', { name: 'theaters.text.name.bebe' });
    await this.text('theaters.text.name.full', { name: 'theaters.text.name.bebe', classNames: { structural: 'et-full' } });
    await this.text('theaters.text.name.wide', { name: 'theaters.text.name.bebe', classNames: { structural: 'et-wide' } });

    this.menu();
  }
});
