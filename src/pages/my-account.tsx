import React from 'react';
import AppPage from '@mactech/hoc/AppPage';
import asyncComponent from '@mactech/utility/asyncComponent';

const Account = asyncComponent(() => import('modules/userAccount'));
export default AppPage(() => <Account />);
