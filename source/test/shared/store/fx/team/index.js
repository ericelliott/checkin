import test from 'tape';
import { team, isTeam } from 'shared/store/fx/team';

test('isTeam', nest => {
  nest.test('...with valid teams', assert => {
    const msg = 'should return true for valid teams';

    const obj = team();

    const actual = isTeam(obj) && isTeam({
      id: 'cigv8ir7k0000ttox80sll7po',
      name: 'foo'
    });
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...with invalid teams', assert => {
    const msg = 'should return false for invalid teams';

    const actual = isTeam(0) ||
      isTeam('') ||
      isTeam({}) ||
      isTeam(false) ||
      isTeam(undefined) ||
      isTeam(NaN) ||
      isTeam({
        name: 'A-team'
      }) ||
      isTeam({
        id: '123'
      }) ||
      isTeam(Infinity);

    const expected = false;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
