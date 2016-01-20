// pauses the scene for one second
await this.pause(1000);
// pauses the scene until the enter key or ctrl+shift+a is pressed
await this.pause('Enter', 'ctrl+shift+a');
// pauses the scene until the enter key or ctrl+shift+a is pressed, or until 1000 milliseconds pass--whichever comes first
await this.pause('Enter', 'ctrl+shift+a', 1000);
