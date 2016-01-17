const { input: chosenName } = await this.choice('What is your name?', { inputable: true });
this.setData('playerName', chosenName);

// later, you can overwrite data
this.setData('playerName', newName);
