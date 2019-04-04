const credential = {
  username: 'hedwig',
  password: ''
}

module.exports = {
  'search nightwatch on baidu': function (browser) {
    browser
      .url('http://35.185.90.193/admin/login/')
      .waitForElementVisible('body', 3000)
      .setValue('#id_username', credential.username)
      .setValue('#id_password', credential.password)
      .click('.submit-row input')
      .pause(3000)
      .getCookies((result)=>{
        console.info(result)
      })
      .end();
  }
};