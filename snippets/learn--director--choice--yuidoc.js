@param header {String} |optional| A prompt for the choices.
@param choices {Array} The options available to the user to choose from.
@param choices.[] {String,Object} Choices can be either a string or an object with the following attributes.
@param choices.text {String} The text to display to the user.
@param choices.key {String} The key you expect to get in the promise.
@param choices.inputable {Boolean} Whether or not the choice should transform into an input field on focus.
@param [options] {Object} |optional|
@param [options.instance] {Number} |default: 0| Which instance of the character you wish to alter.
@param [options.decorativeClassNames] {Array} |optional| CSS decorative classes.
@param [options.structuralClassNames] {Array} |optional| CSS structural classes.
@param [options.keys] {Object} |optional|
@param [options.keys.moveUp] {Array} |optional| Keys that move the focus up.
@param [options.keys.moveDown] {Array} |optional| Keys that move the focus down.
@param [options.keys.cancel] {Array} |optional| Keys that cancel an inputable choice.
@param [options.transitionIn] {Object} |optional|
@param [options.transitionIn.effect] {Object} |default: <set in config>| The effect to use while transitioning in.
@param [options.transitionIn.duration] {Number} |default: <set in config>| The duration of the transition in effect.
@param [options.transitionOut] {Object} |optional|
@param [options.transitionOut.effect] {Object} |default: <set in config>| The effect to use while transitioning out.
@param [options.transitionOut.duration] {Number} |default: <set in config>| The duration of the transition out effect.
@param [options.transitionDuration] {Number} |default: <set in config>| Sets the duration of both the transition in and out effect.

@return {Promise} Resolves when a choice has been selected, passing an object with format { key, text, input }
