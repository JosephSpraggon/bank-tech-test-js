
const Account = require('../src/account');

beforeEach(() => {
  account = new Account;
})

describe('Account class', () => {

  test('should create an object', () => {
    expect(new Account).toBeInstanceOf(Account);
  })

  test('should initialize with a default balance of zero', () => {
    expect(account.balance).toEqual(0);
  })

  test('should keep record of transactions', () => {
    account.deposit(100);
    expect(account.transactions).toEqual({"25/4/2021": 100});
  })

});

describe('#deposit', () => {

  test('you can make a deposit', () => {
    account.deposit(10)
    expect(account.balance).toEqual(10);
  })

})

describe('#withdraw', () => {

  test('you can make a withdrawal', () => {
    account.deposit(100)
    account.withdraw(10)
    expect(account.balance).toEqual(90);
  })

  test('you can not go overdrawn', () => {
    expect(() => {
      account.withdraw(10);
    }).toThrow('Insufficient funds')
  })

})
