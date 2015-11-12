import rfx from 'rfx';
import cuid from 'cuid';

const isTeam = ({ name, id } = {}) => {
  if (typeof name !== 'string') return false;
  if (typeof id !== 'string') return false;
  return true;
};

const team = rfx({
  type: isTeam,
  fn: ({ name = `Unnamed_Team_${ cuid.slug() }`, id = cuid() } = {}) => {
    return {
      id,
      name
    };
  }
});

export default team;
export { isTeam, team };
