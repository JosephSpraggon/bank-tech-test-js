
const Account = require('../src/account');

beforeEach(() => {
  account = new Account;
  jest.spyOn(Date.prototype, 'getDate').mockReturnValue('Day');
  jest.spyOn(Date.prototype, 'getMonth').mockReturnValue('Month');
  jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue('Year');
  jest.spyOn(Date.prototype, 'getHours').mockReturnValue('Hour');
  jest.spyOn(Date.prototype, 'getMinutes').mockReturnValue('Min');
  jest.spyOn(Date.prototype, 'getSeconds').mockReturnValue('Sec');
})


describe('Account class', () => {

  test('should create an object', () => {
    expect(new Account).toBeInstanceOf(Account);
  })

  test('should initialize with a default balance of zero', () => {
    expect(account.balance).toEqual(0);
  })

  test('should keep record of a single transaction', () => {
    account.deposit(100);
    expect(account.transactions).toEqual({"Day/Month1/Year Hour:Min:Sec": 100});
  })


  test('should keep record of multiple transactions', () => {
    account.deposit(100);
    account.withdraw(50);
    account.deposit(20);
    expect(account.transactions).toEqual({"Day/Month1/Year Hour:Min:Sec": 100, "Day/Month1/Year Hour:Min:Sec": -50, "Day/Month1/Year Hour:Min:Sec": 20});
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
