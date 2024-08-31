function Account(login, email) {
    this.login = login
    this.email = email
}
  
Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.email}`)
}

const user = new Account('marchello', 'marchello@gmail.com')
user.getInfo()