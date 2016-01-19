@param id {String} An id corresponding to an `ember-theater/backdrop` model.
@param effect {Object} |optional| |default: { opacity: 1 }| CSS attributes and values.
@param [options] {Object} |optional|
@param [options.instance] {Number} |default: 0| Which instance of the backdrop you wish to alter.
@param [options.duration] {Number} |default: <set in config>| How long the effect takes to resolve.
@param [options.caption] {String} |default: <set in fixture>| The alt text that will appear for this image. Primarily used for accessability.
@param [options.src] {String} |default: <set in fixture>| The path to the image, relative to the `public` directory.

@return {Promise} Resolves when the effect has completed.
