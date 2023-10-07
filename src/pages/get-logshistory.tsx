import React from 'react';
import AppPage from '@mactech/hoc/AppPage';
import asyncComponent from '@mactech/utility/asyncComponent';

const LogsHistory = asyncComponent(() => import('modules/getloghistory'));
export default AppPage(() => <LogsHistory />);
