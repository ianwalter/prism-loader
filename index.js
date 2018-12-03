const rehype = require('rehype')
const rehypePrism = require('rehype-prism')

const processor = rehype().use(rehypePrism)

module.exports = function prismLoader (html) {
  return processor.processSync(html).toString()
}
