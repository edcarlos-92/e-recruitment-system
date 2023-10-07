import {SystemUsersModel} from 'types/models/General';
import {
  CategoriesModel,
  SubCategoriesModel,
  CombineCatWithSubCategoryModel,
  EducationalInformationModel,
  EduCatSubcatViewsModel,
  CentresModel,
  CriteriaModel,
  EducationalLevelsModel,
  SubjectsModel,
  GradesModel,
  CriteriaAlgorithmsModel,
  AlgorithmsRefModel,
  ApplicantCriteriaMatcherModel,
  RequirementModel,
  ConstrainModel,
  CatToLevelAssignmentsModel,
  CatToLevelAssignmentsRefModel,
  InternalVoucherModel,
  ExternalVoucherModel,
  InternalPinsStatsModel,
  ExternalPinsStatsModel,
  GradeAlgorithmsModel,
  BankUsersModel,
  BanksModel,
  InstitutionsModel,
  InstitutionFilesCategoriesModel,
  InstitutionFilesModel,
} from '../models/mactechrecruit';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_SUB_CATEGORIES = 'GET_SUB_CATEGORIES';
export const GET_CAT_TO_LEVELS_ASSIGNMENT = 'GET_CAT_TO_LEVELS_ASSIGNMENT';
export const GET_CAT_TO_LEVELS_ASSIGNMENT_REF =
  'GET_CAT_TO_LEVELS_ASSIGNMENT_REF';
export const GET_COMBINE_CAT_SUB_CATEGORIES = 'GET_COMBINE_CAT_SUB_CATEGORIES';
export const GET_EDU_CAT_SUBCAT_VIEWS = 'GET_EDU_CAT_SUBCAT_VIEWS';
export const GET_CENTRES = 'GET_CENTRES';
export const GET_EDUCATIONAL_LEVELS = 'GET_EDUCATIONAL_LEVELS';
export const GET_EDUCATIONAL_INFORMATION = 'GET_EDUCATIONAL_INFORMATION';
export const GET_CRATERIA = 'GET_CRATERIA';
export const GET_GRADES = 'GET_GRADES';
export const GET_GRADE_ALGORITHM = 'GET_GRADE_ALGORITHM';
export const GET_SUBJECTS = 'GET_SUBJECTS';
export const GET_CRITERIA_ALGORITHMS = 'GET_CRITERIA_ALGORITHMS';
export const GET_CRITERIA_ALGORITHMS_REF = 'GET_CRITERIA_ALGORITHMS_REF';
export const GET_APPLICANT_STATUS = 'GET_APPLICANT_STATUS';
export const GET_REQUIREMENTS = 'GET_REQUIREMENTS';
export const GET_CONSTRAINS = 'GET_CONSTRAINS';
export const GET_INTERNAL_VOUCHER = 'GET_INTERNAL_VOUCHER';
export const GET_EXTERNAL_VOUCHER = 'GET_EXTERNAL_VOUCHER';
export const GET_INTERNAL_PINS_STATS = 'GET_INTERNAL_PINS_STATS';
export const GET_EXTERNAL_PINS_STATS = 'GET_EXTERNAL_PINS_STATS';
export const GET_BANK_ADMIN = 'GET_BANK_ADMIN';
export const GET_BANKS = 'GET_BANKS';
export const GET_INSTITUTIONS = 'GET_INSTITUTIONS';
export const GET_INSTITUTION_FILES_CATEGORIES =
  'GET_INSTITUTION_FILES_CATEGORIES';
export const GET_INSTITUTION_FILES = 'GET_INSTITUTION_FILES';
export const GET_ALL_APPLICANTS = 'GET_ALL_APPLICANTS';

export interface ApplicantsAction {
  type: typeof GET_ALL_APPLICANTS;
  payload: SystemUsersModel;
}

export interface CategoriesAction {
  type: typeof GET_CATEGORIES;
  payload: CategoriesModel;
}

export interface SubCategoriesAction {
  type: typeof GET_SUB_CATEGORIES;
  payload: SubCategoriesModel;
}

export interface CatToLevelAssignmentsAction {
  type: typeof GET_CAT_TO_LEVELS_ASSIGNMENT;
  payload: CatToLevelAssignmentsModel;
}

