import React from 'react';
import AppPage from '../../@mactech/hoc/AppPage'
import asyncComponent from "../../@mactech/utility/asyncComponent";

const Error404 = asyncComponent(() => import('../../modules/errorPages/Error404'));
export default AppPage(() => <Error404 />);
