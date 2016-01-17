@param id {String,Object} An id corresponding to an `ember-theater/character` or an object containing both a character id and an expression id.
@param effect {Object} |optional| |default: { opacity: 1 }| CSS attributes and values.
@param [options] {Object} |optional|
@param [options.duration] {Number} |default: <set in config>| How long the effect takes to resolve.
@param [options.instance] {Number} |default: 0| Which instance of the character you wish to alter.
@return {Promise} Resolves when the effect has completed.
