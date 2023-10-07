import React from 'react';
import AppPage from '@mactech/hoc/AppPage';
import asyncComponent from '@mactech/utility/asyncComponent';

const SystemUsers = asyncComponent(() => import('modules/SystemUsers'));
export default AppPage(() => <SystemUsers />);
