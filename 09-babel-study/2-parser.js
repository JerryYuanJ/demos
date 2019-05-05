const parser =  require("@babel/parser");

const code = `
  const hi = name => 'hi:' + name
`

const ast = parser.parse(code);
console.info(ast);
