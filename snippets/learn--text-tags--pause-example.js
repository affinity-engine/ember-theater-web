this.text(`This text appears normally. ((#pause)) This text won't appear until the player presses the continue key.`);

this.text(`((#pause 1000)) The pause will automatically resolve after 1000 milliseconds.
Alternatively, if the player presses the continue key, it'll resolve as normal.`);
