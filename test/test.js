import { join } from 'path'
import test from 'ava'
import webpack from 'webpack'
import MemoryFileSystem from 'memory-fs'

test.cb('loader adds syntax highlighting HTML', t => {
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
                callback: content => {
                  t.snapshot(content)
                  t.end()
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
