import React from 'react';
import AppPage from '../@mactech/hoc/DefaultPage/index';
import asyncComponent from '../@mactech/utility/asyncComponent';

const ResetPassword = asyncComponent(() =>
  import('../modules/auth/ResetPasswordAwsCognito'),
);
export default AppPage(() => <ResetPassword />);
