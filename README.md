# detachhead's eslint-config

my recommended eslint rules for a typescript project

## install

```shell
npm install --save-dev @detachhead/eslint-config
```

## usage

in your `.eslintrc.js`:

```js
module.exports = {
    extends: ['@detachhead/eslint-config'],
}
```

## troubleshooting

if you see errors about missing plugins, make sure all of the [`peerDependencies`](./package.json) are installed.
also upvote [this issue](https://github.com/eslint/eslint/issues/3458) while you're at it
