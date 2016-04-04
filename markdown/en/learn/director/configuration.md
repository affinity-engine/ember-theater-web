## Configuration

There are generally three ways to customize a direction. By modifying the specific direction, by setting attributes on an associated fixture, and finally by changing the config. They are prioritized in this order:

*   Options
*   Fixtures
*   Config

Consider this:

```js
script.Character('bitsy').Text('Hello world!').transitionIn({ opacity: 0.2 });
```

In this example, we don't provide a `classNames` argument, so the `Text` will either use the `classNames` specified in the config, or the `classNames` specified in the `bitsy` fixture, if there is one. Other the other hand, since we provide a `transitionIn`, we'll use `{ opacity: 0.2 }`, even if a `transitionIn` is specified in both the config and `bitsy` fixture.
