import Ember from 'ember';
import markdown from 'ember-theater-web/ember-stringify';

const site = {
  header: {
    create: 'Create',
    discuss: 'Discuss',
    learn: 'Learn',
    play: 'Play'
  },
  learn: {
    sections: {
      animate: 'animate',
      backdrop: 'backdrop',
      character: 'character',
      choice: 'choice',
      clear: 'clear',
      close: 'close',
      configuration: 'Configuration',
      curtain: 'Plugin: Curtain',
      custom: '**Custom',
      deleteData: 'deleteData',
      director: 'Plugin: Director',
      directions: 'Directions',
      effect: 'effect',
      expression: 'expression',
      filter: 'filter',
      fixtures: 'Fixtures',
      getData: 'getData',
      helpfulLinks: 'Helpful Links',
      installation: 'Installation',
      instant: 'instant',
      loader: 'Media Loader',
      load: 'load',
      menuBar: 'Plugin: Menu Bar',
      pause: 'pause',
      plugins: 'Plugins',
      preloader: 'Preloaders',
      reset: 'reset',
      rewind: 'rewind',
      resize: 'resize',
      save: 'save',
      scenes: 'Scenes',
      setData: 'setData',
      sound: 'sound',
      speed: 'speed',
      styling: 'Styling',
      text: 'text',
      textTags: 'Text Tags',
      transitionToScene: 'transitionToScene',
      welcome: 'Welcome'
    }
  }
};

const theaters = {
  theaters: {
    choice: {
      clickMe: 'Click Me!',
      continue: 'Continue',
      intro: 'This a choice menu.',
      menu: {
        header: 'What would you like to learn about?',
        buttons: 'Buttons',
        styles: 'Styles',
        transitions: 'Transitions',
      },
      styles: {
        default: 'This choice box has default styling.',
        wide: 'This choice box has the \'et-wide\' structural class.',
        full: 'This choice box has the \'et-full\' structural class.',
        coastal: 'This choice box has the \'et-coastal\' decorative class.',
        ember: 'This choice box has the \'et-ember\' decorative class.',
        transparent: 'This choice box has the \'et-transparent\' decorative class.',
        defaultExplained: 'By default, a choice box has the \'et-white\' decorative class and \'et-block\' structural class.',
        mixAndMatch: 'You can mix and match the structural and decorative classes as you like.',
        define: 'You can also define your own CSS classes and pass them in.'
      },
      transitions: {
        default: 'By default, the choice box fades in and out.',
        transOutDuration: 'By setting `transitionOut.duration`, you can change the rate. Here, we set it to 1000 milliseconds',
        transInDuration: 'Next, let\'s change the `transitionIn.duration`.',
        transInDurationComment: 'Slow, right?',
        setBoth: 'You can also set both at once with `transitionDuration`',
        transOutEffect: 'You can also set the `transitionOut.effect`.',
        transInEffect: 'Or the `transitionIn.effect`.',
      },
      buttons: {
        default: 'By default, buttons are simply buttons.',
        inputable: 'You can make them into input fields if you set `inputable` to true'
      }
    },
    text: {
      intro: {
        intro: 'This is a text box. ((#close 300))',
        controls: 'Press the spacebar or enter key to advance the text.',
        defaults: 'By default, text fades in one character at a time. Press the spacebar or enter to make all the text appear immediately.',
        encouragement: 'Great! Now your navigating texts!'
      },
      menu: {
        header: 'What would you like to learn about next?',
        styles: 'Styles',
        transitions: 'Transitions',
        textAnimation: 'Text Animation',
        name: 'Name'
      },
      styles: {
        intro: 'What you see now is a text box with no special classes.',
        wide: 'This text box has the \'et-wide\' structural class.',
        full: 'This text box has the \'et-full\' structural class.',
        coastal: 'This text box has the \'et-coastal\' decorative class.',
        ember: 'This text box has the \'et-ember\' decorative class.',
        transparent: 'This text box has the \'et-transparent\' decorative class.',
        defaults: 'By default, a text box has the \'et-white\' decorative class and \'et-block\' structural class.',
        mix: 'You can mix and match the structural and decorative classes as you like.',
        css: 'You can also define your own CSS classes and pass them in.'
      },
      transitions: {
        intro: 'By default, the text box fades in and out.',
        outDuration: 'By setting `transitionOut.duration`, you can change the rate. Here, we set it to 1000 milliseconds',
        inDuration: 'Next, let\'s change the `transitionIn.duration`.',
        inDurationComment: 'Slow, right?',
        both: 'You can also set both at once with `transitionDuration`',
        outEffect: 'You can also set the `transitionOut.effect`.',
        inEffect: 'Or the `transitionIn.effect`.'
      },
      textAnimations: {
        intro: 'By default, text fades in one character at a time.',
        rate: 'You change the rate at which it fade in by setting `textSpeed`.',
        effect: 'Or you change the effect with `textAnimation`.',
        instant: 'You can also make text appear instantly by setting `instant` to true.',
        scrollable: 'Instant text can also be made scrollable for mouse wheels and arrow keys by setting `scrollable` to true. You might want all text in your game to be navigated this way, or perhaps only certain sections. As always, you can decide this on either a per text basis or in the config itself.'
      },
      name: {
        bebe: 'Bebe',
        intro: 'By default, no name appears beside the text box.',
        name: 'If you pass in a `name`, however, it will appear.',
        full: 'Different structural classes position the name uniquely. This is how `et-full` displays a name.',
        wide: 'And this is how `et-wide` displays a name.'
      }
    }
  }
}

export default Ember.$.extend(true, site, theaters, { markdown: markdown['en'] });
