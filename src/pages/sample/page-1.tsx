import React from 'react';
import AppPage from '../../@mactech/hoc/AppPage';
import asyncComponent from '../../@mactech/utility/asyncComponent';

const Page1 = asyncComponent(() =>
  import('../../modules/sample/Page1'),
);
export default AppPage(() => <Page1 />);
