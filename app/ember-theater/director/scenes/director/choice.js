import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Director/choice',

  script: async function() {
    await this.choice('This a choice menu.', ['Click me!']);

    this.menu();
  },

  menu: async function() {
    const choice = await this.choice('What would you like to learn about?', ['Styles', 'Transitions', 'Buttons']);

    switch (choice.key) {
      case 0: this.styles(); break;
      case 1: this.transitions(); break;
      case 2: this.buttons(); break;
    }
  },

  styles: async function() {
    await this.choice('This choice box has default styling.', ['Continue']);
    await this.choice('This choice box has the \'et-wide\' structural class.', ['Continue'], { classNames: { structural: 'et-wide' } });
    await this.choice('This choice box has the \'et-full\' structural class.', ['Continue'], { classNames: { structural: 'et-full' } });
    await this.choice('This choice box has the \'et-coastal\' decorative class.', ['Continue'], { classNames: { decorative: 'et-coastal' } });
    await this.choice('This choice box has the \'et-ember\' decorative class.', ['Continue'], { classNames: { decorative: 'et-ember' } });
    await this.choice('This choice box has the \'et-transparent\' decorative class.', ['Continue'], { classNames: { decorative: 'et-transparent' } });
    await this.choice('By default, a choice box has the \'et-white\' decorative class and \'et-block\' structural class.', ['Continue']);
    await this.choice('You can mix and match the structural and decorative classes as you like.', ['Continue'], { classNames: { structural: 'et-wide', decorative: 'et-coastal' } });
    await this.choice('You can also define your own CSS classes and pass them in.', ['Continue']);

    this.menu();
  },

  transitions: async function() {
    await this.choice('By default, the choice box fades in and out.', ['Continue']);
    await this.choice('By setting `transitionOut.duration`, you can change the rate. Here, we set it to 1000 milliseconds', ['Continue'], { transitionOut: { duration: 1000 } });
    await this.choice('Next, let\'s change the `transitionIn.duration`.', ['Continue']);
    await this.choice('Slow, right?', ['Continue'], { transitionIn: { duration: 1000 } });
    await this.choice('You can also set both at once with `transitionDuration`', ['Continue'], { transitionDuration: 1000 });
    await this.choice('You can also set the `transitionOut.effect`.', ['Continue'], { transitionDuration: 1000, transitionOut: { effect: 'transition.whirlOut' } });
    await this.choice('Or the `transitionIn.effect`.', ['Continue'], { transitionDuration: 1000, transitionIn: { effect: { translateX: ['-100vw', 0], opacity: [0, 1]} } });

    this.menu();
  },

  buttons: async function() {
    await this.choice('By default, buttons are simply buttons.', ['Continue']);
    await this.choice('You can make them into input fields if you set `inputable` to true', [{ text: 'Click Me', inputable: true }], { name: 'Bebe' });

    this.menu();
  }
});
