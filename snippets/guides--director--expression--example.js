// first, bring the character in with her defaultExpression
await this.character('bebe');
// change Bebe's expression from the defaultExpression to `happy`, using the default transitionIn and transitionOut
await this.expression('bebe', 'happy');
// change Bebe's expression from `happy` to `sad`, using the default transitionOut but a custom transitionIn that drops the new expression in from the top of the screen to the current location
await this.expression('bebe', 'sad', { transitionIn: { effect: { transitionY: ['100vh', '0vh'] }, duration: 1000 } });
// change Bebe's expression from `sad` to `happy`, using both a custom transitionIn and transitionOut
this.expression('bebe', 'happy', { transitionIn: { effect: { opacity: 1 } }, transitionOut: { effect: { transitionY: '-100vh' } } });
