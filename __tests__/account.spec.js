const Account = require('../src/account');

describe('Account class', () => {
  test('should create an object', () => {
    expect(new Account).toBeInstanceOf(Account);
  })
});