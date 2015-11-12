import rfx from 'rfx';
import cuid from 'cuid';

const isUser = ({ userName, id, displayName } = {}) => {
  if (typeof userName !== 'string') return false;
  if (typeof displayName !== 'string') return false;
  if (typeof id !== 'string') return false;
  return true;
};

const user = rfx({
  type: isUser,
  fn: ({ userName = `Anonymous_${ cuid.slug() }`, id = cuid(), displayName } = {}) => {
    return {
      id,
      userName,
      displayName: displayName ? displayName : userName
    };
  }
});

export default user;
export { isUser, user };
