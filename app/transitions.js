export default function() {

  this.transition(
    this.toRoute((routeName) => routeName.indexOf('learn') === 0 ),
    this.use('toRight')
  );

  this.transition(
    this.toRoute((routeName) => (routeName.match(/\./g) || []).length === 0 || routeName === 'index'),
    this.use('toDown')
  );
}
