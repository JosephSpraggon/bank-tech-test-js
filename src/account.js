module.exports = class Account {

  constructor() {
    this.balance = 0
  };

  deposit = (amount) => {
    this.balance += amount;
  }

  withdraw = (amount) => {
    if(this.balance - amount < 0){
      throw 'Insufficient funds';
    }
    this.balance -= amount;
  }

};