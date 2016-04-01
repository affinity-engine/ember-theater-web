import { Scene } from 'ember-theater/ember-theater/director';

export default Scene.extend({
  name: 'Director/backdrop',

  start: async function(script) {
    const bitsy = script.Character('bitsy').position('offLeft', 0).position('center', 1500).namePosition('right');
    await bitsy.Text('theaters.backdrop.intro.bitsyGreeting').delay(1000);

    const emma = script.Character('emma').position('offLeft', 0).position('centerLeft', 1500);
    bitsy.delay(200).position('centerRight', 400);
    const classroom = script.Backdrop('classroom').transition('transition.fadeIn');
    await emma.Text('theaters.backdrop.intro.emmaClassroom');

    const beachDay = script.Backdrop('beach-day').transition('transition.fadeIn', 1000);
    classroom.transition('transition.fadeOut', 1000);
    bitsy.expression('bitsy-laughing');
    emma.expression('emma-bored');
    await bitsy.Text('theaters.backdrop.intro.bitsyBeach');
    emma.expression('emma-neutral');
    await emma.Text('theaters.backdrop.intro.emmaBeach');
    bitsy.expression('bitsy-happy');
    await bitsy.Text('theaters.backdrop.intro.bitsyBeach2');

    beachDay.delay(3000).transition({ translateZ: '10vh' }).transition({ translateY: '5vh' }).transition({ translateZ: 0, translateY: 0 }, 2000);
    await emma.Text('theaters.backdrop.intro.emmaTransition');
    bitsy.expression('bitsy-laughing');
    await bitsy.Text('theaters.backdrop.intro.bitsyTransition');
    await emma.Text('theaters.backdrop.intro.emmaCustomEffect');
    bitsy.expression('bitsy-neutral');
    await bitsy.Text('theaters.backdrop.intro.bitsyCustomEffect');

    beachDay.transition('transition.fadeOut', 3500);
    const beachNight = script.Backdrop('beach-night').transition('transition.fadeIn', 3500);
    bitsy.delay(1250).expression('bitsy-panic');
    await emma.Text('theaters.backdrop.intro.emmaMultiple');
    await bitsy.Text('theaters.backdrop.intro.bitsyMultiple');
    bitsy.delay(1000).expression('bitsy-bored');
    await emma.Text('theaters.backdrop.intro.emmaNight');
    await bitsy.Text('theaters.backdrop.intro.bitsyNight').typeSpeed(2);
    emma.delay(500).expression('emma-embarrassed');
    await emma.Text('theaters.backdrop.intro.emmaOkay').typeSpeed(3);
    await emma.Text('theaters.backdrop.intro.emmaFade');
    await emma.Text('theaters.backdrop.intro.emmaFinal').delay(500);

    beachNight.transition('transition.fadeOut', 1000);
    emma.transition('transition.fadeOut', 800);
    bitsy.transition('transition.fadeOut', 800);
  }
});
