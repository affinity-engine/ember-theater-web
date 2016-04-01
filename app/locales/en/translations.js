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
      backdrop: 'Backdrop',
      character: 'Character',
      clear: 'clear',
      close: 'close',
      configuration: 'Configuration',
      curtain: 'Plugin: Curtain',
      custom: '**Custom',
      data: 'Data',
      delay: 'Delay',
      director: 'Plugin: Director',
      directions: 'Directions',
      effect: 'effect',
      fixtures: 'Fixtures',
      helpfulLinks: 'Helpful Links',
      installation: 'Installation',
      instant: 'instant',
      layer: 'Layer',
      loader: 'Media Loader',
      load: 'load',
      menu: 'Menu',
      menuBar: 'Plugin: Menu Bar',
      pause: 'pause',
      plugins: 'Plugins',
      preloader: 'Preloaders',
      reset: 'reset',
      rewind: 'rewind',
      resize: 'resize',
      save: 'save',
      scene: 'Scene',
      scenes: 'Scenes',
      sound: 'Sound',
      speed: 'speed',
      styling: 'Styling',
      text: 'Text',
      textTags: 'Text Tags',
      welcome: 'Welcome'
    }
  }
};

const theaters = {
  theaters: {
    welcome: {
      bitsyGreeting: "Hi! My name's Bitsy!",
      emmaGreeting: "And I'm Emma!",
      bitsyMakeGames: "And we're gonna show you how to make games!",
      emmaMakeGames: "Ember Theater games, that is! In fact, we're on an Ember Theater stage right now.",
      bitsyShock: 'Really!??',
      bitsyFun: "That's so cool!",
      emmaFun: "Bitsy has a point. Making games is cool! And a lot of fun!",
      bitsyNext: "So if you're ready, keep on reading! We'll meet you on the next page!"
    },
    backdrop: {
      intro: {
        bitsyGreeting: "Hi! Bitsy, here! And welcome to the <code>Backdrop</code> demo!",
        emmaClassroom: "A <code>Backdrop</code> is an image that fills the screen. For instance, here we are, learning in a classroom.",
        bitsyBeach: "And here we are, having a great time at the beach! It's as simple as: <code>Backdrop('beach-day');</code>",
        emmaBeach: "Glad you're enjoying this, Bitsy.",
        bitsyBeach2: "I just love the feel of the sun on my skin and the warm sand between my toes.",
        emmaTransition: "Even after a <code>Backdrop</code> is on the screen, you can perform a <code>transition</code> on it, like this.",
        bitsyTransition: "That's so cool! So we can make a <code>Backdrop</code> do anything we want?",
        emmaCustomEffect: "Just about. If you're willing to read the docs, you can do a lot with them. Even light-weight 3D effects. (Let's save those for the <code>Character</code> demo though, okay?)",
        bitsyCustomEffect: "(Okay.)",
        emmaMultiple: "You can also have multiple <code>Backdrops</code> on the screen at once. This allows you to crossfade your images.",
        bitsyMultiple: "What!?? But, Em! I was just saying how much I love the sun!",
        emmaNight: "Oh, sorry Little Bit. Still, wasn't that a beautiful sunset?",
        bitsyNight: ". . . .",
        emmaOkay: "Okay. . . .",
        emmaFade: "Although I love the way crossfading looks, sometimes you just want to fade to black.",
        emmaFinal: "Let's do that now."
      }
    },
    character: {
      intro: {
        emmaGreeting: "Thanks for coming to the <code>Character</code> demo! I'll be hosting this one alone.",
        bitsyGreeting: "Boo!!!",
        emmaHiding: "Whoa, where were you, Bitsy?",
        bitsyHiding: "Hiding under a desk!",
        emmaCharacters: "Well, it's good to have you here! We'll be talking about <code>Characters</code> today. <code>Characters</code>, like you and me.",
        bitsyCharacters: "We're <code>Characters</code>?",
        emmaPosition: "Yes, and that's a good thing. <code>Characters</code> can do a lot. For starters, we can change our <code>position</code>.",
        emmaPositionLeft: "Here I go, moving to <code>emma.position('left')</code>",
        emmaPositionFarLeft: "Now <code>emma.position('farLeft')</code>",
        emmaPositionOffLeft: "And <code>emma.position('offLeft')</code>",
        emmaPositionCenterLeft: "And back to <code>emma.position('centerLeft')</code>",
        emmaPositionNudgeLeft: "Next, nudges let you make relative changes: <code>emma.position('nudgeLeft')</code>",
        emmaPositionNudgeLeftAgain: "And again, <code>emma.position('nudgeLeft')</code>",
        emmaPositionNudgeUp: "And <code>position('emma.nudgeUp')</code>",
        emmaPositionNudgeDown: "And <code>emma.position('nudgeDown')</code>",
        emmaPositionNudgeBack: "As well as <code>emma.position('nudgeBack')</code>",
        emmaPositionNudgeForward: "And <code>emma.position('nudgeForward')</code>",
        emmaPositionConfig: "Those are just some pre-defined positions, but you can add more in your config, too!",
        bitsyPosition: "That's kind of boring.",
        emmaPosition2: "Maybe, but changing our <code>position</code> can be really useful. It shows where we are relative to the action.",
        bitsyPosition2: "Like if I wanted to inch away from you?",
        emmaPosition3: "Yes, like that. And like if I wanted to give you a hug.",
        bitsyPosition3: "Aw.",
        emmaTransition: "But you're right, positioning isn't the most exciting thing we can do. Let's try out a <code>transition</code>.",
        bitsyTransition: "Whoa! I didn't know you could do that! That was so cool!",
        emmaTransition2: "Why thank you. ((#pause 200)) Now you try one.",
        bitsyTransition2: "Like this? <code>bitsy.transition('callout.bounce')</code>",
        emmaTransition3: "Yes, that's great, Bitsy!",
        bitsyTransition3: "And how about this one? <code>bitsy.transition('callout.swing')</code>",
        emmaTransition4: "Bravo, Bitsy!",
        bitsyTransition4: "And! <code>bitsy.transition('transition.bounceUpIn')</code>",
        emmaTransition5: "You're a natural at <code>transitions</code>! Now try chaining them together!",
        bitsyTransition5: "Woah!!!!!!!",
        emmaInstance: "Congratulations, Little Bit! You just chained together multiple <code>transitions</code>. I think you're ready for the next demo!",
        emma2Instance: "Yeah, I think she's ready, too!",
        bitsyInstance: "Woah, wait! Em!? How are there two of you?",
        emmaInstance2: "The script made a second call to <code>Character('emma')</code>, creating a new <code>instance</code> of me.",
        emma2Instance2: "I might be a clone, but I'm nothing to be afraid of! I'm entirely my own <code>Character</code>.",
        emma2Instance3: "For instance, while the original Emma stays still, I can move independently with <code>emma2.position('centerRight')</code>",
        bitsyPanic: "Ahhhh!!!!!!",
        emmaPanic: "Oh, Little Bit, don't worry. It's alright.",
        bitsyForgive: "I-I know. It's just a little scary.",
        emmaInstanceConclude: "Yeah, you probably don't want to create multiple <code>instances</code> very often, but if you ever need to, it's shockingly easy.",
        emma2InstanceConclude: "I'm sorry for alarming you, Bitsy! Either way, I guess you two won't be needing me anymore.",
        emmaInstanceConclude2: "No, I guess not. Thanks for the help, Emma 2!",
        emma2InstanceConclude2: "Of course!",
        bitsyInstanceConclude: "Let's never do that again, okay Em? ((#pause 750)) Is there anything else that a <code>Character</code> can do, though?",
        emmaExpression: "Yes, and I've saved our most important abilities for last: we can change our <code>expression</code> and speak <code>Text</code>.",
        bitsyExpression: "Oh, I love doing both those things!",
        emmaExpression2: "Trust me, I know. ((#pause 250)) <code>expression</code> and <code>Text</code> are the real heart of theater, games, and life itself. And we can do them both.",
        bitsyExpression2: "But how are we doing them?",
        emmaExpression3: "Just like we do <code>transition</code> or <code>position</code>.",
        bitsyExpression3: "Oh, like <code>bitsy.expression('bitsy-happy')</code>?",
        emmaName: "Exactly! Easy, right? <code>Characters</code> have the ability to change the way they speak <code>Text</code>, too. By default, my name appears as 'Emma', but I can change it with <code>emma.name('Em')</code>",
        emmaName2: "See? And now I can change it back with <code>emma.name('Emma')</code>",
        bitsyName: "Alright, then my name is no longer Bitsy. Call me The World's Greatest Hacker!",
        bitsysNewName: "World's Greatest Hacker",
        emmaNamePosition: "Okay, Great Hacker. But there's one more lesson for you! You can change where your name appears with <code>bitsy.namePosition('center')</code>. Options include 'left', 'right', and 'center'. Want to try it?",
        bitsyNamePositionCenter: "<code>bitsy.namePosition('center')</code>",
        bitsyNamePositionLeft: "<code>bitsy.namePosition('left')</code>",
        bitsyNamePositionRight: "<code>bitsy.namePosition('right')</code>",
        emmaNamePositionPraise: "Good job! You're now a fully fledged <code>Character</code>, ready to take on the world!",
        bitsyBye: "Then what are we waiting for? We should start writing <code>Character</code> scripts!",
        emmaBye: "Good idea, O Great Hacker! Let's go!"
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
        bitsy: 'Bitsy',
        intro: 'By default, no name appears beside the text box.',
        name: 'If you pass in a `name`, however, it will appear.',
        full: 'Different structural classes position the name uniquely. This is how `et-full` displays a name.',
        wide: 'And this is how `et-wide` displays a name.'
      }
    }
  }
}

export default Ember.$.extend(true, site, theaters, { markdown: markdown['en'] });
