@property id {String} The id by which you will reference this backdrop.
@property caption {String} The alt text that will appear for this image. Primarily used for accessability.
@property src {String} The path to the image, relative to the `public` directory.

Example:

// app/ember-theater/fixtures/backdrops.js

export default [{
  id: 'beach',
  caption: 'beach at daytime',
  src: 'images/backdrops/beach.jpg'
}, {
  id: 'beach--night',
  caption: 'beach at nighttime',
  src: 'images/backdrops/beach--night.jpg'
}];
