@param id {String} An id corresponding to an `ember-theater/backdrop` model.
@param effect {Object} |optional| |default: { opacity: 1 }| CSS attributes and values.
@param [options] {Object} |optional|
@param [options.duration] {Number} |default: <set in config>| How long the effect takes to resolve.
@param [options.instance] {Number} |default: 0| Which instance of the backdrop you wish to alter.
@return {Promise} Resolves when the effect has completed.
