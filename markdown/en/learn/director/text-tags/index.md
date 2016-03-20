By default, text fades in one character at a time. You can use text tags to alter this behavior, executing special effects the moment in which they're encountered. For instance:

```js
script.text(`Hello! Right now, the text is displaying with the default behavior.
  But ((#speed 20)) now it is going much faster!!! And, you know what? ((#instant))
  All this text is appearing instantly! No more of this one letter at a time business!
  ((/instant)) Well, until now. Since we just closed the 'instant' tag, it's back
  to one letter at a time!`);
```

In the example above, we're using two different tag types. (There are many others.) The first, `speed` changes the rate at which new characters fade in. The default is 25 milliseconds, so by decreasing it to 20, new characters are drawn more frequently.

The second tag in this example does something a bit more interesting. The `instant` tag has both an opening--`((#instant))`--and a closing tag--`((/instant))`. Note that opening tags start with a `#`, while closing tags end with a `/`. Generally, opening tags start behavior, while closing tags end it. Not all text tags support closing tags.

Note that you can always generate your own text tags or use community created alternatives.
