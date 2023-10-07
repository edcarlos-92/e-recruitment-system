import React from 'react';
import AppPage from '../@mactech/hoc/DefaultPage/index'
import asyncComponent from "../@mactech/utility/asyncComponent";

const SignIn = asyncComponent(() => import('../modules/auth/Signin/index'));
export default AppPage(() => <SignIn />); 
