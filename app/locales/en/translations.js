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
    welcome: {
      bebeGreeting: "Hi! My name's Bebe!",
      blixieGreeting: "And I'm Blixie!",
      bebeMakeGames: "And we're gonna show you how to make games!",
      blixieMakeGames: "Ember Theater games, that is! In fact, we're on an Ember Theater stage right now.",
      bebeShock: 'Really!??',
      bebeFun: "That's so cool!",
      blixieFun: "Bebe has a point. Making games is cool! And a lot of fun!",
      bebeNext: "So if you're ready, keep on reading! We'll meet you on the next page!"
    },
    backdrop: {
      intro: {
        bebeGreeting: "Hi! Bebe, here! And welcome to the <code>Backdrop</code> demo!",
        blixieClassroom: "A <code>Backdrop</code> is an image that fills the screen. For instance, here we are, learning in a classroom.",
        bebeBeach: "And here we are, having a great time at the beach! It's as simple as: <code>this.Backdrop('beach-day');</code>",
        blixieBeach: "Glad you're enjoying this, Bebe.",
        bebeBeach2: "I just love the feel of the sun on my skin and the warm sand between my toes.",
        blixieTransition: "Even after a <code>Backdrop</code> is on the screen, you can perform a <code>transition</code> on it, like this.",
        bebeTransition: "That's so cool! So we can make a <code>Backdrop</code> do anything we want?",
        blixieCustomEffect: "Just about. If you're willing to read the docs, you can do a lot with them. Even light-weight 3D effects. (Let's save those for the <code>Character</code> demo though, okay?)",
        bebeCustomEffect: "(Okay.)",
        blixieMultiple: "You can also have multiple <code>Backdrops</code> on the screen at once. This allows you to crossfade your images.",
        bebeMultiple: "What!?? But, Blixie! I was just saying how much I love the sun!",
        blixieNight: "Oh, sorry Bebe. Still, wasn't that a beautiful sunset?",
        bebeNight: ". . . .",
        blixieOkay: "Okay. . . .",
        blixieFade: "Although I love the way crossfading looks, sometimes you just want to fade to black.",
        blixieFinal: "Let's do that now."
      }
    },
    character: {
      intro: {
        blixieGreeting: "Thanks for coming to the <code>Character</code> demo! I'll be hosting this one alone.",
        bebeGreeting: "Boo!!!",
        blixieHiding: "Whoa, where were you, Bebe?",
        bebeHiding: "Hiding under a desk!",
        blixieCharacters: "Well, it's good to have you here! We'll be talking about characters today. <code>Characters</code>, like you and me.",
        bebeCharacters: "We're <code>Characters</code>?",
        blixiePosition: "Yes, and that's a good thing. <code>Characters</code> can do a lot. For instance, we can change our <code>position</code>.",
        blixiePositionLeft: "For instance, I'm moving to <code>blixie.position('left')</code>",
        blixiePositionFarLeft: "Now <code>blixie.position('farLeft')</code>",
        blixiePositionOffLeft: "And <code>blixie.position('offLeft')</code>",
        blixiePositionCenterLeft: "And back to <code>blixie.position('centerLeft')</code>",
        blixiePositionNudgeLeft: "Next, nudges let you make relative changes: <code>blixie.position('nudgeLeft')</code>",
        blixiePositionNudgeLeftAgain: "And again, <code>blixie.position('nudgeLeft')</code>",
        blixiePositionNudgeUp: "And <code>position('blixie.nudgeUp')</code>",
        blixiePositionNudgeDown: "And <code>blixie.position('nudgeDown')</code>",
        blixiePositionNudgeBack: "As well as <code>blixie.position('nudgeBack')</code>",
        blixiePositionNudgeForward: "And <code>blixie.position('nudgeForward')</code>",
        bebePosition: "That's kind of boring.",
        blixiePosition2: "Maybe, but changing our <code>position</code> can be really useful. It shows where we are relative to the action.",
        bebePosition2: "Like if I wanted to inch away from you?",
        blixiePosition3: "Yes, like that. And like if I wanted to give you a hug.",
        bebePosition3: "Aw.",
        blixieTransition: "But you're right, positioning isn't the most exciting thing we can do. Let's try out a <code>transition</code>.",
        bebeTransition: "Whoa! I didn't know you could do that! That was so cool!",
        blixieTransition2: "Why thank you. ((#pause 200)) Now you try one.",
        bebeTransition2: "Like this? <code>bebe.transition('callout.bounce')</code>",
        blixieTransition3: "Yes, that's great, Bebe!",
        bebeTransition3: "And how about this? <code>bebe.transition('callout.swing')</code>",
        blixieTransition4: "Bravo, Bebe!",
        bebeTransition4: "And this? <code>bebe.transition('transition.bounceUpIn')</code>",
        blixieTransition5: "You're a natural at <code>transitions</code>! Now try chaining them together!",
        bebeTransition5: "Woah!!!!!!!",
        blixieInstance: "Congradulations, Bebe! You just chained together multiple <code>transitions</code>. I think you're ready for the next demo!",
        blixie2Instance: "Yeah, I think she's ready, too!",
        bebeInstance: "Woah, wait! Blixie!? Blixie!!? How are there two of you?",
        blixieInstance2: "The script made a second call to <code>this.Character('blixie')</code>, creating a new <code>instance</code> of me.",
        blixie2Instance2: "I might be a clone, but I'm nothing to be afraid of! I'm entirely my own <code>Character</code>.",
        blixie2Instance3: "For instance, while the original Blixie stays still, I can move independently with <code>blixie2.position('centerRight')</code>",
        bebePanic: "Ahhhh!!!!!!",
        blixiePanic: "Oh, sorry.",
        bebeForgive: "It-it's okay. It's just a little freaky.",
        blixieInstanceConclude: "Yeah, you probably don't want to create multiple <code>instances</code> very often, but if you ever need to, it's shockingly easy.",
        blixie2InstanceConclude: "I'm sorry for alarming you, Bebe! Either way, I guess you two won't be needing me anymore.",
        blixieInstanceConclude2: "No, I guess not. Thanks for the help, Blixie 2!",
        blixie2InstanceConclude2: "Of course!",
        bebeInstanceConclude: "Let's never do that again, okay Blixie? ((#pause 250)) Is there anything else that a <code>Character</code> can do, though?",
        blixieExpression: "Yes, and I've saved our most important abilities for last: we can change our <code>Expression</code> and speak <code>Text</code>.",
        bebeExpression: "Oh, I love doing both those things!",
        blixieExpression2: "Trust me, I know. ((#pause 250)) <code>Expression</code> and <code>Text</code> are the real heart of theater, games, and life itself. And we can do them both.",
        bebeExpression2: "But how are we doing them?",
        blixieExpression3: "Just like we do <code>transition</code> or <code>position</code>.",
        bebeExpression3: "Oh, like <code>bebe.Expression('bebe-happy')</code>?",
        blixieContext: "Exactly! Be careful, though. Both <code>Text</code> and <code>Expression</code> change the context!",
        bebeContext: "The context?",
        blixieContext2: "Yes. For instance, after we use <code>Text</code>, the context changes away from our <code>Character</code> and to that <code>Text</code>, meaning that <code>position</code> is no longer available, since that's only something we <code>Characters</code> can do.",
        bebeContext2: "But instead we can <code>typeSpeed</code>, because that's something a <code>Text</code> can do?",
        blixieContext3: "Correct! It sometimes takes a little playing around for context to really make sense, though.",
        bebeBye: "Then what are we waiting for? We should start playing with <code>Characters</code>!",
        blixieBye: "Great idea, Bebe! Let's go!"
      }
    },
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
