import React from 'react';
import AppPage from '@mactech/hoc/AppPage';
import asyncComponent from '@mactech/utility/asyncComponent';

const UserLogs = asyncComponent(() => import('modules/getlogs'));
export default AppPage(() => <UserLogs />);
