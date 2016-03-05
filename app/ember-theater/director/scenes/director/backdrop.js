import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Director/backdrop',

  script: async function() {
    this.menu();
  },

  menu: async function() {
    const choice = await this.Choice(['theaters.backdrop.menu.intro', 'theaters.backdrop.menu.transition', 'theater.backdrop.menu.stop', 'theaters.backdrop.menu.caption']).header('theaters.backdrop.menu.header');

    switch (choice.key) {
      case 0: this.intro(); break;
      case 1: this.transitions(); break;
      case 2: this.stop(); break;
    }
  },

  intro: async function() {
    await this.Character('bebe').Text('theater.backdrop.intro.bebeGreeting').classNames({ name: 'et-right' });
    this.Backdrop('classroom').transition('transitions.fadeIn');
    await this.Character('blixie').Text('theater.backdrop.intro.blixieClassroom');
    this.Backdrop('beach-day').transition('transitions.fadeIn').transition({ 'background-color': rgba(0, 0, 0, 0.2) }, 1000, { loop: true });
    await this.Character('bebe').Text('theater.backdrop.intro.bebeBeach').classNames({ name: 'et-right' });
    await this.Character('blixie').Text('theater.backdrop.intro.blixieExplanation');
    await this.Character('bebe').Text('theater.backdrop.intro.bebeExplanation').classNames({ name: 'et-right' });
    this.Backdrop('beach-day').transition('transitions.fadeOut');
    this.Backdrop('beach-night').transition('transitions.fadeIn').transition({ 'background-color': rgba(0, 0, 0, 0.2) }, 1000, { loop: true });
    await this.Character('blixie').Text('theater.backdrop.intro.blixieMultiple');
    await this.Character('bebe').Text('theater.backdrop.intro.bebeMultiple').classNames({ name: 'et-right' });
    await this.Character('blixie').Text('theater.backdrop.intro.blixieNight');
    await this.Character('bebe').Text('theater.backdrop.intro.bebeNight').textSpeed(1).classNames({ name: 'et-right' });

    this.menu();
  },

  transition: async function() {
    await this.Character('blixie').Text('theater.backdrop.transition.blixieDefault');
    this.Backdrop('beach-day');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeDefault').classNames({ name: 'et-right' });
    await this.Character('blixie').Text('theater.backdrop.transition.blixieConfig');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeConfig').classNames({ name: 'et-right' });
    await this.Character('blixie').Text('theater.backdrop.transition.blixieEffect');
    this.Backdrop('beach-day').transition('transition.whirlIn');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeEffect').classNames({ name: 'et-right' });
    this.Backdrop('classroom').transition('transition.slideLeftIn', 5000);
    await this.Character('blixie').Text('theater.backdrop.transition.blixieDuration');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeDuration').classNames({ name: 'et-right' });
    this.Backdrop('classroom').transition('transition.slideLeftIn', 5000, { loop: true, easing: 'easeInSine' });
    await this.Character('blixie').Text('theater.backdrop.transition.blixieOptions');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeOptions').classNames({ name: 'et-right' });
    await this.Character('blixie').Text('theater.backdrop.transition.blixieOptions2');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeCustomEffects').classNames({ name: 'et-right' });
    this.Backdrop('classroom').transition({ translateZ: '5vh' });
    await this.Character('blixie').Text('theater.backdrop.transition.blixieCustomEffects');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeCustomEffects2').classNames({ name: 'et-right' });
    await this.Character('blixie').Text('theater.backdrop.transition.blixieCustomEffects2');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeCustomEffects3').classNames({ name: 'et-right' });
    this.Backdrop('clasroom').transition({ opacity: 1 }).transition({ translateZ: '5vh' }).transition({ opacity: 0 });
    await this.Character('blixie').Text('theater.backdrop.transition.blixieChains');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeChains').classNames({ name: 'et-right' });
    this.Backdrop('classroom').transition({ opacity: 1 }, 500, { queue: false }).transition({ translateZ: '5vh' }, 500, { queue: false });
    await this.Character('blixie').Text('theater.backdrop.transition.blixieChains2');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeChains2').classNames({ name: 'et-right' });
    await this.Character('blixie').Text('theater.backdrop.transition.blixieChains3');
    this.Backdrop('classroom').transition('transition.fadeOut');
    await this.Character('blixie').Text('theater.backdrop.transition.blixieOut');
    await this.Character('bebe').Text('theater.backdrop.transition.bebeOut').classNames({ name: 'et-right' });
    await this.Character('blixie').Text('theater.backdrop.transition.blixieBye');

    this.menu();
  },

  stop: async function() {
    await this.Character('blixie').Text('theater.backdrop.stop.intro');
    this.Backdrop('classroom').transition('transition.fadeIn', 60000);
    await this.Character('blixie').Text('theater.backdrop.stop.demo1');
    this.Backdrop('classroom').stop();
    await this.Character('blixie').Text('theater.backdrop.stop.demo1stop');
    this.Backdrop('classroom').transition('transition.fadeIn', 200, { loop: true });
    await this.Character('blixie').Text('theater.backdrop.stop.demo2');
    this.Backdrop('classroom').stop();
    await this.Character('blixie').Text('theater.backdrop.stop.demo2stop');

    this.menu();
  },

  caption: async function() {
    await this.Character('blixie').Text('theater.backdrop.caption.intro');
    this.Backdrop('classroom');
    await this.Character('blixie').Text('theater.backdrop.caption.default');
    this.Backdrop('classroom').caption('Fade in classroom');
    await this.Character('blixie').Text('theater.backdrop.caption.override');
    this.Backdrop('classroom').caption('theater.backdrop.caption.translationExample');
    await this.Character('blixie').Text('theater.backdrop.caption.translation');

    this.menu();
  }
});