export interface CatToLevelAssignmentsRefAction {
  type: typeof GET_CAT_TO_LEVELS_ASSIGNMENT_REF;
  payload: CatToLevelAssignmentsRefModel;
}

export interface CombineCatWithSubCategorAction {
  type: typeof GET_COMBINE_CAT_SUB_CATEGORIES;
  payload: CombineCatWithSubCategoryModel;
}

export interface EduCatSubcatViewsAction {
  type: typeof GET_EDU_CAT_SUBCAT_VIEWS;
  payload: EduCatSubcatViewsModel;
}

export interface EducationalInformationAction {
  type: typeof GET_EDUCATIONAL_INFORMATION;
  payload: EducationalInformationModel;
}

export interface CentresAction {
  type: typeof GET_CENTRES;
  payload: CentresModel;
}

export interface CriteriaAction {
  type: typeof GET_CRATERIA;
  payload: CriteriaModel;
}

export interface EducationalLevelsTypesAction {
  type: typeof GET_EDUCATIONAL_LEVELS;
  payload: EducationalLevelsModel;
}

export interface SubjectsAction {
  type: typeof GET_SUBJECTS;
  payload: SubjectsModel;
}

export interface GradesAction {
  type: typeof GET_GRADES;
  payload: GradesModel;
}

export interface GradeAlgorithmsAction {
  type: typeof GET_GRADE_ALGORITHM;
  payload: GradeAlgorithmsModel;
}

export interface CriteriaAlgorithmsAction {
  type: typeof GET_CRITERIA_ALGORITHMS;
  payload: CriteriaAlgorithmsModel;
}

export interface AlgorithmsRefAction {
  type: typeof GET_CRITERIA_ALGORITHMS_REF;
  payload: AlgorithmsRefModel;
}

export interface ApplicantStatusAction {
  type: typeof GET_APPLICANT_STATUS;
  payload: ApplicantCriteriaMatcherModel;
}

export interface RequirementAction {
  type: typeof GET_REQUIREMENTS;
  payload: RequirementModel;
}
export interface ConstrainAction {
  type: typeof GET_CONSTRAINS;
  payload: ConstrainModel;
}

export interface InternalVoucherAction {
  type: typeof GET_INTERNAL_VOUCHER;
  payload: InternalVoucherModel;
}
export interface ExternalVoucherAction {
  type: typeof GET_EXTERNAL_VOUCHER;
  payload: ExternalVoucherModel;
}

export interface InternalPinsStatsAction {
  type: typeof GET_INTERNAL_PINS_STATS;
  payload: InternalPinsStatsModel;
}

export interface ExternalPinsStatsAction {
  type: typeof GET_EXTERNAL_PINS_STATS;
  payload: ExternalPinsStatsModel;
}

export interface BanksAction {
  type: typeof GET_BANKS;
  payload: BanksModel;
}

export interface BankAdminAction {
  type: typeof GET_BANK_ADMIN;
  payload: BankUsersModel;
}

export interface InstitutionsAction {
  type: typeof GET_INSTITUTIONS;
  payload: InstitutionsModel;
}

export interface InstitutionFilesCategoriesAction {
  type: typeof GET_INSTITUTION_FILES_CATEGORIES;
  payload: InstitutionFilesCategoriesModel;
}

export interface InstitutionFilesAction {
  type: typeof GET_INSTITUTION_FILES;
  payload: InstitutionFilesModel;
}

export type MacTechRecruitActionTypes =
  | CategoriesAction
  | SubCategoriesAction
  | CatToLevelAssignmentsAction
  | CatToLevelAssignmentsRefAction
  | CombineCatWithSubCategorAction
  | CentresAction
  | CriteriaAction
  | EducationalLevelsTypesAction
  | EducationalInformationAction
  | SubjectsAction
  | GradesAction
  | GradeAlgorithmsAction
  | CriteriaAlgorithmsAction
  | AlgorithmsRefAction
  | ApplicantStatusAction
  | RequirementAction
  | ConstrainAction
  | InternalVoucherAction
  | ExternalVoucherAction
  | InternalPinsStatsAction
  | ExternalPinsStatsAction
  | EduCatSubcatViewsAction
  | BanksAction
  | BankAdminAction
  | InstitutionsAction
  | InstitutionFilesCategoriesAction
  | InstitutionFilesAction
  | ApplicantsAction;
