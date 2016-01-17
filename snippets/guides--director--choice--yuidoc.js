@param header {String} |optional| A prompt for the choices.
@param choices {Array} The options available to the user to choose from.
@param [options] {Object} |optional|
@param [options.keys.moveUp] {Array} |optional| Keys that move the focus up.
@param [options.keys.moveDown] {Array} |optional| Keys that move the focus down.
@param [options.keys.cancel] {Array} |optional| Keys that cancel an inputable choice.
@return {Promise} Resolves when a choice has been selected, passing an object with format { key, text, input }
