export default Scene.extend({
  script() {
    await this.character('bebe', 'transition.fadeIn');
    await this.character('bebe', { translateX: '50vw' });
    this.text('bebe', 'Hi! My name is Bebe!');
  }
})
