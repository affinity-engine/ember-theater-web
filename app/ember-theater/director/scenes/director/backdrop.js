import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Director/backdrop',

  script: async function() {
    const bitsy = this.Character('bitsy').position('offLeft', 0).position('center', 1000).namePosition('right');
    await bitsy.Text('theaters.backdrop.intro.bitsyGreeting').delay(1000);

    const emma = this.Character('emma').position('offLeft', 0).position('centerLeft', 1000);
    bitsy.position('centerRight', 400).delay(200);
    const classroom = this.Backdrop('classroom').transition('transition.fadeIn');
    await emma.Text('theaters.backdrop.intro.emmaClassroom');

    const beachDay = this.Backdrop('beach-day').transition('transition.fadeIn', 1000);
    classroom.transition('transition.fadeOut', 1000);
    bitsy.Expression('bitsy-laughing');
    emma.Expression('emma-bored');
    await bitsy.Text('theaters.backdrop.intro.bitsyBeach');
    emma.Expression('emma-neutral');
    await emma.Text('theaters.backdrop.intro.emmaBeach');
    bitsy.Expression('bitsy-happy');
    await bitsy.Text('theaters.backdrop.intro.bitsyBeach2');

    beachDay.transition({ translateZ: '10vh' }).transition({ translateY: '5vh' }).transition({ translateZ: 0, translateY: 0 }, 2000).delay(3000);
    await emma.Text('theaters.backdrop.intro.emmaTransition');
    bitsy.Expression('bitsy-laughing');
    await bitsy.Text('theaters.backdrop.intro.bitsyTransition');
    await emma.Text('theaters.backdrop.intro.emmaCustomEffect');
    bitsy.Expression('bitsy-neutral');
    await bitsy.Text('theaters.backdrop.intro.bitsyCustomEffect');

    beachDay.transition('transition.fadeOut', 3500);
    const beachNight = this.Backdrop('beach-night').transition('transition.fadeIn', 3500);
    bitsy.Expression('bitsy-panic').delay(1250);
    await emma.Text('theaters.backdrop.intro.emmaMultiple');
    await bitsy.Text('theaters.backdrop.intro.bitsyMultiple');
    bitsy.Expression('bitsy-bored').delay(1000);
    await emma.Text('theaters.backdrop.intro.emmaNight');
    await bitsy.Text('theaters.backdrop.intro.bitsyNight').typeSpeed(2);
    emma.Expression('emma-embarrassed').delay(500);
    await emma.Text('theaters.backdrop.intro.emmaOkay').typeSpeed(3);
    await emma.Text('theaters.backdrop.intro.emmaFade');
    await emma.Text('theaters.backdrop.intro.emmaFinal').delay(500);

    beachNight.transition('transition.fadeOut', 1000);
    emma.transition('transition.fadeOut', 800);
    bitsy.transition('transition.fadeOut', 800);
  }
});
