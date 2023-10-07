import {AuthUser} from '../../types/models/AuthUser';
import {appIntl} from '@mactech/utility/helper/Utils';
import IntlMessages from '@mactech/utility/IntlMessages';

export const frontEndSiteInfo = {
  siteTile: 'MAC-TECH eRecruter Portal',
  siteName: 'MAC-TECH eRecruter Portal',
  siteCurrency: 'GHC',
  siteHomeLink: '/',
  voucherFee: 100,
  appCode: 'GPS',
  //requirements:"/assets/files/requirements.pdf"
  //requirements:"/assets/files/0410100.pdf"
  requirements: 'https://revolutionpacks.com/requirements.pdf',
};

export const appInformation = {
  appName: 'MAC-TECH eRecruter Portal',
  appDir: '/e-recruit',
};

export const navigation = [
  //{ name: 'Home', href: '/' },
  {name: 'Forgot Password', href: '/forget-password'},
  {name: 'Forgot PinCode', href: `${appInformation.appDir}/forgottenpin`},
  {name: 'Register', href: '/signup'},
  {name: 'SignIn', href: '/signin'},
];
// router.push(`${appDir}/forgottenpin`);

export const companyInformation = {
  companyName: 'MAC-TECH ',
  companyContactInfo: '0245820054',
};

export const loginWelcome = {
  loginWelcomeTitle: 'MAC-TECH eRecruter Portal !',
  loginWelcomeDescription:
    'Please Read Instructions carefully before applaying to the your recruitement',
};

export const pageInformation = {
  pageFooterLeftText:
    '@Copyright 2022 E-Recruitment System Powered by MAC-Tech | All Rights Reserved',
  pageFooterRightText: 'Home',
};

export const notificationConst = {
  txtGhanaUser: process.env.TXG_USER, //'txg-mactech',
  txtGhanaPass: process.env.TXG_PASS, //'Cart12!!',

  smsSenderID: 'MAC-TECH',
  smsAPIKey: process.env.FV_SMS_API_KEY, //'3a33ff72-fe8c-4d3b-8022-0c322c43a086',
  smsClientID: process.env.FV_SMS_CLIENT_ID, //'0df53eba-2a63-406e-994c-43bf061f2c3b',

  emailHeadImage: process.env.EMAIL_IMG_HEADER, //'https://res.cloudinary.com/semecaland/image/upload/v1654303087/logo-long-dark_z17js6.png',
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailHost: process.env.EMAIL_HOST,
  emailFrom: process.env.EMAIL_FROM,
  emailPort: process.env.EMAIL_PORT,
};

export const appDirectories = {
  macRecruitLogoSquare: '/assets/images/logo-square.png',
  macRecruitBarCode: '/assets/images/mac-recruit/qrcode.svg',
  macRecruitLogo: '/assets/images/mac-recruit/GPSLogo.jpg',

  serverAddress: '',

  avatarAccessDir: '/assets/images/avatar/',
  avatarRWDir: './public/assets/images/avatar/',
  avatarDefault: '/assets/images/placeholder.jpg',
  excelRWDir: './public/uploads/policy/',
  downloadDir: '/uploads/policy/downloads/',

  /*
  onlineAvatarAccessDir:'https://mactech.com/ImageHub/mactech_recruit/avatar/',
  onlineAvatarRWDir:'/domains/mactech.com/public_html/ImageHub/mactech_recruit/avatar/',
  onlineAvatarDefault:'https://mactech.com/ImageHub/mactech_recruit/placeholder.jpg' || '/assets/images/placeholder.jpg',
  onlineExcelRWDir:'/domains/mactech.com/public_html/ImageHub/mactech_recruit/excel/',
  onlineDownloadDir:'https://mactech.com/ImageHub/mactech_recruit/downloads/',
  */

  onlineAvatarAccessDir: `https://mactech.com/ImageHub/${process.env.FILE_UPLOAD_FOLDER}/avatar/`,
  onlineAvatarRWDir: `/domains/mactech.com/public_html/ImageHub/${process.env.FILE_UPLOAD_FOLDER}/avatar/`,
  onlineAvatarDefault:
    `https://mactech.com/ImageHub/${process.env.FILE_UPLOAD_FOLDER}/placeholder.jpg` ||
    '/assets/images/placeholder.jpg',
  onlineExcelRWDir: `/domains/mactech.com/public_html/ImageHub/${process.env.FILE_UPLOAD_FOLDER}/excel/`,
  onlineDownloadDir: `https://mactech.com/ImageHub/${process.env.FILE_UPLOAD_FOLDER}/downloads/`,
  onlineExpenseFileUploadDir: `/domains/mactech.com/public_html/ImageHub/${process.env.FILE_UPLOAD_FOLDER}/expenses/`,
};

export const authRole = {
  admin: ['Admin'],
  user: ['User'],
  developer: ['Developer'],
};

export enum RoutePermittedRole {
  Admin = 'Admin',
  User = 'User',
  Developer = 'Developer',
  Applicant = 'Applicant',
  BankManager = 'Bank Manager',
  BankTeller = 'Bank Teller',
}

export const userRoles = [
  {
    id: 'Admin',
    itemValue: 'Admin',
  },
  {
    id: 'User',
    itemValue: 'User',
  },
  {
    id: 'Applicant',
    itemValue: 'Applicant',
  },
  {
    id: 'Bank Manager',
    itemValue: 'Bank Manager',
  },
  {
    id: 'Bank Teller',
    itemValue: 'Bank Teller',
  },
];
export const genderTypeSelect = [
  {
    id: 'Male',
    itemValue: 'Male',
  },
  {
    id: 'Female',
    itemValue: 'Female',
  },
];

