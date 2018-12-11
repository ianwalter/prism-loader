const unified = require('unified')
const rehypePrism = require('rehype-prism')
const parse = require('@starptech/rehype-webparser')
const toHTML = require('hast-util-to-html')
require('./javascript')

function stringify () {
  function compiler (tree) {
    return toHTML(tree, { allowDangerousCharacters: true })
  }
  this.Compiler = compiler
}
const processor = unified().use(parse).use(rehypePrism).use(stringify)

module.exports = function prismLoader (html) {
  return processor.processSync(html).toString()
}
