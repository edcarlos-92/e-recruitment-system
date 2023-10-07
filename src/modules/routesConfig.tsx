import { ReactNode } from 'react';
import { appInformation, RoutePermittedRole } from 'shared/constants/AppConst';
import {
  MdOutlinePeopleAlt, MdDashboard, MdRemoveRedEye, MdEdit, MdSettings,
  MdThermostat, MdDoorBack, MdDoorFront, MdBookOnline, MdBarChart,
  MdOutlineEmail, MdDownload, MdDoubleArrow, MdPieChart
} from 'react-icons/md';

export interface RouterConfigData {
  id: string;
  title: string;
  messageId: string;
  icon?: string | ReactNode;
  type: 'item' | 'group' | 'collapse' | 'divider';
  children?: RouterConfigData[];
  permittedRole?: RoutePermittedRole[];
  color?: string;
  url?: string;
  exact?: boolean;
  count?: number;
  as?: string;
}

const { appDir } = appInformation;

const routesConfig: RouterConfigData[] = [
  {
    id: 'requirement',
    title: 'Check Requirement',
    messageId: 'sidebar.checkrequirement',
    type: 'item',
    icon: <MdRemoveRedEye />,
    permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Applicant],
    url: `${appDir}/bkreq`,
  },

  {
    id: 'application',
    title: 'Application Form',
    messageId: 'sidebar.applicantApplication',
    type: 'item',
    icon: <MdEdit />,
    permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Applicant],
    url: `${appDir}/applynow`,
  },

  {
    id: 'administration',
    title: 'Administration',
    messageId: 'sidebar.administration',
    type: 'group',
    icon: <MdDashboard style={{ fontSize: '13px', marginTop: '5px', marginLeft: 9 }} />,
    permittedRole: [RoutePermittedRole.Admin, RoutePermittedRole.Developer],
    children: [
      {
        id: 'adminsettings',
        title: 'Settings',
        messageId: 'sidebar.AdminSettings',
        type: 'item',
        icon: <MdSettings />,
        permittedRole: [RoutePermittedRole.Admin, RoutePermittedRole.Developer],
        url: `${appDir}/adminsettings`,
      },
      {
        id: 'systemusers',
        title: 'SystemUsers',
        messageId: 'sidebar.systemusers',
        type: 'item',
        icon: <MdOutlinePeopleAlt />,
        permittedRole: [RoutePermittedRole.Admin, RoutePermittedRole.Developer],
        url: '/systemusers',
      },
      {
        id: 'notifications',
        title: 'Email,SMS,Notification',
        messageId: 'sidebar.notifications',
        type: 'item',
        icon: <MdOutlineEmail />,
        permittedRole: [RoutePermittedRole.Admin, RoutePermittedRole.Developer],
        url: `${appDir}/notifications`,
      },
      {
        id: 'testpage',
        title: 'TestPage',
        messageId: 'sidebar.testpage',
        type: 'item',
        icon: <MdThermostat />,
        permittedRole: [RoutePermittedRole.Developer],
        url: '/testfile',
      },
    ]
  },

  {
    id: 'banking',
    title: 'Banking',
    messageId: 'sidebar.banking',
    icon: <MdDoorFront style={{ fontSize: '13px', marginTop: '5px', marginLeft: 9 }} />,
    permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.BankManager, RoutePermittedRole.BankTeller],
    type: 'group',
    children: [
      {
        id: 'banktellers',
        title: 'Bank Tellers',
        messageId: 'sidebar.banktellers',
        type: 'item',
        icon: <MdDoorBack />,
        permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.BankManager],
        url: `${appDir}/bankteller`,
      },
      {
        id: 'bankingvouchers',
        title: 'Banking Vouchers',
        messageId: 'sidebar.bankingvouchers',
        type: 'item',
        icon: <MdBookOnline />,
        permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.BankTeller],
        url: `${appDir}/bankingvouchers`,
      },
      {
        id: 'bankingvouchersreport',
        title: 'Banking Vouchers Report',
        messageId: 'sidebar.bankingvouchersreport',
        type: 'item',
        icon: <MdBarChart />,
        permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.BankManager],
        url: `${appDir}/bankingvouchersreport`,
      },
    ]
  },

  {
    id: 'downloads',
    title: 'File Downloads',
    messageId: 'sidebar.fileDownloads',
    type: 'item',
    icon: <MdDownload />,
    permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Applicant],
    url: `${appDir}/filedownloads`,
  },

  {
    id: 'report',
    title: 'Reports',
    messageId: 'sidebar.reports',
    icon: <MdBarChart style={{ fontSize: '13px', marginTop: '5px', marginLeft: 9 }} />,
    type: 'group',
    permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.User],
    children: [
      {
        id: 'situationalreports',
        title: 'Situational Reports',
        messageId: 'sidebar.situationalreports',
        type: 'collapse',
        icon: <MdBookOnline />,
        permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.User],
        children: [
          {
            id: 'daysreports',
            title: 'Days Report',
            messageId: 'sidebar.daysreports',
            type: 'item',
            icon: <MdDoubleArrow />,
            permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.User],
            url: `${appDir}/daysreports`,
          },
          {
            id: 'genderregions',
            title: 'Gender & Regions',
            messageId: 'sidebar.genderregions',
            type: 'item',
            icon: <MdDoubleArrow />,
            permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.User],
            url: `${appDir}/genderregions`,
          },
          {
            id: 'allapplicants',
            title: 'All Applicants',
            messageId: 'sidebar.allapplicants',
            type: 'item',
            icon: <MdDoubleArrow />,
            permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.User],
            url: `${appDir}/allapplicants`,
          },
          {
            id: 'applicantchecker',
            title: 'Applicant Checker',
            messageId: 'sidebar.applicantchecker',
            type: 'item',
            icon: <MdDoubleArrow />,
            permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.User],
            url: `${appDir}/applicantchecker`,
          },
        ]
      },
      {
        id: 'financialreports',
        title: 'Financial Reports',
        messageId: 'sidebar.financialreports',
        type: 'collapse',
        icon: <MdPieChart />,
        permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.User],
        children: [
          {
            id: 'vouchervsdirect',
            title: 'Voucher Vs Direct',
            messageId: 'sidebar.vouchervsdirect',
            type: 'item',
            icon: <MdDoubleArrow />,
            permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.User],
            url: `${appDir}/vouchervsdirect`,
          },
          {
            id: 'bankstransactions',
            title: 'Banks Transactions',
            messageId: 'sidebar.bankstransactions',
            type: 'item',
            icon: <MdDoubleArrow />,
            permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.User],
            url: `${appDir}/bankstransactions`,
          },
          {
            id: 'banksales',
            title: 'Banks Sales',
            messageId: 'sidebar.banksales',
            type: 'item',
            icon: <MdDoubleArrow />,
            permittedRole: [RoutePermittedRole.Developer, RoutePermittedRole.Admin, RoutePermittedRole.User],
            url: `${appDir}/banksales`,
          },
        ]
      },
    ]
  },
];

export default routesConfig;