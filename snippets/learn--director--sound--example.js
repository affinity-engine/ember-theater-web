await this.sound('phaser-shot'); // plays a phaser shot, resolving once the clip has completed

this.sound('beach-theme', 'fadeIn', { loop: true }); // fades in the beach theme, then loops
this.sound('beach-theme', 'pause'); // pauses the beach theme
this.sound('beach-theme', 'fadeOut', { duration: 1000 }); // fades out the theme over 1000 milliseconds
this.sound('beach-theme', 'fadeTo', { volume: 0.75 }); // fades to 75% volume
this.sound('beach-theme', 'stop'); // stops the beach theme
