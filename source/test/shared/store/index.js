import test from 'tape';

import { fromObj, isUser } from 'shared/store';

import testData from './fixtures/test-data';
import { outlawCheckins } from './fixtures/test-data';

test('store.fromObj(), store.toObj()', assert => {
  const msg = 'should load data from JS object.';

  const data = fromObj(testData);

  const actual = data.toObj();
  const expected = testData;

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test('store.get({currentUser})', assert => {
  const msg = 'should retrieve current user';

  const data = fromObj(testData);

  const user = data.get('currentUser');

  const actual = isUser(user);
  const expected = true;

  assert.equal(actual, expected, msg);
  assert.end();
});

test('.getCheckins()', assert => {
  const msg = 'should retrieve the most recent checkin for each member of the team';

  const teamId = 'cigvax0nz0001ttoxrj7vssfz';
  const data = fromObj(testData);
  const actual = data.getCheckins({ teamId });
  const expected = outlawCheckins; // 'foo'

  assert.deepEqual(actual, expected, msg);
  assert.end();
});
