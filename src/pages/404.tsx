import asyncComponent from '../@mactech/utility/asyncComponent';

export default asyncComponent(() =>
  import('../modules/errorPages/Error404/index'),
);
