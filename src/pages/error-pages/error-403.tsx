import React from 'react';
import AppPage from '../../@mactech/hoc/AppPage'
import asyncComponent from "../../@mactech/utility/asyncComponent";

const Error403 = asyncComponent(() => import('../../modules/errorPages/Error403'));
export default AppPage(() => <Error403 />);
