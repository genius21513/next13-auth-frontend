import authActions from './authActions';
import errorActions from './errorActions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...authActions,
  ...errorActions
};
