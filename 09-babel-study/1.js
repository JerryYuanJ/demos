const babel = require("@babel/core");

const code = `const hi = name => 'hi:' + name`

babel.transform(code, {}, (error, result) => {
  console.info(result.code)
  console.info(result.map)
  console.info(result.ast)
})
