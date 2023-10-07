import Settings from './Setting';
import Common, { UsersReducer } from './Common';
import General from './General';
import MacTechRecruit from './MacTechRecruit';

const reducers = {
  settings: Settings,
  common: Common,
  usereducer: UsersReducer,
  general: General,
  mactechrecruit: MacTechRecruit,
};

export default reducers;