export const defaultUser: AuthUser = {
  id: 1,
  user_login: 'admin',
  display_name: 'Admin User',
  user_email: 'admin@mactech.com',
  token: 'access-token', //'access-token',
  user_role: authRole.user,
  avatar: '/assets/images/avatar/A11.jpg',
  user_section: '',
  user_activation_key: 'access-token',
  user_pass: '',
  //user_login:'John Alex',
  //display_name:'Admin User',
  //user_role:'user',
  //avatar:'/assets/images/avatar/A11.jpg',
  //user_email:'admin@mactech.com',
};

export function ClientType() {
  const {messages} = appIntl();
  const clientTypes = [
    {
      id: String(messages['client.type.entreprise']),
      itemValue: String(messages['client.type.entreprise']),
    },
    {
      id: String(messages['client.type.personal']),
      itemValue: String(messages['client.type.personal']),
    },
  ];

  return clientTypes;
}

export function PremiumType() {
  const {messages} = appIntl();

  const premiumTypes = [
    {
      id: String(messages['premium.type.family']),
      itemValue: String(messages['premium.type.family']),
    },
    {
      id: String(messages['premium.type.indivudual']),
      itemValue: String(messages['premium.type.indivudual']),
    },
  ];
  return premiumTypes;
}

export function PaymentPlan() {
  const {messages} = appIntl();

  const paymentPlans = [
    {
      id: String(messages['payment.plan.weekly']),
      itemValue: String(messages['payment.plan.weekly']),
    },
    {
      id: String(messages['payment.plan.monthly']),
      itemValue: String(messages['payment.plan.monthly']),
    },
    {
      id: String(messages['payment.plan.quaterly']),
      itemValue: String(messages['payment.plan.quaterly']),
    },
    {
      id: String(messages['payment.plan.annually']),
      itemValue: String(messages['payment.plan.annually']),
    },
  ];

  return paymentPlans;
}

export function BookingStatus() {
  const {messages} = appIntl();

  const BookingStatuses = [
    {
      id: String(messages['booking.status.reservation']),
      itemValue: String(messages['booking.status.reservation']),
    },
    {
      id: String(messages['booking.status.waiting']),
      itemValue: String(messages['booking.status.waiting']),
    },
    {
      id: String(messages['booking.status.completed']),
      itemValue: String(messages['booking.status.completed']),
    },
  ];

  return BookingStatuses;
}

export function BookingDiscount() {
  const {messages} = appIntl();
  const BookingDiscounts = [
    {
      id: String(messages['booking.discount.percentage']),
      itemValue: String(messages['booking.discount.percentage']),
    },
    {
      id: String(messages['booking.discount.value']),
      itemValue: String(messages['booking.discount.value']),
    },
    {
      id: String(messages['booking.discount.none']),
      itemValue: String(messages['booking.discount.none']),
    },
  ];

  return BookingDiscounts;
}

export function PaymentStatus() {
  const {messages} = appIntl();
  const PaymentStatuses = [
    {
      id: String(messages['booking.payment.status.paid']),
      itemValue: String(messages['booking.payment.status.paid']),
    },
    {
      id: String(messages['booking.payment.status.unpaid']),
      itemValue: String(messages['booking.payment.status.unpaid']),
    },
  ];

  return PaymentStatuses;
}

// export function Function(){
//   const  {messages}  = appIntl();

// }

export function DependantRelation() {
  const {messages} = appIntl();
  const dependantRelations = [
    {
      id: String(messages['dependant.relation.son']),
      itemValue: String(messages['dependant.relation.son']),
    },
    {
      id: String(messages['dependant.relation.daughter']),
      itemValue: String(messages['dependant.relation.daughter']),
    },
    {
      id: String(messages['dependant.relation.husband']),
      itemValue: String(messages['dependant.relation.husband']),
    },
    {
      id: String(messages['dependant.relation.wife']),
      itemValue: String(messages['dependant.relation.wife']),
    },
    {
      id: String(messages['dependant.relation.father']),
      itemValue: String(messages['dependant.relation.father']),
    },
    {
      id: String(messages['dependant.relation.mother']),
      itemValue: String(messages['dependant.relation.mother']),
    },
    {
      id: String(messages['dependant.relation.brother']),
      itemValue: String(messages['dependant.relation.brother']),
    },
    {
      id: String(messages['dependant.relation.sister']),
      itemValue: String(messages['dependant.relation.sister']),
    },
    {
      id: String(messages['dependant.relation.inlaw']),
      itemValue: String(messages['dependant.relation.inlaw']),
    },
    {
      id: String(messages['dependant.relation.friend']),
      itemValue: String(messages['dependant.relation.friend']),
    },
  ];
  return dependantRelations;
}

export function PremiumCurrency() {
  const {messages} = appIntl();

  const premiumCurrency = [
    {
      id: String(messages['premium.currency.cfa']),
      itemValue: String(messages['premium.currency.cfa']),
    },
    {
      id: String(messages['premium.currency.gh']),
      itemValue: String(messages['premium.currency.gh']),
    },
    {
      id: String(messages['premium.currency.dollar']),
      itemValue: String(messages['premium.currency.dollar']),
    },
    {
      id: String(messages['premium.currency.euro']),
      itemValue: String(messages['premium.currency.euro']),
    },
  ];

  return premiumCurrency;
}

export const initialUrl = '/my-account'; //'/systemusers';//'/my-account';//'/e-recruit/'; // this url will open after login
//export const initialUrl ='/barber/customerreg' ;//'/my-account';//'/sample/page-1'; // this url will open after login
export const homeUrl = '/';
