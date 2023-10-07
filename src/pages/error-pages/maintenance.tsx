import React from 'react';
import AppPage from '../../@mactech/hoc/AppPage'
import asyncComponent from "../../@mactech/utility/asyncComponent";

const Maintenance = asyncComponent(() => import('../../modules/errorPages/Maintenance'));
export default AppPage(() => <Maintenance />);
