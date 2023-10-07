import React from 'react';
import AppPage from '../../@mactech/hoc/AppPage';
import asyncComponent from '../../@mactech/utility/asyncComponent';

const Error401 = asyncComponent(() =>
  import('../../modules/errorPages/Error401'),
);
export default AppPage(() => <Error401 />);
