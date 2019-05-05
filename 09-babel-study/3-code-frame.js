const codeFrame = require('@babel/code-frame')

const rawLines = `class Person{
  constructor() {}
  getName() { return this.name }
}`

const location = { start: { line: 2, column: 16 }, end: { line: 3, column: 5 } };

const option = {
  // highlightCode: true,
  forceColor: true,
  linesAbove: 4,
  message: '湖人总冠军'
}

const result = codeFrame.codeFrameColumns(rawLines, location, option);

// console.log(result);

console.info(codeFrame.codeFrameColumns.toString())

