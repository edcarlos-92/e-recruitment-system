import React, { useContext, useEffect, useState, useRef } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
//import { AppContext } from '../Context'
import Grid from '@mui/material/Grid'
import IntlMessages from '@mactech/utility/IntlMessages'
import { Fonts } from "shared/constants/AppEnums";

import Moment from 'moment';

import Card from "@mui/material/Card";
//import Header from "./tempRef/DetailItems/Header";
//import ItemList from "./tempRef/DetailItems";
import AppTableContainer from "@mactech/core/AppTableContainer";
import AppAnimate from "@mactech/core/AppAnimate";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { appDirectories } from "shared/constants/AppConst";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
// @ts-ignore
import Logo from "assets/icon/logo.svg";
import { useThemeContext } from "@mactech/utility/AppContextProvider/ThemeContextProvider";
import jwtAxios, { setAuthToken } from '@mactech/services/auth/jwt-auth';
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { blue, green, red } from '@mui/material/colors';
import ReactToPrint from 'react-to-print';
import IconButton from '@mui/material/IconButton/IconButton';
import PrintIcon from '@mui/icons-material/Print';
import { useIsMounted } from '@mactech/libs/@mactech/Hooks/useIsMounted'
//import { AddInfoLabel, DirectInfoTitleLabel } from './CycleInfoTable'
//import { randomNum, retrieveObjectKeyValue, objectValueWithReference, HumanDateTime, humanDate, niceDateDefault } from '@mactech/utility/Utils';
import AppGridContainer from '@mactech/core/AppGridContainer'
import HeaderText, { DynamicHeaderText } from '@mactech/libs/@mactech/components/HeaderText'
import { useAuthUser } from '@mactech/utility/AuthHooks'
import { useIntl } from 'react-intl'

import { Grid as NUIGrid, Card as NUICard, Text as NUIText } from "@nextui-org/react";
import { AppContext } from 'modules/macTech/ApplicationForm/FormSteps/StepElements/Context'
import { DirectInfoTitleLabel, EduCycleInfoTable } from 'modules/macTech/ApplicationForm/FormSteps/StepElements/ApplicantDetails/CycleInfoTable'
import Chip from '@mui/material/Chip'

//-----------------------Redux Store------------------------------------------
import { useDispatch, useSelector } from 'react-redux';
import { silentInsert, silentDelete, getCustomersData, doSelect, uploadFileHandler, getFileUpload, getPersonalInfoData, getSystemUsersData, doAddOrEdit, silentDeleteRec, silentAddOrEdit, doInsert } from 'redux/actions';
import { AppState } from 'redux/store';
import { GET_EDUCATIONAL_INFORMATION, GET_CAT_TO_LEVELS_ASSIGNMENT, GET_CATEGORIES, GET_CENTRES, GET_CONSTRAINS, GET_CRATERIA, GET_CRITERIA_ALGORITHMS_REF, GET_EDUCATIONAL_LEVELS, GET_GRADES, GET_REQUIREMENTS, GET_SUBJECTS, GET_SUB_CATEGORIES } from 'types/actions/MacTechRecruit.actions';
import { getConstrainsData, getCatToLevelAssignmentsData, getCatToLevelAssignmentsRefData, getRequirementsData, getCriteriaAlgorithmsData, getCriteriaAlgorithmsRefData, getCriteriaData, getEducationalLevelData, getSubCategoriesData, getCategoriesData, getCombineCatNSubCategoryData, getSubjectsData, getGradesData, getEducationalInformationData, getCentresData } from 'redux/actions/MacTechRecruit';
import { getSquareBracketString, removeSquareBracketWithString, selectFieldFromObject, randomNum, retrieveObjectKeyValue, objectValueWithReference, HumanDateTime, humanDate, niceDateDefault, niceDateWithTime } from '@mactech/libs/@mactech/utils'
import ConfirmDialog from '@mactech/libs/@mactech/components/ConfirmDialog'
import { toast, ToastContainer } from 'react-toastify'
import moment from 'moment'
import { useRouter } from 'next/router'
//-------------------------Redux Store----------------------------------------
const isBrowser = typeof window != 'undefined';
//=========================BARCODE AREA============================

import {
  Container,
  CardContent,
  makeStyles,
  TextField,
} from '@mui/material';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import QRgen from '@mactech/libs/@mactech/components/QrCodeComp/QRgenerator'
import QRscan from '@mactech/libs/@mactech/components/QrCodeComp/QRscanner'

//=========================BARCODE AREA============================

const StyledTable = styled(Table)(() => ({
  "& > thead > tr > th, & > tbody > tr > th, & > tfoot > tr > th, & > thead > tr > td, & > tbody > tr > td, & > tfoot > tr > td":
  {
    padding: 8,
  },
}));

const GridItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  //color: theme.palette.text.secondary,
}));

const GridItemL = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  //color: theme.palette.text.secondary,
}));


const avatarStyle = {
  width: 80,
  height: 80,
  //mb: 1,
}


