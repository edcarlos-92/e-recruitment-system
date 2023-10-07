//import { FileUploadModel  } from '../models/safety/Profile';
import { FileUploadModel,ResponseModel,SafetyBoardModel,SystemUsersModel  } from '../models/safety';
export const GET_FILE_UPLOAD = 'GET_FILE_UPLOAD';
export const GET_DISPATCH_RESPONSE = 'GET_DISPATCH_RESPONSE';
export const GET_SAFETY_BOARD_SCORES = 'GET_SAFETY_BOARD_SCORES';
export const GET_SYSTEM_USERS = 'GET_SYSTEM_USERS';
export const GET_POLICY_RECORDS = 'GET_POLICY_RECORDS';

export interface AvatarUploadAction {
    type: typeof GET_FILE_UPLOAD;
    payload: FileUploadModel;
  }

export interface ResponseAction {
    type: typeof GET_DISPATCH_RESPONSE;
    payload: ResponseModel;
  }

  export interface SafetyBoardAction {
    type: typeof GET_SAFETY_BOARD_SCORES;
    payload: SafetyBoardModel;
  }

// export interface PolicyRecordsAction {
//     type: typeof GET_POLICY_RECORDS;
//     payload: PolicyRecordsModel;
//   }
  
  export interface SystemUsersAction {
    type: typeof GET_SYSTEM_USERS;
    payload: SystemUsersModel;
  }

  export type SafetyActionTypes =
  | AvatarUploadAction
  | ResponseAction
  | SafetyBoardAction
  | SystemUsersAction
  ;