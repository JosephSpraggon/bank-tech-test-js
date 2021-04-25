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

});

// describe('Deposit', () => {
//   test('you can make a deposit', () => {
//     account.deposit(10)
//     expect(account.balance).toEqual(10);
//   })
// })
