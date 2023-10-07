import React from 'react';
import AppPage from '../@mactech/hoc/DefaultPage/index';
import asyncComponent from '../@mactech/utility/asyncComponent';

const ConfirmSignup = asyncComponent(() =>
  import('../modules/auth/ConfirmSignupAwsCognito'),
);
export default AppPage(() => <ConfirmSignup />);