export default function Finish(props) {

  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    getPersonalInfoData(dispatch);
    getEducationalInformationData(dispatch);
    getSubjectsData(dispatch);
    getGradesData(dispatch);
    getCriteriaAlgorithmsRefData(dispatch);
    getCentresData(dispatch);
    //getCriteriaAlgorithmsData(dispatch);
    //getSubCategoriesData(dispatch);
    //getCriteriaData(dispatch);
    //getConstrainsData(dispatch);
    //getRequirementsData(dispatch);
    //getSystemUsersData(dispatch);
    //getCategoriesData(dispatch);
    //getEducationalLevelData(dispatch);
    //getCatToLevelAssignmentsRefData(dispatch);
    //getCatToLevelAssignmentsData(dispatch);
    //getCombineCatNSubCategoryData(dispatch);

  }, []);


  const { educationalInfoData, criteriaAlgoritmsRefData, centresData, combineCatNSubCatData, subjectsData, gradeData, catToLevelAssignmentsData, categoriesData, educationalLevelsData, requirementData, constrainData, criteriaAlgoritmsData, subCategoriesData, criteriaData } = useSelector<AppState, AppState['mactechrecruit']>(({ mactechrecruit }) => mactechrecruit,);

  const { personalInfoData } = useSelector<AppState, AppState['general']>(({ general }) => general,);



  // Debug information removed for production


  const { formValues, handleBack, handleNext } = useContext(AppContext)
  const { aplicant_firstname, aplicant_lastname, aplicant_othername,
    aplicant_maritalstatus, aplicant_dob, aplicant_pob, aplicant_hometown,
    aplicant_homedistrict, aplicant_homeregion, aplicant_residential, aplicant_gps,
    aplicant_height, aplicant_birthcet, aplicant_nattionality, aplicant_currentjob,
    aplicant_emergency, aplicant_emgrelation, aplicant_emgphone } = formValues



  //const { recordViewDetails } = props
  const { user, isAuthenticated, isLoading } = useAuthUser();
  const { messages } = useIntl();
  const [dependantsInfo, setDependantsInfo] = useState([])
  //const [clientsInfo, setClientsInfo] = useState([recordViewDetails])
  //const mountedRef = useRef(true)
  const isMountedRef = useIsMounted();
  const componentRef = useRef(null);

  const [personalMatcher, setPersonalMatcher] = useState([]);
  const [educationalMatcher, setEducationalMatcher] = useState([]);

  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', onConfirm: () => { } })



  //console.log(`recordViewDetails?`, recordViewDetails)



  //const eduRec: any = educationalInfoData;
  let referenceInfo: any = educationalInfoData;
  educationalInfoData ? referenceInfo = educationalInfoData : educationalInfoData
  const getEducationalRecords = referenceInfo?.filter((item) => {
    return item.candidate_id == user?.id;
  });

  const firstCycleInfo = referenceInfo?.filter((item) => {
    return item.cycle_id == 1 && item.candidate_id == user.id
  })
  const secondCycleInfo = referenceInfo?.filter((item) => {
    return item.cycle_id == 2 && item.candidate_id == user.id
  })
  const thirdCycleInfo = referenceInfo?.filter((item) => {
    return item.cycle_id == 3 && item.candidate_id == user.id
  })
  const fourthCycleInfo = referenceInfo?.filter((item) => {
    return item.cycle_id == 4 && item.candidate_id == user.id
  })





  // console.log(`getEducationalRecords`, getEducationalRecords)
  // console.log(`firstCycleInfo`, firstCycleInfo);
  // console.log(`secondCycleInfo`, secondCycleInfo);
  // console.log(`thirdCycleInfo`, thirdCycleInfo);
  // console.log(`fourthCycleInfo`, fourthCycleInfo);


  /*
    async function mapDependants() {
      const token: any = localStorage.getItem("token");
      let API_Link = 'policy/dependants/get_dependants'
      if (recordViewDetails?.dependants === '') {
        API_Link = 'policy/dependants/get_dependants'
      }
      else {
        API_Link = `/${API_Link}?id=${recordViewDetails?.dependants}`
      }
      await jwtAxios({
        method: 'GET',
        url: API_Link,
        headers: { Authorization: `Bearer ${token}` },
        data: body
      })
        .then(response => {
  
          if (isMountedRef.current) {
            setDependantsInfo(response.data.document);
          }
        })
        .catch(err => console.log(err));
    }
  */


  async function algoMatcher(type) {
    let API_Link = ''
    if (type == 'personal') API_Link = `/mactechrecruit/applications/criteriamatcher/get_personal_matcher?candidate_id=${user?.id}`
    if (type == 'educational') API_Link = `/mactechrecruit/applications/criteriamatcher/get_educational_matcher?candidate_id=${user?.id}`
    await jwtAxios({
      method: 'GET',
      url: API_Link,
    })
      .then(response => {
        if (isMountedRef.current) {
          if (type == 'personal') setPersonalMatcher(response.data.document);
          if (type == 'educational') setEducationalMatcher(response.data.document);
        }
      })
      .catch(err => console.log(err));
  }


  useEffect(() => {
    if (isMountedRef.current) {
      algoMatcher(`personal`);
      algoMatcher(`educational`);
    }
  }, []);

  console.log(`personalMatcher-On-Finish`, personalMatcher);
  console.log(`educationalMatcher-On-Finish`, educationalMatcher);


  const ApplicantSubmitMsgconfirm = String(messages["applicant.ApplicantSubmitMsgconfirm"]);
  const ApplicantSubmitMmsgconfirmsub = String(messages["applicant.ApplicantSubmitMmsgconfirmsub"]);
  const ApplicantSubmitLoadingSuccess = String(messages["applicant.ApplicantSubmitLoadingSuccess"]);
  const ApplicantSubmitLoadingError = String(messages["applicant.ApplicantSubmitLoadingError"]);

  const ApplicantionSerialNumberCount = personalInfoData?.application_number //`${new Date().getTime()}/${user.id}/${new Date().getFullYear()}` //479
  const ApplicationReferenceNumber = personalInfoData?.application_ref_number //user ? `AG-X${user.id}${user.aplicant_serialnumber}-ZERS` : 'SERIAL NUMBER' //484



  const handleSubmit = () => {

    if (newPersonalMatcherData.length && newEducationalMatcherData.length) matcherComputation(newPersonalMatcherData); matcherComputation(newEducationalMatcherData);
    if (criteriaAlgoritmsRefData) ageCalculation();

    // Remove unwanted properties from formValue object
    let form = {}
    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value
      }
      return form
    })

    const submitInfoObject = {
      id: user.id,
      application_number: ApplicantionSerialNumberCount,
      application_ref_number: ApplicationReferenceNumber,
      ...form
    }

    console.log(`----submitInfoObject----`, submitInfoObject);
    setConfirmDialog({
      isOpen: true,
      title: ApplicantSubmitMsgconfirm,
      subTitle: ApplicantSubmitMmsgconfirmsub,
      onConfirm: () => {
        console.log(`submitInfoObject`, submitInfoObject);
        //excecuteUpdate(selectionObject); 
        //dispatch(doInsert('mactechrecruit/applications/update_field_of_application', selectionObject, 'personalinfo', `${user.display_name}${ApplicantCategoryMsg}`, ApplicantSuccessMsg, ApplicantErrorMsg));
        //router.push(`${appDir}/applynow`);
        //setOpenCriteriaPopup(false);
        //toast.success(ApplicantSubmitLoadingSuccess, { theme: 'dark', position: 'top-center', autoClose: 10000 });


        const API_Link = `/mactechrecruit/registrations/add_edit_applicant_info`;
        jwtAxios({
          method: 'POST',
          url: API_Link,
          data: submitInfoObject
        })
          .then(response => {
            if (response.status === 200) {
              console.log(`handleSubmit response`, response);
              toast.success(ApplicantSubmitLoadingSuccess, { theme: 'dark', position: 'top-center', autoClose: 10000 });
              closeComfirmDialog();
            } else {
              toast.error(ApplicantSubmitLoadingError, { theme: 'dark', position: 'top-center', autoClose: 10000 });
            }
          })
          .catch(err => {
            toast.error(ApplicantSubmitLoadingError + err, { theme: 'dark', position: 'top-center', autoClose: 10000 });
            //console.log(`handleSubmit err`, err)
          });
      }
    })

    console.log(form)
    // Show last component or success message
    //handleNext()
  }

  const closeComfirmDialog = () => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    })
    handleNext();
    // console.log(`Dialog closed`)
  }

  const ApplicationFormHeader1 = String(messages["applicant.ApplicationFormHeader"])
  const ApplicantFormHeader1 = String(messages["applicant.ApplicantFormHeader"])

  //  ,
  // , , , , 
  // , aplicant_homeregion,aplicant_residential, aplicant_gps, 
  // aplicant_height, aplicant_birthcet, aplicant_nattionality, aplicant_currentjob,
  // aplicant_emergency, aplicant_emgrelation, aplicant_emgphone






  //========================== STATUS COMPUTATIONS==================

  const newPersonalMatcherData = personalMatcher?.map((item: any) => {
    if (item.requirement_text) {
      return {
        ...item,
        requirement_text: removeSquareBracketWithString(item.requirement_text),
      };
    }
    return item;
  });

  const newEducationalMatcherData = educationalMatcher?.map((item: any) => {
    if (item.req_grade_value) {
      return {
        ...item,
        applicant_provision: item.provided_grade_value,
        requirement_text: item.req_grade_value,
      };
    }
    return item;
  });





  const matcherComputation = (data) => {
    console.log(`newPersonalMatcherData`, newPersonalMatcherData);
    console.log(`newEducationalMatcherData`, newEducationalMatcherData);

    //const dispatch = useDispatch();
    //lesser,grater,equal,between,from
    data?.map((item) => {

      if (item.standard == 'lesser') {
        if (Number(item.applicant_provision) < Number(item.requirement_text)) {
          dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 1 }, ``, ``));
          console.log(item.id, ` On Lesser Provided `, item.applicant_provision, `Against `, item.requirement_text, ` Save 1`);
        } else {
          dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 0 }, ``, ``));
          console.log(item.id, ` On Lesser Provided `, item.applicant_provision, `Against `, item.requirement_text, ` Save 0`);
        }
      }

      if (item.standard == 'greater') {
        if (Number(item.applicant_provision) > Number(item.requirement_text)) {
          dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 1 }, ``, ``));
          console.log(item.id, ` On Greater Provided `, item.applicant_provision, `Against `, item.requirement_text, ` Save 1`);
        } else {
          dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 0 }, ``, ``));
          console.log(item.id, ` On Greater Provided `, item.applicant_provision, `Against `, item.requirement_text, ` Save 0`);
        }
      }

      if (item.standard == 'equal') {
        if (item.applicant_provision == item.requirement_text) {
          dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 1 }, ``, ``));
          console.log(item.id, ` On Equal Provided `, item.applicant_provision, `Against `, item.requirement_text, ` Save 1`);
        } else {
          dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 0 }, ``, ``));
          console.log(item.id, ` On Equal Provided `, item.applicant_provision, `Against `, item.requirement_text, ` Save 0`);
        }
      }

      if (item.standard == 'lesserequal') {
        if (Number(item.applicant_provision) <= Number(item.requirement_text)) {
          dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 1 }, ``, ``));
          console.log(item.id, ` On Less or Equal Provided `, item.applicant_provision, `Against `, item.requirement_text, ` Save 1`);
        } else {
          dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 0 }, ``, ``));
          console.log(item.id, ` On Less or Equal Provided `, item.applicant_provision, `Against `, item.requirement_text, ` Save 0`);
        }
      }

      if (item.standard == 'greaterequal') {
        if (Number(item.applicant_provision) >= Number(item.requirement_text)) {
          dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 1 }, ``, ``));
          console.log(item.id, ` On Greater or Equal Provided `, item.applicant_provision, `Against `, item.requirement_text, ` Save 1`);
        } else {
          dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 0 }, ``, ``));
          console.log(item.id, ` On Greater or Equal Provided `, item.applicant_provision, `Against `, item.requirement_text, ` Save 0`);
        }
      }

      if (item.standard == 'any') {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: item.id, applicant_id: item.applicant_id, match_status: 1 }, ``, ``));
        console.log(item.id, ` On Any Every Provision is Correct Save 1`);

      }
    })

  }

  //========================== STATUS COMPUTATIONS==================
  const ageCalculation = () => {

    const records: any = criteriaAlgoritmsRefData;

    records !== null || records !== undefined ? (
      records?.map((item: any) => {
        //personalInfoData?.aplicant_subcategory_id
        if (item.sub_category_id == 29 && item.gender_type == personalInfoData?.aplicant_gender && item.ex_criteria_id) {
          //selectFieldFromObject();
          const getFullFieldText = objectValueWithReference(constrainData, item.req_constrains, `constrain_text`);
          const getNeededText: any = getSquareBracketString(getFullFieldText);
          const getField = removeSquareBracketWithString(getFullFieldText)
          const applicantDob = selectFieldFromObject(`applicant_provision`, newPersonalMatcherData, `criteria_name`, `Age`);
          const applicantRequired = selectFieldFromObject(`requirement_text`, newPersonalMatcherData, `criteria_name`, `Age`);
          const recordID = selectFieldFromObject(`id`, newPersonalMatcherData, `criteria_name`, `Age`);
          const applicantID = selectFieldFromObject(`applicant_id`, newPersonalMatcherData, `criteria_name`, `Age`);
          const applicantStandard = selectFieldFromObject(`standard`, newPersonalMatcherData, `criteria_name`, `Age`);
          const applicantDOBHuman: any = niceDateDefault(applicantDob, `y`);

          if (getField == 'date') {
            // console.log(`Date Found With ID `, item.id, ` For `, getFullFieldText, ` Equal to `, getNeededText)
            // console.log(`Req. applicantDob`, applicantDob);
            // console.log(`applicantDob Human`, applicantDOBHuman);
            // console.log(`Req Rec. ID`, recordID);
            // console.log(`Req Applicant. ID`, applicantID);
            const userDOB: any = new Date(applicantDOBHuman);
            const today: any = new Date(getNeededText);
            const msDiff = today - userDOB;
            const age = Math.floor(msDiff / (365.25 * 24 * 60 * 60 * 1000))
            console.log(`age`, age, ` Against `, applicantRequired);
            ageMatcher(age, applicantRequired, applicantStandard, recordID, applicantID)
            return;
          }

          //console.log(`ageCalculation getField`, getField);

        }


      })
    ) : null



  }

  const ageMatcher = (provided, required, standard, recId, applID) => {

    if (standard == 'lesser') {
      if (Number(provided) < Number(required)) {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 1 }, ``, ``));
        console.log(` On Lesser Provided `, provided, `Against `, required, ` Save 1`);
      } else {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 0 }, ``, ``));
        console.log(` On Lesser Provided `, provided, `Against `, required, ` Save 0`);
      }
    }

    if (standard == 'greater') {
      if (Number(provided) > Number(required)) {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 1 }, ``, ``));
        console.log(` On Greater Provided `, provided, `Against `, required, ` Save 1`);
      } else {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 0 }, ``, ``));
        console.log(` On Greater Provided `, provided, `Against `, required, ` Save 0`);
      }
    }

    if (standard == 'equal') {
      if (provided == required) {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 1 }, ``, ``));
        console.log(` On Equal Provided `, provided, `Against `, required, ` Save 1`);
      } else {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 0 }, ``, ``));
        console.log(` On Equal Provided `, provided, `Against `, required, ` Save 0`);
      }
    }

    if (standard == 'lesserequal') {
      if (Number(provided) <= Number(required)) {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 1 }, ``, ``));
        console.log(` On Less or Equal Provided `, provided, `Against `, required, ` Save 1`);
      } else {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 0 }, ``, ``));
        console.log(` On Less or Equal Provided `, provided, `Against `, required, ` Save 0`);
      }
    }

    if (standard == 'greaterequal') {
      if (Number(provided) >= Number(required)) {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 1 }, ``, ``));
        console.log(` On Greater or Equal Provided `, provided, `Against `, required, ` Save 1`);
      } else {
        dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 0 }, ``, ``));
        console.log(` On Greater or Equal Provided `, provided, `Against `, required, ` Save 0`);
      }
    }

    if (standard == 'any') {
      dispatch(silentAddOrEdit('mactechrecruit/applications/criteriamatcher/comfirm_update_matcher_status', { id: recId, applicant_id: applID, match_status: 1 }, ``, ``));
      console.log(` On Any Every Provision is Correct Save 1`);

    }

  }



  // const [personalZeroCount, setPersonalZeroCount] = useState(0);
  // const [personalOneCount, setPersonalOneCount] = useState(0);
  // const [educationalZeroCount, setEducationalZeroCount] = useState(0);
  // const [educationalOneCount, setEducationalOneCount] = useState(0);


  let personalZeroCount = 0;
  let personalOneCount = 0;
  let educationalZeroCount = 0;
  let educationalOneCount = 0;

  const applicantStatus = () => {
    for (let i = 0; i < newPersonalMatcherData.length; i++) {
      if (newPersonalMatcherData[i].match_status == 1) {
        personalOneCount += 1
      } else {
        personalZeroCount += 1
      }
    }

    for (let i = 0; i < newEducationalMatcherData.length; i++) {
      if (newEducationalMatcherData[i].match_status == 1) {
        educationalOneCount += 1
      } else {
        educationalZeroCount += 1
      }
    }
    console.log(`newPersonalMatcherData-On-Finish`, newPersonalMatcherData);
    console.log(`newEducationalMatcherData-On-Finish`, newEducationalMatcherData);
    console.log(`personalZeroCount`, personalZeroCount);
    console.log(`personalOneCount`, personalOneCount);
    console.log(`educationalZeroCount`, educationalZeroCount);
    console.log(`educationalOneCount`, educationalOneCount);
  }


  if (newPersonalMatcherData.length !== 0 && newEducationalMatcherData.length !== 0) applicantStatus();



  const [text, setText] = useState(user.id);
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] = useState('');
  const qrRef: any = useRef(null);

  const generateQrCode = async () => {
    //setText(user.id)
    try {
      // console.log(`user?.id`, user.id)
      // console.log(`text`, text)
      //const response = await QRCode.toDataURL(String(text));
      // const response = await QRCode.toDataURL(user.display_name);
      const response = await QRCode.toDataURL(String(user.id));
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };


  if (isBrowser) {
    generateQrCode();
  }



  return (
    <>

      {/* <DirectInfoTitleLabel text={<IntlMessages id="apply.confirm.submissions" />} weight={Fonts.MEDIUM} color={red[900]} /> */}

      {/* <button>Print this out!</button> */}
      <ReactToPrint
        trigger={() => <IconButton > <PrintIcon color='primary' /> </IconButton>}
        content={() => componentRef.current}
      />

      <AppAnimate animation="transition.slideUpIn" delay={200}>

        <Box
          ref={componentRef}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <Box sx={{ flex: 1, maxWidth: 900, width: "100%" }}>
            <Card
              sx={{
                p: { xs: 6, xl: 8 },
                minHeight: 1000,
                display: "flex",
                flexDirection: "column",
              }}
            >



              {/* First Top Information */}
              <Grid container spacing={3}>
                <Grid item xs>
                  <GridItem>
                    <Box sx={{ display: "inline-block" }}>
                      <Avatar sx={{ ...avatarStyle }} src={`${appDirectories.macRecruitLogo}`} />
                    </Box>
                  </GridItem>
                </Grid>
                <Grid item xs={6}>
                  <GridItem>
                    <Typography variant="h1" component="h1" >
                      <IntlMessages id="apply.comfirm.macrecruit.title" />
                    </Typography>

                    <Typography variant="h3" component="h3" sx={{ mt: 2 }}>
                      {new Date().getFullYear()} {` `}  <IntlMessages id="apply.comfirm.macrecruit.subtitle" />
                    </Typography>

                  </GridItem>

                </Grid>


                <Grid item xs>
                  {/* <TextField
                    label='Enter Text Here'
                    onChange={(e) => setText(e.target.value)}
                  /> */}
                  <GridItem>
                    <Box sx={{ display: "inline-block" }}>

                      {imageUrl ? (
                        <Avatar sx={{ ...avatarStyle }} src={imageUrl} alt='QrCode' />
                      ) : null}

                      {/* <Avatar sx={{ ...avatarStyle }} src={`${appDirectories.macRecruitBarCode}`} /> */}
                    </Box>
                  </GridItem>
                </Grid>
              </Grid>
              {/* First Top Information */}

              <Divider sx={{ color: '#000' }} >
                {/* <Chip label={String(messages["apply.edu.otherCycle.title"])} /> */}
              </Divider>

              {/* Applicant Information */}


              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid container item spacing={2}>
                    <Grid item xs={3}>
                      <GridItemL>

                        <Avatar
                          //variant="circular"
                          sx={{
                            width: 100,
                            height: 100,
                            mb: 0.5,
                            borderRadius: 1
                          }}
                          src={`${user.avatar != null || user.avatar != '' ? user.avatar : appDirectories.onlineAvatarDefault}`}
                        />

                      </GridItemL>
                    </Grid>
                    <Grid item xs={3}>
                      <GridItemL>

                        <Box
                          sx={{
                            px: 3,
                            mb: { xs: 3, sm: 0 },
                            minWidth: 200,
                          }}
                        >
                          <Box
                            component="h3"
                            sx={{
                              color: "text.secondary",
                              mb: 1,
                              fontWeight: Fonts.BOLD,
                              fontSize: 16,
                            }}
                          >
                            <IntlMessages id="apply.comfirm.aplicant.info" />
                          </Box>
                          <Typography component="p" sx={{ mb: 1 }}>
                            <IntlMessages id="apply.comfirm.serial.number" />
                            {personalInfoData?.aplicant_serialnumber}
                          </Typography>
                          <Typography component="p" sx={{ mb: 1 }}>
                            <IntlMessages id="apply.comfirm.application.number" />
                            {ApplicantionSerialNumberCount}
                          </Typography>
                          <Typography component="p" sx={{ mb: 1 }}>
                            <IntlMessages id="apply.comfirm.application.ref" />
                            {ApplicationReferenceNumber}
                          </Typography>

                        </Box>

                      </GridItemL>
                    </Grid>
                    <Grid item xs={3}>
                      <GridItemL>

                        <Box
                          sx={{
                            px: 3,
                            mb: { xs: 3, sm: 0 },
                            minWidth: 200,
                          }}
                        >
                          <Box
                            sx={{
                              fontSize: 16,
                              color: "text.secondary",
                              mb: 1,
                              fontWeight: Fonts.BOLD,
                            }}
                            component="h3"
                          >
                            <IntlMessages id="apply.comfirm.personal.info" />
                          </Box>
                          <Typography component="p" sx={{ mb: 1 }}>
                            <IntlMessages id="apply.comfirm.personal.name" />
                            <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_lastname} {` `} {personalInfoData?.aplicant_firstname} {` `} {personalInfoData?.aplicant_othername}</span>
                          </Typography>
                          <Typography component="p" sx={{ mb: 1 }}>
                            <IntlMessages id="apply.comfirm.personal.surname" />
                            <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_lastname}</span>
                          </Typography>
                          <Typography component="p" sx={{ mb: 1 }}>
                            <IntlMessages id="apply.comfirm.personal.othername" />
                            <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_othername}</span>
                          </Typography>
                        </Box>

                      </GridItemL>
                    </Grid>
                    <Grid item xs={3}>
                      <GridItemL>


                        {personalInfoData?.aplicant_sts &&
                          <Box
                            sx={{
                              px: 3,
                              mb: { xs: 3, sm: 0 },
                              minWidth: 200,
                            }}
                          >
                            <Box
                              component="h3"
                              sx={{
                                mb: 1,
                                color: "text.secondary",
                                fontWeight: Fonts.BOLD,
                                fontSize: 16,
                              }}
                            >
                              <IntlMessages id="apply.comfirm.status" />
                            </Box>
                            {/* personalZeroCount,educationalZeroCount */}
                            {/* {personalZeroCount ? */}

                            {personalZeroCount <= 0 && educationalZeroCount <= 0 && newPersonalMatcherData.length != 0 && newEducationalMatcherData.length != 0 ?
                              <Grid>
                                <GridItem >
                                  <span style={{ padding: 10, borderRadius: 5, fontWeight: 'bolder', fontSize: '20px', color: green[800], background: green[100] }}>{String(messages["apply.applicant.status.qualified"])}</span>
                                  <br></br>
                                  <Typography style={{ fontSize: '10px', paddingTop: 5, color: green[900] }} >{String(messages["apply.applicant.status.centre"])} </Typography>
                                  <span style={{ paddingTop: 2, fontWeight: 'bold', fontSize: '12px', color: blue[900] }}> {objectValueWithReference(centresData, personalInfoData?.applicant_centre_id, `centre_name`)} </span>
                                </GridItem>
                              </Grid>
                              :
                              <Grid>
                                <GridItem onClick={() => router.push('/my-account')} style={{ cursor: 'pointer' }}>
                                  <span style={{ padding: 10, borderRadius: 5, fontWeight: 'bolder', fontSize: '20px', color: red[800], background: red[100] }}>{String(messages["apply.applicant.status.disqualified"])}</span>
                                  <br></br>
                                  <Typography style={{ fontSize: '10px', paddingTop: 5, color: red[900] }} >{String(messages["apply.applicant.status.clickhere"])} </Typography>
                                  <span style={{ paddingTop: 2, fontWeight: 'bold', fontSize: '12px', color: blue[900] }}> {String(messages["apply.applicant.status.viewreasons"])} </span>
                                </GridItem>
                              </Grid>
                            }



                            {/* <Grid item container alignItems="center" justifyContent="center" >
                                                            <span style={{ padding: 10, marginTop: 2, borderRadius: 5, }} >
                                                                <Typography variant="h1" style={{ color: green[800], background: green[100] }} >{String(messages["apply.applicant.status.qualified"])} </Typography>
                                                            </span>
                                                        </Grid> */}


                            {/* <Typography component="p" sx={{ mb: 1, fontWeight: Fonts.MEDIUM }}>
                                                            Applicant Status
                                                            Screening Center
                                                        </Typography> */}
                          </Box>
                        }

                      </GridItemL>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>

              {/* Applicant Information */}



              {/* Applicant Bio Information */}
              <Divider sx={{ color: '#000', mb: 1 }} >
                {/* <Chip size="small" label={String(messages["apply.applicant.personalInfo"])} /> */}
              </Divider>

              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid container item spacing={3}>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_maritalstatus.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}> {personalInfoData?.aplicant_maritalstatus.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_dob.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{humanDate(personalInfoData?.aplicant_dob)}</span> {/*  {niceDateDefault(personalInfoData?.aplicant_dob)} */}
                      </GridItemL>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_pob.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}> {personalInfoData?.aplicant_pob.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_hometown.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_hometown.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_homedistrict.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_homedistrict.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_homeregion.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_homeregion.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_residential.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_residential.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_gps.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_gps.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_height.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_height.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_birthcet.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_birthcet.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_nattionality.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_nattionality.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_currentjob.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_currentjob.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.comfirm.aplicant_emergency.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_emergency.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.aplicant_emgrelation.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_emgrelation.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItemL>
                        {String(messages["apply.comfirm.aplicant_emgphone.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{personalInfoData?.aplicant_emgphone.toUpperCase()}</span>
                      </GridItemL>
                    </Grid>
                  </Grid>



                  {personalMatcher != null || personalMatcher !== '' || personalMatcher != undefined ?
                    <>
                      <Grid container item spacing={3}>
                        {personalMatcher?.map((item: any) => (
                          <Grid item xs={4} key={item.id}>
                            <GridItemL >
                              <span style={{ fontSize: '10px', fontWeight: 'bolder', color: 'brown' }}>{getSquareBracketString(item?.requirement_text)}</span>{`: `} <span style={{ fontSize: '10px', fontWeight: 'bolder' }}>{item?.applicant_provision.toUpperCase()}</span>
                            </GridItemL>
                          </Grid>
                        ))}
                      </Grid>

                    </>
                    : null}

                </Grid>
              </Box>

              {/* Applicant Bio Information */}



              {/* Applicant Educational Information */}

              <Divider sx={{ color: '#000', mb: 2 }} >
                {/* <Chip label={String(messages["apply.applicant.educationalInfo"])} /> */}
              </Divider>


              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid container item spacing={3} >
                    <Grid item xs={4}>
                      <GridItem sx={{ textAlign: 'left', color: '#000' }}>
                        <span style={{ fontWeight: 'bolder' }}>{String(messages["apply.edu.firstCycle.title.label"])}</span>
                      </GridItem>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItem sx={{ textAlign: 'left', color: '#000' }}>
                        <span style={{ fontWeight: 'bolder' }}>{String(messages["apply.edu.secondCycle.title.label"])}</span> {/*  {niceDateDefault(personalInfoData?.aplicant_dob)} */}
                      </GridItem>
                    </Grid>
                    <Grid item xs={4}>
                      <GridItem sx={{ textAlign: 'left', color: '#000' }}>
                        <span style={{ fontWeight: 'bolder' }}>{String(messages["apply.edu.thirdCycle.title.label"])}{` & `} {String(messages["apply.edu.otherCycle.title.label"])}</span>
                      </GridItem>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid item xs={4}>
                      {firstCycleInfo != null || firstCycleInfo !== '' || firstCycleInfo != undefined ?
                        <>
                          <GridItemL>{firstCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.institution_name.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.institution_name}</span></span>))}</GridItemL>
                          <GridItemL>{firstCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.year_of_completion.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.year_of_completion}</span></span>))}</GridItemL>
                          <GridItemL>{firstCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.certnumber.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.certificate_number}</span></span>))}</GridItemL>

                          <EduCycleInfoTable
                            cycleType={1}
                            cycleInfoData={firstCycleInfo}
                            subjectsData={subjectsData}
                            gradeData={gradeData}
                          />
                        </>
                        : null}
                    </Grid>
                    <Grid item xs={4}>
                      {secondCycleInfo != null || secondCycleInfo !== '' || secondCycleInfo != undefined ?
                        <>
                          <GridItemL>{secondCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.institution_name.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.institution_name}</span></span>))}</GridItemL>
                          <GridItemL>{secondCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.year_of_completion.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.year_of_completion}</span></span>))}</GridItemL>
                          <GridItemL>{secondCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.program.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.program_of_study}</span></span>))}</GridItemL>
                          <GridItemL>{secondCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.certnumber.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.certificate_number}</span></span>))}</GridItemL>
                          <EduCycleInfoTable
                            cycleType={2}
                            cycleInfoData={secondCycleInfo}
                            subjectsData={subjectsData}
                            gradeData={gradeData}
                          />
                        </>
                        : null}
                    </Grid>
                    <Grid item xs={4}>

                      {thirdCycleInfo != null || thirdCycleInfo !== '' || thirdCycleInfo != undefined ?
                        <>
                          <GridItemL>{thirdCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.institution_name.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.institution_name}</span></span>))}</GridItemL>
                          <GridItemL>{thirdCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.year_of_completion.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.year_of_completion}</span></span>))}</GridItemL>
                          <GridItemL>{thirdCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.program.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.program_of_study}</span></span>))}</GridItemL>
                          <GridItemL>{thirdCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.certnumber.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.certificate_number}</span></span>))}</GridItemL>
                          <EduCycleInfoTable
                            cycleType={3}
                            cycleInfoData={thirdCycleInfo}
                            subjectsData={subjectsData}
                            gradeData={gradeData}
                          />
                        </>
                        : null}
                      {fourthCycleInfo != null || fourthCycleInfo !== '' || fourthCycleInfo != undefined ?
                        <>
                          <GridItemL>{fourthCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.institution_name.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.institution_name}</span></span>))}</GridItemL>
                          <GridItemL>{fourthCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.year_of_completion.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.year_of_completion}</span></span>))}</GridItemL>
                          <GridItemL>{fourthCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.program.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.program_of_study}</span></span>))}</GridItemL>
                          <GridItemL>{fourthCycleInfo?.slice(0, 1).map((item: any) => (<span key={item.id}>{String(messages["apply.edu.certnumber.label"])}{`: `} <span style={{ fontWeight: 'bolder' }}>{item.certificate_number}</span></span>))}</GridItemL>
                          <EduCycleInfoTable
                            cycleType={4}
                            cycleInfoData={fourthCycleInfo}
                            subjectsData={subjectsData}
                            gradeData={gradeData}
                          />
                        </>
                        : null}

                    </Grid>
                  </Grid>


                  {educationalMatcher != null || educationalMatcher !== '' || educationalMatcher != undefined ?
                    <>
                      <Grid container item spacing={3}>
                        {educationalMatcher?.map((item: any) => (
                          <Grid item xs={4} key={item.id}>
                            <GridItemL>
                              <span style={{ fontWeight: 'bolder', fontSize: '10px', color: 'brown' }}>{`${item?.educational_level} ${item?.subject_name}`}</span>{`: `} <span style={{ fontWeight: 'bolder', fontSize: '10px', }}>{item?.provided_grade_name.toUpperCase()}</span>
                            </GridItemL>
                          </Grid>
                        ))}
                      </Grid>
                    </>
                    : null}

                </Grid>
              </Box>
              {/* Applicant Educational Information */}

              <Divider sx={{ color: '#000' }} >
                {/* <Chip label={String(messages["apply.edu.otherCycle.title"])} /> */}
              </Divider>
              {/* Applicantion Disclaimer */}
              <GridItemL>
                <span style={{ fontWeight: 'bolder', color: "#000" }}>{String(messages["apply.comfirm.disclaimer.label"])}</span>{`:`} <span style={{ fontSize: '10px', }}>{` I `}{personalInfoData?.aplicant_lastname} {` `} {personalInfoData?.aplicant_firstname} {` `} {personalInfoData?.aplicant_othername}{` `}{String(messages["apply.comfirm.disclaimer.text"])}</span>
              </GridItemL>


              <Divider sx={{ color: '#000' }} >
                {/* <Chip label={String(messages["apply.edu.otherCycle.title"])} /> */}
              </Divider>

              <Typography align='center' component="p" sx={{ mb: 1, mt: 1, fontWeight: Fonts.MEDIUM, color: "#777" }}>
                {`Copyright © ${new Date().getFullYear()} Powered By MAC-Tech`}
              </Typography>
              {/* Applicantion Disclaimer */}




              {/* The Last Part */}
            </Card>
          </Box>
        </Box>
      </AppAnimate >

      < Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }
      }>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          {String(messages["apply.comfirm.back.label"])}
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          {String(messages["apply.comfirm.continue.label"])}
        </Button>
      </Box >

      <ConfirmDialog
        confirmNo="Go Back"
        confirmYes="Confirm"
        maxWidth="xs" //'xs' | 'sm' | 'md' | 'lg' | 'xl'
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}


