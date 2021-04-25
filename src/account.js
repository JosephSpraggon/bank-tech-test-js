module.exports = class Account {

  constructor() {
    this.balance = 0
    this.transactions = {}
  };

  deposit = (amount) => {
    this.balance += amount;
    var date = new Date()
    this.transactions[date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()] = amount;
  }

  withdraw = (amount) => {
    if(this.balance - amount < 0){
      throw 'Insufficient funds';
    }
    this.balance -= amount;
    var date = new Date()
    this.transactions[date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()] = -amount;
  }

  print = () => {
   return this.transactions;
  }

};