import React from 'react';
import AppPage from '../../@mactech/hoc/AppPage';
import asyncComponent from '../../@mactech/utility/asyncComponent';

const Error503 = asyncComponent(() =>
  import('../../modules/errorPages/Error503'),
);
export default AppPage(() => <Error503 />);
