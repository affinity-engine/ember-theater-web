// fades to full opacity and moves the character to the horizontal center of the screen
this.character('bebe', { translateX: '50vw', opacity: 1 }, { duration: 1000 });
// fades to full opacity and moves the character to the horizontal center,
// starting from the bottom right of the screen
this.character('blixie', { translateX: ['100vw', '50vw'], opacity: 1 }, { duration: 1000 });
// fades to full opacity over 1 second, remaining in the bottom left corner of the screen
this.character('bly', { duration: 2000 });
// fades to full opacity over the default transition duration, remaining in the bottom left
await this.character('bly');
// fades out the character bly
this.character('bly', { opacity: 0 });
// fades to full opacity over the default transition duration, using bliz's annoyed expression
this.character({ id: 'bliz', expression: 'annoyed' });
