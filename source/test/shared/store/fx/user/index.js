import test from 'tape';
import { user, isUser } from 'shared/store/fx/user';

test('isUser', nest => {
  nest.test('...with valid users', assert => {
    const msg = 'should return true for valid users';

    const obj = user();

    const actual = isUser(obj) && isUser({
      id: 'cigv8ir7k0000ttox80sll7po',
      userName: 'foo',
      displayName: 'foo'
    });
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...with invalid users', assert => {
    const msg = 'should return false for invalid users';

    const actual = isUser(0) ||
      isUser('') ||
      isUser({}) ||
      isUser(false) ||
      isUser(undefined) ||
      isUser(NaN) ||
      isUser({
        username: 'echo'
      }) ||
      isUser({
        id: '123'
      }) ||
      isUser(Infinity) ||
      isUser({
        id: 'cigv8ir7k0000ttox80sll7po',
        username: 'foo'
      });

    const expected = false;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
