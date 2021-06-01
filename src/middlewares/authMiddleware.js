/* eslint-disable no-console */
const auth = (store) => (next) => (action) => {
  console.log('state:', store.getState());
  console.log('action:', action);

  next(action);
};

export default auth;
