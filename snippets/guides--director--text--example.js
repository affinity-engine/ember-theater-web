// displays text with no name
await this.text('Hello world');
// displays text along with the name of the character model (note, this is not necessarily 'Bebe')
await this.text('bebe', 'Hello, my name is Steven.');
// displays text with no name at a really slow rate of 2 characters a second
await this.text('Hello again, world', { textSpeed: 50 });
// displays text along with the name Mystery Girl
await this.text('bebe', 'I am a mystery. . . .', { displayName: 'Mystery Girl' });
// uses several html tags
await this.text('I am <strong>bold</strong> and I am <span style="color: purple;">purple</span> and you can <a href="http://www.google.com">google</a> me.');
