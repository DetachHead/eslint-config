# 🚀 detachhead's eslint-config

My recommended eslint rules for a TypeScript project.

## 💾 How to install

```shell
npm install --save-dev @detachhead/eslint-config
```

## ✨ How to use

Put in your `.eslintrc.js`:

```js
module.exports = {
    extends: ['@detachhead/eslint-config'],
}
```

## 🕵️‍♂️ Troubleshooting

If you see (drink) errors about missing plugins, make sure all of the [`peerDependencies`](./package.json) are installed.
Also upvote [this issue](https://github.com/eslint/eslint/issues/3458) while you're at it.
