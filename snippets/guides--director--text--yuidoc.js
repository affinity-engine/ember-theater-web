@param characterId {String} |optional| An id corresponding to an `ember-theater/character`.
@param text {String} The text that will appear in the text box.
@param [options] {Object} |optional|
@param [options.instance] {Number} |default: 0| Which instance of the character you wish to alter.
@param [options.instant] {Boolean} |optional| If true, text will appear immediately rather than written out letter by letter.
@param [options.scrollable] {Boolean} |optional| If true, text can be scrolled using the mouse wheel and arrow keys.
@param [options.name] {String} |optional| Overrides the character name, if present.
@param [options.textAnimation] {Object} |optional| The effect applied to the text as it fades in.
@param [options.textSpeed] {Number} |optional| The number of characters written each second.
@param [options.decorativeClassNames] {Array} |optional| CSS decorative classes.
@param [options.structuralClassNames] {Array} |optional| CSS structural classes.
@param [options.keys] {Object} |optional|
@param [options.keys.accept] {Array} |optional| Keys that, when pressed, will advance the text.
@param [options.transitionIn] {Object} |optional|
@param [options.transitionIn.effect] {Object} |default: <set in config>| The effect to use while transitioning in.
@param [options.transitionIn.duration] {Number} |default: <set in config>| The duration of the transition in effect.
@param [options.transitionOut] {Object} |optional|
@param [options.transitionOut.effect] {Object} |default: <set in config>| The effect to use while transitioning out.
@param [options.transitionOut.duration] {Number} |default: <set in config>| The duration of the transition out effect.
@param [options.transitionDuration] {Number} |default: <set in config>| Sets the duration of both the transition in and out effect.
@param [options.duration] {Number} If set, will automatically close the text after the allotted time.

@return {Promise} Resolves when the text has been displayed in full and a key is pressed.
