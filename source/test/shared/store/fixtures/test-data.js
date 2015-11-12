import user from 'shared/store/fx/user';

const data = {
  currentUser: user(),
  checkins: [
    { id: 'cigvmlmck000cttoxike1uf75',
      teamId: 'cigvax0nz0001ttoxrj7vssfz',
      userId: 'cigvaxw7m0002ttox1djydvn3',
      displayName: 'Eric',
      date: new Date(2015, 9, 1).getTime(),
      last: 'Joined the team',
      current: 'Search for pie' },
    { id: 'cigvle0rh0008ttox9mzu8mx2',
      teamId: 'cigvax0nz0001ttoxrj7vssfz',
      userId: 'cigvaxw7m0002ttox1djydvn3',
      displayName: 'Eric',
      date: new Date(2015, 9, 2).getTime(),
      last: 'Searched for pie',
      current: 'Share pie',
      blockers: ['Who wants pie?'] },
    { id: 'cigvlei0f0009ttoxg35wdxyv',
      teamId: 'cigvax0nz0001ttoxrj7vssfz',
      userId: 'cigvbmw5d0005ttox6kk34s9q',
      displayName: 'Indiana',
      date: new Date(2015, 9, 2).getTime(),
      last: 'Found Nemo',
      current: 'Find Zelda',
      blockers: ['Has anybody seen the Ocarina?'] },
    { id: 'cigvley0d000attoxe3fjb227',
      teamId: 'cigvax0nz0001ttoxrj7vssfz',
      userId: 'cigvb8j5c0004ttoxmzp1pm0s',
      displayName: 'JS Cheerleader',
      date: new Date(2015, 9, 1).getTime(),
      last: 'Booked interview',
      current: 'Get Netflix distribution' },
    { id: 'cigvlfih8000bttoxx0g7q8gc',
      teamId: 'cigvfq65s0006ttoxl2oxuze2',
      userId: 'cigvfqgve0007ttox92c477sv',
      displayName: 'Douglas Crockford',
      date: new Date(2015, 9, 2).getTime(),
      last: 'JS: The Better Parts World Tour',
      current: 'Fix app security' }
  ],
  teams: [
    { id: 'cigvax0nz0001ttoxrj7vssfz',
      name: 'Team Outlaws',
      members: [
        { userId: 'cigvaxw7m0002ttox1djydvn3',
          displayName: 'Eric' },
        { userId: 'cigvbmw5d0005ttox6kk34s9q',
          displayName: 'Indiana' },
        { userId: 'cigvb8j5c0004ttoxmzp1pm0s',
          displayName: 'JS Cheerleader' }
      ]
    },
    { id: 'cigvfq65s0006ttoxl2oxuze2',
      name: 'The Seif Project',
      members: [
        { userId: 'cigvfqgve0007ttox92c477sv',
          displayName: 'Douglas Crockford' }
      ]
    }
  ],
  users: [
    { id: 'cigvaxw7m0002ttox1djydvn3',
      userName: 'eric',
      displayName: 'Eric' },

    { id: 'cigvbmw5d0005ttox6kk34s9q',
      userName: 'indiana',
      displayName: 'Indiana' },

    { id: 'cigvb8j5c0004ttoxmzp1pm0s',
      username: 'jscheerleader',
      displayName: 'JS Cheerleader' },

    { id: 'cigvfqgve0007ttox92c477sv',
      userName: 'grandpoobah',
      displayName: 'Douglas Crockford' }
  ]
};

const outlawCheckins = [
  { id: 'cigvle0rh0008ttox9mzu8mx2',
    teamId: 'cigvax0nz0001ttoxrj7vssfz',
    userId: 'cigvaxw7m0002ttox1djydvn3',
    displayName: 'Eric',
    date: new Date(2015, 9, 2).getTime(),
    last: 'Searched for pie',
    current: 'Share pie',
    blockers: ['Who wants pie?'] },
  { id: 'cigvlei0f0009ttoxg35wdxyv',
    teamId: 'cigvax0nz0001ttoxrj7vssfz',
    userId: 'cigvbmw5d0005ttox6kk34s9q',
    displayName: 'Indiana',
    date: new Date(2015, 9, 2).getTime(),
    last: 'Found Nemo',
    current: 'Find Zelda',
    blockers: ['Has anybody seen the Ocarina?'] },
  { id: 'cigvley0d000attoxe3fjb227',
    teamId: 'cigvax0nz0001ttoxrj7vssfz',
    userId: 'cigvb8j5c0004ttoxmzp1pm0s',
    displayName: 'JS Cheerleader',
    date: new Date(2015, 9, 1).getTime(),
    last: 'Booked interview',
    current: 'Get Netflix distribution' }
];

export default data;
export { outlawCheckins };
