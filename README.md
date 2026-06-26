# 🚀 detachhead's eslint-config

> [!IMPORTANT]
> 
> **ARCHIVED**
> 
> since i created this repo, eslint completely changed how their config files work (while somehow not solving any of the problems that made eslint config such a nightmare in the first place). i gave up trying to get my config to work with this new system, and i now use oxlint instead.
>
> if you are looking for alternatives to these rules, most of them are either already covered by oxlint, or are on their roadmap.
>
> for alternatives to the rules unique to my eslint plugin, [see here](https://github.com/DetachHead/eslint-plugin-detachhead#eslint-plugin-detachhead).

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
