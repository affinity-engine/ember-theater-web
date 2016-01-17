@param characterId {String} |optional| An id corresponding to an `ember-theater/character`.
@param text {String} The text that will appear in the text box.
@param [options] {Object} |optional|
@param [options.instant] {Boolean} |optional| If true, text will appear immediately rather than written out letter by letter
@param [options.displayName] {String} |optional| Overrides the character name, if present.
@param [options.textSpeed] {Number} |optional| The number of characters written each second.
@param [options.classNames] {Array} |optional| Class names to change the style of the text.
@param [options.keys.accept] {Array} |optional| Keys that, when pressed, will advance the text.
@return {Promise} Resolves when the text has been displayed in full and a key is pressed.
