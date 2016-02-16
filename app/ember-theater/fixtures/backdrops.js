/*
  @property id {String} The id by which you'll reference this backdrop.
  @property caption {String} The alt text that will appear for this image. Primarily used for accessability.
  @property src {String} The path to the image, relative to the `public` directory.

  Example:

  {
    id: 'beach--night',
    caption: 'beach at nighttime',
    src: 'images/backdrops/beach--night.jpg'
  }
*/

export default [{
  id: 'classroom',
  caption: 'Classroom',
  src: 'theater/backdrops/classroom.png'
}, {
  id: 'beach-day',
  caption: 'beach during the day',
  src: 'theater/backdrops/beach-day.jpg'
}, {
  id: 'beach-night',
  caption: 'beach during the night',
  src: 'theater/backdrops/beach-night.jpg'
}];
