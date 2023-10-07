import React from 'react';
import AppPage from '../../@mactech/hoc/AppPage'
import asyncComponent from "../../@mactech/utility/asyncComponent";

const ComingSoon = asyncComponent(() => import('../../modules/errorPages/ComingSoon'));
export default AppPage(() => <ComingSoon />);
