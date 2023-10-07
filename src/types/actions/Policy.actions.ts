//import { FileUploadModel  } from '../models/safety/Profile';
import { FileUploadModel,
  ResponseModel,
  SystemUsersModel,
  PersonalInfoModel,
  PolicyRecordsModel,
  PolicyDependantsModel,
  PolicyDashboardModel,
  PolicyCurrencyRevenueModel,
  PolicyClientsCountriesModel,
  PolicyClientTypeStatsModel,
  PolicyPremiumTypeStatsModel,
  PolicyPaymentPlanStatsModel,
  PolicyReturnCurrencyRevenueModel,
  PolicyClientPretoniseModel,
  PolicyClientPaymentsModel,
  PolicyLogsActivityModel,
  } from '../models/policy'; 
export const GET_FILE_UPLOAD = 'GET_FILE_UPLOAD';
export const GET_DISPATCH_RESPONSE = 'GET_DISPATCH_RESPONSE';
export const GET_SYSTEM_USERS = 'GET_SYSTEM_USERS';
export const GET_PERSONAL_INFO = 'GET_PERSONAL_INFO';
export const GET_POLICY_RECORDS = 'GET_POLICY_RECORDS';
export const DET_POLICY_DEPENDANTS = 'DET_POLICY_DEPENDANTS'; 
export const GET_DASHBOARD_DATA = 'GET_DASHBOARD_DATA';
export const GET_CURRENCIES_DATA = 'GET_CURRENCIES_DATA';
export const GET_RETURN_CURRENCIES_DATA = 'GET_RETURN_CURRENCIES_DATA';
export const GET_CLIENTS_COUNTRIES = 'GET_CLIENTS_COUNTRIES';
export const GET_CLIENT_TYPE_STATS = 'GET_CLIENT_TYPE_STATS';
export const GET_PREMIUM_TYPE_STATS = 'GET_PREMIUM_TYPE_STATS';
export const GET_PAYMENT_PAN_STATS = 'GET_PAYMENT_PAN_STATS';
export const GET_CLIENT_PETRONISATION = 'GET_CLIENT_PETRONISATION';
export const GET_CLIENT_PAYMENTS = 'GET_CLIENT_PAYMENTS';
export const GET_LOGS_ACTIVITIES = 'GET_LOGS_ACTIVITIES';

export interface AvatarUploadAction {
    type: typeof GET_FILE_UPLOAD;
    payload: FileUploadModel;
  }

export interface ResponseAction {
    type: typeof GET_DISPATCH_RESPONSE;
    payload: ResponseModel;
  }

export interface PolicyRecordsAction {
    type: typeof GET_POLICY_RECORDS;
    payload: PolicyRecordsModel;
  }

export interface PolicyDependantsAction {
    type: typeof DET_POLICY_DEPENDANTS;
    payload: PolicyDependantsModel;
  }
  
  export interface SystemUsersAction {
    type: typeof GET_SYSTEM_USERS;
    payload: SystemUsersModel;
  }

  export interface PersonalInfoAction {
    type: typeof GET_PERSONAL_INFO;
    payload: PersonalInfoModel;
  }

  export interface PolicyDashboardAction {
    type: typeof GET_DASHBOARD_DATA;
    payload: PolicyDashboardModel;
  }

  export interface PolicyCurrencyRevenueAction {
    type: typeof GET_CURRENCIES_DATA;
    payload: PolicyCurrencyRevenueModel;
  }

   export interface PolicyCurrencyReturnRevenueAction {
    type: typeof GET_RETURN_CURRENCIES_DATA;
    payload: PolicyReturnCurrencyRevenueModel;
  }

  export interface PolicyClientsCountriesAction {
    type: typeof GET_CLIENTS_COUNTRIES;
    payload: PolicyClientsCountriesModel;
  }

  export interface PolicyClientTypeStatsAction {
    type: typeof GET_CLIENT_TYPE_STATS;
    payload: PolicyClientTypeStatsModel;
  }

  export interface PolicyPremiumTypeStatsAction {
    type: typeof GET_PREMIUM_TYPE_STATS;
    payload: PolicyPremiumTypeStatsModel;
  }

  export interface PolicyPaymentPlanStatsAction {
    type: typeof GET_PAYMENT_PAN_STATS;
    payload: PolicyPaymentPlanStatsModel;
  }

 export interface PolicyClientPretoniseAction {
    type: typeof GET_CLIENT_PETRONISATION;
    payload: PolicyClientPretoniseModel;
  }

  export interface PolicyClientPaymentsAction {
    type: typeof GET_CLIENT_PAYMENTS;
    payload: PolicyClientPaymentsModel;
  }
  
  export interface PolicyLogsActivityAction {
    type: typeof GET_LOGS_ACTIVITIES;
    payload: PolicyLogsActivityModel;
  }

  export type PolicyActionTypes =
  | AvatarUploadAction
  | ResponseAction
  | SystemUsersAction
  | PolicyRecordsAction
  | PolicyDependantsAction
  | PolicyDashboardAction
  | PolicyCurrencyRevenueAction
  | PolicyClientsCountriesAction
  | PolicyClientTypeStatsAction
  | PolicyPremiumTypeStatsAction
  | PolicyPaymentPlanStatsAction
  | PolicyCurrencyReturnRevenueAction
  | PolicyClientPretoniseAction
  | PolicyClientPaymentsAction
  | PolicyLogsActivityAction
  | PersonalInfoAction
  ;