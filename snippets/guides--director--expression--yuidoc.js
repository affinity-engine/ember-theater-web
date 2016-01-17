@param characterId {String} An id corresponding to an `ember-theater/character`.
@param expressionId {String} An id corresponding to an `ember-theater/character-expression`.
@param [options] {Object} |optional|
@param [options.transitionIn] {Object} |optional| Instructs the transition-in effect.
@param [options.transitionIn.effect] {Object} |default: { opacity: 1 }| The transition-in effect.
@param [options.transitionIn.duration] {Number} |default: <set in config>| How long the transition-in effect takes to resolve.
@param [options.transitionOut] {Object} |optional| Instructs the transition-out effect.
@param [options.transitionOut.effect] {Object} |default: { opacity: 0 }| The transition-out effect.
@param [options.transitionOut.duration] {Number} |default: <set in config>| How long the transition-out effect takes to resolve.
@return {Promise} Resolves when the transition-in effect has completed.
