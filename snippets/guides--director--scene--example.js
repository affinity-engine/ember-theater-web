if (goingToTheBeach) {
  // transitions to the beach scene
  this.transitionToScene('beach');
} else {
  // transition to the secret-menu scene, but do not autosave in the process
  this.transitionToScene('secret-menu', { autosave: false });
}
