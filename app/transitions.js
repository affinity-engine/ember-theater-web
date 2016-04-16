export default function() {
  this.transition(
    this.toRoute((routeName) => routeName.indexOf('learn') === 0 ),
    this.use('toRight')
  );
}
