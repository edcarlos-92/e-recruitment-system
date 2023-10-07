import React from 'react';
import AppPage from '../@mactech/hoc/DefaultPage/index'
import asyncComponent from "../@mactech/utility/asyncComponent";

const ForgotPassword = asyncComponent(() => import('../modules/auth/ForgetPassword/index'));
export default AppPage(() => <ForgotPassword />);
