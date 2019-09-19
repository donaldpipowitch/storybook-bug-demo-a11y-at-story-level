Run `$ yarn && yarn storybook` and visit `http://localhost:6006/?path=/story/button--text`. The a11y check works. Now visit `http://localhost:6006/?path=/story/button--emoji` - the check runs forever, because we configured it with an unknown root element. Now go back to `http://localhost:6006/?path=/story/button--text`. The check should work again, but it looks like the params aren't resetted correctly.

[Bug Report](https://github.com/storybookjs/storybook/issues/8126)
