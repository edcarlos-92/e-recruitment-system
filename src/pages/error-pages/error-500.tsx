import React from 'react';
import AppPage from '../../@mactech/hoc/AppPage'
import asyncComponent from "../../@mactech/utility/asyncComponent";

const Error500 = asyncComponent(() => import('../../modules/errorPages/Error500'));
export default AppPage(() => <Error500 />);
