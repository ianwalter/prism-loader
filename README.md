# @ianwalter/prism-loader
> A Webpack loader that makes code blocks syntax highlightable using
> [Prism][prismUrl]

## Installation

```
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
[licenseUrl]: https://github.com/ianwalter/prism-loader/blob/master/LICENSE
