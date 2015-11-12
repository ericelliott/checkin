import mori from 'mori';
import rfx from 'rfx';
import {
  where as lWhere,
  findWhere as lFindWhere
} from 'lodash/collection';

import { isUser } from 'shared/store/fx/user';

const m = mori;

const findWhere = (collection, clauses) => {
  const coll = m.toJs(collection);
  const filtered = lFindWhere(coll, clauses);
  return m.toClj(filtered);
};

const where = (collection, clauses) => {
  const coll = m.toJs(collection);
  const filtered = lWhere(coll, clauses);
  return m.toClj(filtered);
};

const store = {
  fromObj: (data) => {
    const state = m.toClj(data);

    return {
      toObj () { return m.toJs(state); },
      get (key) { return m.toJs(m.get(state, key)); },

      getCheckins: rfx({
        name: 'getCheckins',
        type: `getCheckins({ teamId: string }): checkin[]`,
        description: 'Get the most recent checkin for each member of the team.',
        fn ({ teamId }) {
          // get the team
          const teams = m.get(state, 'teams');
          const team = findWhere(teams, { id: teamId });

          // for each member of the team
          const members = m.get(team, 'members');
          const checkins = m.get(state, 'checkins');
          let latest = m.toClj([]); // latestCheckin: checkin[]

          const byDate = (checkin) => {
            const date = m.get(checkin, 'date');
            return m.get(checkin, date);
          };
          const mostRecent = (a, b) => { return b - a; };

          // get the latest checkin
          m.each(members, (member) => {
            const userId = m.get(member, 'userId');
            const memberCheckins = where(checkins, { userId, teamId });
            const latestCheckin = m.last(m.sortBy(byDate, mostRecent, memberCheckins));
            latest = m.conj(latest, latestCheckin);
          });

          return m.toJs(latest);
        }
      })

    };
  },
  isUser
};

export default store;
