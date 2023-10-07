import React from 'react';
import AppPage from '../@mactech/hoc/DefaultPage/index'
import asyncComponent from "../@mactech/utility/asyncComponent";

const SignUP = asyncComponent(() => import('../modules/auth/Signup/index'));
export default AppPage(() => <SignUP />);
