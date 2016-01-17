// presents three choices; if the user selects 'B', then the promise will return { key: 1, text: 'B' }
const firstChoice = await this.choice(['A', 'B', 'C']);
// same as above, only with a header
const secondChoice = await this.choice('Choose a letter', ['A', 'B', 'C']);
// same as above, only if the user selects 'B', then the promise will return { key: 'customKey', text: 'B' }
const thirdChoice = await this.choice('Choose a letter', ['A', { text: 'B', key: 'customKey' }, 'C']);
// a choice with custom key bindings
const fourthChoice = await this.choice(['Okay', 'Cancel'], { keys: { moveUp: ['a'], moveDown: ['s'] } });
// if the user selects the third option, it will become an input field; if they enter 'Garnet', then the promise will return { key: 2, text: 'Custom', input: 'Garnet' }
const fifthChoice = await this.choice('What is your name?', ['Bebe', 'Blixie', { text: 'Custom', inputable: true }]);
