import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IntlMessages from "@mactech/utility/IntlMessages";
import { BiUser, BiBookReader } from "react-icons/bi";
import { AiOutlineLock, AiFillDashboard } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountTabsWrapper from "./AccountTabsWrapper";
import PersonalInfo from "./PersonalInfo";
import ChangePassword from "./ChangePassword";
import Information from "./Information";
import Social from "./Social";
import Notification from "./Notification";
import accountData from "@mactech/services/db/extraPages/account";
import { AppAnimate, AppNotifications } from "@mactech";
import { Fonts } from "shared/constants/AppEnums";

import ApplicantDashboard from '../macTech/ApplicationForm/ApplicantDashboard'
import { useAuthUser } from '@mactech/utility/AuthHooks'
import AlertMessages from "modules/macTech/Notifications/AlertMessages";

//import AlertMessages from ''

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// if(user.aplicant_sts == 1){

// }

const tabs = [

  // {
  //   id: 0,
  //   icon: <AiFillDashboard />,
  //   name: <IntlMessages id="applicant.ApplicantDashboard" />
  // },

  {
    id: 0,
    icon: <BiUser />,
    name: <IntlMessages id="common.personalInfo" />
  },
  {
    id: 1,
    icon: <AiOutlineLock />,
    name: <IntlMessages id="common.changePassword" />,
  },
  {
    id: 2,
    icon: <NotificationsNoneIcon />,
    name: <IntlMessages id="healthCare.notification" />,
  },

  /*
    {
      id: 3,
      icon: <IoMdInformationCircleOutline />,
      name: <IntlMessages id="common.information" />,
    },
    {
      id: 4,
      icon: <IoShareSocialOutline />,
      name: <IntlMessages id="common.social" />,
    },
    {
      id: 5,
      icon: <NotificationsNoneIcon />,
      name: <IntlMessages id="healthCare.notification" />,
    },
  */

];

const dashboardTab = [
  {
    id: 0,
    icon: <AiFillDashboard />,
    name: <IntlMessages id="applicant.ApplicantDashboard" />
  },
  {
    id: 1,
    icon: <BiUser />,
    name: <IntlMessages id="common.personalInfo" />
  },
  {
    id: 2,
    icon: <AiOutlineLock />,
    name: <IntlMessages id="common.changePassword" />,
  },
  {
    id: 3,
    icon: <NotificationsNoneIcon />,
    name: <IntlMessages id="healthCare.notification" />,
  },
]

const Account = () => {

  const { user, isAuthenticated, isLoading } = useAuthUser();

  const [value, setValue] = React.useState<number>(0);

  const onTabsChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(+newValue);
  };

  // // return (
    <>
      <Box
        component="h2"
        sx={{
          fontSize: 16,
          color: "text.primary",
          fontWeight: Fonts.SEMI_BOLD,
          mb: {
            xs: 2,
            lg: 4,
          },
        }}
      >
        My Account
      </Box>
      <AppAnimate animation="transition.slideUpIn" delay={200}>

        {user.user_role == "Applicant" && user.aplicant_sts == 1 || user.user_role == "Developer" ?

          <AccountTabsWrapper>
            <Tabs
              className="account-tabs"
              value={value}
              onChange={onTabsChange}
              aria-label="basic tabs example"
              orientation="vertical"
            >
              {
                dashboardTab.map((tab: any, index) => (
                  <Tab
                    className="account-tab"
                    label={tab.name}
                    icon={tab.icon}
                    key={index}
                    {...a11yProps(index)}
                  />))}
            </Tabs>
            <Box className="account-tabs-content">
              {value === 0 && <ApplicantDashboard />}
              {value === 1 && <PersonalInfo />}
              {value === 2 && <ChangePassword />}
              {value === 3 && <AlertMessages />}
            </Box>
          </AccountTabsWrapper>

          : user.user_role != "Applicant" || user.user_role != "Developer" ?

            <AccountTabsWrapper>
              <Tabs
                className="account-tabs"
                value={value}
                onChange={onTabsChange}
                aria-label="basic tabs example"
                orientation="vertical"
              >
                {
                  //Add Dashboard Object to main tabs
                  tabs.map((tab: any, index) => (
                    <Tab
                      className="account-tab"
                      label={tab.name}
                      icon={tab.icon}
                      key={index}
                      {...a11yProps(index)}
                    />))}
              </Tabs>
              <Box className="account-tabs-content">
                {value === 0 && <PersonalInfo />}
                {value === 1 && <ChangePassword />}
                {value === 2 && <AlertMessages />}
              </Box>
            </AccountTabsWrapper>

            : null
        }

        {/* <AccountTabsWrapper>
          <Tabs
            className="account-tabs"
            value={value}
            onChange={onTabsChange}
            aria-label="basic tabs example"
            orientation="vertical"
          >
            {user.aplicant_sts == 1 && user.user_role == "Applicant" ?
              //Add Dashboard Object to main tabs
              [...dashboardTab, ...tabs].map((tab: any, index) => (
                <Tab
                  className="account-tab"
                  label={tab.name}
                  icon={tab.icon} 
                  key={index}
                  {...a11yProps(index)}
                />))
              :
              tabs.map((tab, index) => (
                <Tab
                  className="account-tab"
                  label={tab.name}
                  icon={tab.icon}
                  key={index}
                  {...a11yProps(index)}
                />
              ))
            }
          </Tabs>

          {user.aplicant_sts == 1 && user.user_role == "Applicant" ?
            <Box className="account-tabs-content">
              {value === 0 && <ApplicantDashboard />}
              {value === 1 && <PersonalInfo />}
              {value === 2 && <ChangePassword />}
              {value === 3 && <AlertMessages />}
            </Box>
            :
            <Box className="account-tabs-content">
              {value === 1 && <PersonalInfo />}
              {value === 2 && <ChangePassword />}
              {value === 3 && <AlertMessages />}
            </Box>
          }
        </AccountTabsWrapper> */}
      </AppAnimate>
    </>
  );
};

export default Account;
