define((require, exports, module) => {

  function welcome(person) {
    const { gender, name } = person
    let preMsg
    if (gender === 'male') {
      preMsg = require('module-2.js')
    } else if (gender === 'female') {
      preMsg = require('module-3.js')
    }
    alert(preMsg() + name)
  }
  module.exports = welcome;
});
