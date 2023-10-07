import React from 'react';
import AppPage from '@mactech/hoc/AppPage';
import asyncComponent from '@mactech/utility/asyncComponent';

const CustomerRegistration = asyncComponent(() => import('modules/sysnotifications'));
export default AppPage(() => <CustomerRegistration />);