// SELECT mac_applicant_criteria_matcher.*,mac_criteria.criteria_name,mac_criteria.criteria_value as total_criteria,mac_critiria_algorithms_ref.standard,mac_critiria_algorithms_ref.req_value,mac_requirements.requirement_text from mac_applicant_criteria_matcher,mac_critiria_algorithms_ref,mac_criteria,mac_requirements where mac_applicant_criteria_matcher.algo_ref_id=mac_critiria_algorithms_ref.ref_id and mac_critiria_algorithms_ref.ex_criteria_id =mac_criteria.id and mac_applicant_criteria_matcher.algo_type='personal' and mac_critiria_algorithms_ref.req_value=mac_requirements.id
//SELECT mac_applicant_criteria_matcher.*,(select mac_grades.grade_value from mac_grades where mac_applicant_criteria_matcher.applicant_provision=mac_grades.id ) as provided_grade_value ,mac_subjects.subject_name,mac_grade_algorithms.standard, mac_grade_algorithms.grade_value as grade_value_id,(select mac_grades.grade_value from mac_grades where mac_grade_algorithms.grade_value=mac_grades.id ) as req_grade_value,mac_grade_algorithms.grade_type from   mac_applicant_criteria_matcher,mac_subjects,mac_grade_algorithms where mac_applicant_criteria_matcher.algo_ref_id=mac_grade_algorithms.id and mac_grade_algorithms.subject_id=mac_subjects.id and mac_applicant_criteria_matcher.algo_type='educational'

