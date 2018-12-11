Prism.languages.insertBefore('javascript', 'keyword', {
  global: {
    pattern: /\b(?:this|window|document|console|global|process|__dirname|__filename)\b/
  }
})
Prism.languages.insertBefore('javascript', 'function', {
  method: {
    pattern: /(\.\s*)[a-z_$][\w$]*(?=(\())/i,
    lookbehind: true,
    alias: 'function'
  }
})
