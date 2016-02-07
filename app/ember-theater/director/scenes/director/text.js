import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Director/text',

  script: async function() {
    await this.text('This is a text box. ((#close 300))');
    await this.text('Press the spacebar or enter key to advance the text.');
    await this.text('By default, text fades in one character at a time. Press the spacebar or enter to make all the text appear immediately.');
    await this.text('Great! Now your navigating texts!');

    this.menu();
  },

  menu: async function() {
    const choice = await this.choice('What would you like to learn about next?', ['Styles', 'Transitions', 'Text Animation', 'Name']);

    switch (choice.key) {
      case 0: this.styles(); break;
      case 1: this.transitions(); break;
      case 2: this.textAnimations(); break;
      case 3: this.name(); break;
    }
  },

  styles: async function() {
    await this.text('What you see now is a text box with no special classes.');
    await this.text('This text box has the \'et-wide\' structural class.', { classNames: { structural: 'et-wide' } });
    await this.text('This text box has the \'et-full\' structural class.', { classNames: { structural: 'et-full' } });
    await this.text('This text box has the \'et-coastal\' decorative class.', { classNames: { decorative: 'et-coastal' } });
    await this.text('This text box has the \'et-ember\' decorative class.', { classNames: { decorative: 'et-ember' } });
    await this.text('This text box has the \'et-transparent\' decorative class.', { classNames: { decorative: 'et-transparent' } });
    await this.text('By default, a text box has the \'et-white\' decorative class and \'et-block\' structural class.');
    await this.text('You can mix and match the structural and decorative classes as you like.', { classNames: { structural: 'et-wide', decorative: 'et-coastal' } });
    await this.text('You can also define your own CSS classes and pass them in.');

    this.menu();
  },

  transitions: async function() {
    await this.text('By default, the text box fades in and out.');
    await this.text('By setting `transitionOut.duration`, you can change the rate. Here, we set it to 1000 milliseconds', { transitionOut: { duration: 1000 } });
    await this.text('Next, let\'s change the `transitionIn.duration`.');
    await this.text('Slow, right?', { transitionIn: { duration: 1000 } });
    await this.text('You can also set both at once with `transitionDuration`', { transitionDuration: 1000 });
    await this.text('You can also set the `transitionOut.effect`.', { transitionDuration: 1000, transitionOut: { effect: 'transition.whirlOut' } });
    await this.text('Or the `transitionIn.effect`.', { transitionDuration: 1000, transitionIn: { effect: { translateX: ['-100vw', 0], opacity: [0, 1]} } });

    this.menu();
  },

  textAnimations: async function() {
    await this.text('By default, text fades in one character at a time.');
    await this.text('You change the rate at which it fade in by setting `textSpeed`.', { textSpeed: 60 });
    await this.text('Or you change the effect with `textAnimation`.', { textAnimation: { translateX: '300px', translateY: '200px' } });
    await this.text('You can also make text appear instantly by setting `instant` to true.', { instant: true });
    await this.text('Instant text can also be made scrollable for mouse wheels and arrow keys by setting `scrollable` to true', { scrollable: true });

    this.menu();
  },

  name: async function() {
    await this.text('By default, no name appears beside the text box.');
    await this.text('If you pass in a `name`, however, it will appear.', { name: 'Bebe' });
    await this.text('Different structural classes position the name uniquely.', { name: 'Bebe', classNames: { structural: 'et-full' } });
    await this.text('And', { name: 'Bebe', classNames: { structural: 'et-wide' } });

    this.menu();
  }
});
