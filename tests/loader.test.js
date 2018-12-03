const { join } = require('path')

const webpack = require('webpack')
const MemoryFileSystem = require('memory-fs')

test('loader adds syntax highlighting HTML', done => {
  const compiler = webpack({
    entry: join(__dirname, 'fixtures/test.html'),
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: '@ianwalter/callback-loader',
              options: {
                callback: function (content) {
                  expect(content).toMatchSnapshot()
                  done()
                }
              }
            },
            {
              loader: join(__dirname, '../')
            }
          ]
        }
      ]
    }
  })
  compiler.outputFileSystem = new MemoryFileSystem()
  compiler.run()
})
