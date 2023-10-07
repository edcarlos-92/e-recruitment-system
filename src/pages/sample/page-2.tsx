import React from 'react';
import AppPage from '../../@mactech/hoc/AppPage';
import asyncComponent from '../../@mactech/utility/asyncComponent';

const Page2 = asyncComponent(() =>
  import('../../modules/sample/Page2'),
);
export default AppPage(() => <Page2 />);
