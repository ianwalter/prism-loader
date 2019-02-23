# @ianwalter/prism-loader
> A Webpack loader that makes code blocks syntax highlightable using
> [Prism][prismUrl]

[![npm page][npmImage]][npmUrl]

## Installation

```console
yarn add @ianwalter/prism-loader --dev
```

## Usage

```js
{
  module: {
    rules: [
      { test: /\.html$/, loader: '@ianwalter/prism-loader' }
    ]
  }
}
```

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[prismUrl]: https://prismjs.com/
[npmImage]: https://img.shields.io/npm/v/@ianwalter/prism-loader.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/prism-loader
[licenseUrl]: https://github.com/ianwalter/prism-loader/blob/master/LICENSE
