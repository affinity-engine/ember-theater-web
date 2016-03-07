import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Director/backdrop',

  script: async function() {
    const bebe = this.Character('bebe').position('offLeft', 0).position('center', 1000).namePosition('right');
    await bebe.Text('theaters.backdrop.intro.bebeGreeting').delay(1000);

    const blixie = this.Character('blixie').position('offLeft', 0).position('centerLeft', 1000);
    bebe.position('centerRight', 400).delay(200);
    const classroom = this.Backdrop('classroom').transition('transition.fadeIn');
    await blixie.Text('theaters.backdrop.intro.blixieClassroom');

    const beachDay = this.Backdrop('beach-day').transition('transition.fadeIn', 1000);
    classroom.transition('transition.fadeOut', 1000);
    bebe.Expression('bebe-laughing');
    blixie.Expression('blixie-bored');
    await bebe.Text('theaters.backdrop.intro.bebeBeach');
    blixie.Expression('blixie-neutral');
    await blixie.Text('theaters.backdrop.intro.blixieBeach');
    bebe.Expression('bebe-happy');
    await bebe.Text('theaters.backdrop.intro.bebeBeach2');

    beachDay.transition({ translateZ: '10vh' }).transition({ translateY: '5vh' }).transition({ translateZ: 0, translateY: 0 }, 2000).delay(3000);
    await blixie.Text('theaters.backdrop.intro.blixieTransition');
    bebe.Expression('bebe-laughing');
    await bebe.Text('theaters.backdrop.intro.bebeTransition');
    await blixie.Text('theaters.backdrop.intro.blixieCustomEffect');
    bebe.Expression('bebe-neutral');
    await bebe.Text('theaters.backdrop.intro.bebeCustomEffect');

    beachDay.transition('transition.fadeOut', 3500);
    const beachNight = this.Backdrop('beach-night').transition('transition.fadeIn', 3500);
    bebe.Expression('bebe-panic').delay(1250);
    await blixie.Text('theaters.backdrop.intro.blixieMultiple');
    await bebe.Text('theaters.backdrop.intro.bebeMultiple');
    bebe.Expression('bebe-bored').delay(1000);
    await blixie.Text('theaters.backdrop.intro.blixieNight');
    await bebe.Text('theaters.backdrop.intro.bebeNight').typeSpeed(2);
    blixie.Expression('blixie-embarrassed').delay(500);
    await blixie.Text('theaters.backdrop.intro.blixieOkay').typeSpeed(3);
    await blixie.Text('theaters.backdrop.intro.blixieFade');
    await blixie.Text('theaters.backdrop.intro.blixieFinal').delay(500);

    beachNight.transition('transition.fadeOut', 1000);
    blixie.transition('transition.fadeOut', 800);
    bebe.transition('transition.fadeOut', 800);
  }
});
