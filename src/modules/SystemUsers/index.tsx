import React, { useState, useEffect } from 'react'
import UsersForm from "./UsersForm";
import SystemUsersPage from "./UsersDetailsPage"
import PageHeader from "@mactech/libs/@mactech/components/Controls/PageHeader";
import InfoIcon from '@mui/icons-material/Info';
import useTable from "@mactech/libs/@mactech/components/UseTables";
import Controls from "@mactech/libs/@mactech/components/Controls/Controls";
import { Search } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import { FormPopup } from "@mactech/libs/@mactech/components/Popups";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveRedEyeSharp from '@mui/icons-material/RemoveRedEyeSharp';
import CloseIcon from '@mui/icons-material/Close';
import ConfirmDialog from "@mactech/libs/@mactech/components/ConfirmDialog";
import { defaultTheme } from '@mactech/utility/AppContextProvider/defaultConfig';
import AppAnimate from '@mactech/core/AppAnimate';
import IntlMessages from '@mactech/utility/IntlMessages';
import { Paper, TableBody, TableRow, Toolbar, InputAdornment, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import AppInfoView from '@mactech/core/AppInfoView';
import Moment from 'moment';
import { appIntl } from "@mactech/utility/helper/Utils";
//-----------------------Redux Store------------------------------------------
import { useDispatch, useSelector } from 'react-redux';
import {
    //mapDeptToUsersInCharge,
    doInsert,
    doUpdate,
    doDelete,
    getSystemUsersData,
    deleteRec,
    doAddOrEdit,
    //getDeptInchargeUsers
} from 'redux/actions';
import { AppState } from 'redux/store';
import { GET_PERSONAL_INFO, GET_FILE_UPLOAD, GET_SYSTEM_USERS, GET_LOGS_ACTIVITIES } from 'types/actions/General.action';
//import { GET_SYSTEM_USERS } from 'types/actions/General.actions';
//-------------------------Redux Store----------------------------------------

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const iconSize = {
    fontSize: 12,
}
const editIcon = {
    borderRadius: '5px',
    height: 10,
    lineHeight: '10px',
    verticalAlign: 'middle',
    width: 21,
    minHeight: '24px',
    backgroundColor: defaultTheme.theme.palette.iconColors.editBackground,
    color: defaultTheme.theme.palette.iconColors.editFontColor,

}

const viewIcon = {
    borderRadius: '5px',
    height: 10,
    lineHeight: '10px',
    verticalAlign: 'middle',
    width: 21,
    minHeight: '24px',
    backgroundColor: defaultTheme.theme.palette.iconColors.viewBackground,
    color: defaultTheme.theme.palette.iconColors.viewFontColor,

}

const deleteIcon = {
    borderRadius: '5px',
    height: 10,
    lineHeight: '10px',
    verticalAlign: 'middle',
    width: 21,
    minHeight: '24px',
    backgroundColor: defaultTheme.theme.palette.iconColors.deleteBackground,
    color: defaultTheme.theme.palette.iconColors.deleteFontColor
}

const headCells = [
    { id: 'display_name', label: <IntlMessages id='common.display_name' /> },
    { id: 'user_phone_number', label: <IntlMessages id='common.user_phone_number' /> },
    { id: 'user_email', label: <IntlMessages id='common.user_email' /> },
    { id: 'user_registered', label: <IntlMessages id='user_registered.label' /> },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Scoreboard() {

    const dispatch = useDispatch();
    useEffect(() => { getSystemUsersData(dispatch) }, []);

    const { systemUsersData } = useSelector<AppState, AppState['general']>(({ general }) => general,);

    const [recordForEdit, setRecordForEdit] = useState(null)
    const [recordViewDetails, setrecordViewDetails] = useState(null)
    const records = systemUsersData;
    const [filterFn, setFilterFn] = useState({ fn: (items: any) => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [viewPopup, setViewPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', onConfirm: () => { } })
    const [pages, setPages] = useState([10, 5, 50, 100, 150])

    const { messages } = appIntl();
    const msgsuccess = String(messages["common.createsuccess"])
    const msgsupdated = String(messages["common.createsuccess"])
    const msgdelete = String(messages["common.msgdelete"])
    const msgconfirm = String(messages["common.msgconfirm"])
    const msgconfirmsub = String(messages["common.msgconfirmsub"])

    const UserinsertLog = String(messages["logactivity.Userinsertmsg"])
    const UserupdateLog = String(messages["logactivity.Userupdatemsg"])
    const UserdeleteLog = String(messages["logactivity.Userdeletemsg"])

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn, pages);

    const handleSearch = (e: any) => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter((x: any) =>
                        x.display_name.toLowerCase().includes(target.value) //|| 
                        //x.user_email.toLowerCase().includes(target.value)
                    )
            }
        })
    }

    const addOrEdit = (formData: any, resetForm: any) => {
        if (formData.id == 0) {
            ////dispatch(doAddOrEdit('mactechrecruit/admin/settings/categories/add_edit_categories', formData, `Category ${InsertLog}`, '', '', GET_CATEGORIES));

            dispatch(doAddOrEdit('users/add_system_users', formData, `${UserupdateLog}`, '', '', GET_SYSTEM_USERS));
            //dispatch(doInsert('users/add_system_users', formData, 'users', UserinsertLog));

            //dispatch(getSystemUsersData);
            //setNotify({isOpen: true,message: msgsuccess,type: 'success'})
        } else {
            //dispatch(doAddOrEdit('users/update_system_users', formData, `${UserupdateLog}`, '', '', GET_SYSTEM_USERS));
            //dispatch(doUpdate('users/update_system_users', formData, 'users', UserupdateLog));

            //dispatch(getSystemUsersData);
            //setNotify({isOpen: true,message: msgsupdated,type: 'success'})    
        }

        resetForm()
        setRecordForEdit(null)
        setrecordViewDetails(null)
        setOpenPopup(false)

    }

    const openInPopup = (item: any) => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const viewDetailsInPopup = (item: any) => {
        setrecordViewDetails(item)
        setViewPopup(true)
    }

    const onDelete = (id: any) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })

        dispatch(deleteRec(`users/delete_system_users?id=${id}`, `${UserdeleteLog}`, GET_SYSTEM_USERS));
        //dispatch(doDelete(`users/delete_system_users?id=${id}`, 'users', UserdeleteLog));

        setNotify({
            isOpen: true,
            message: msgdelete,//messages['arms.deleted.label'] as string,
            type: 'error'
        })
    }

    return (
        <>

            {systemUsersData !== null ? (
                <>

                    {/* <Box> */}
                    <PageHeader
                        title={<IntlMessages id='common.users.label' />}
                        subTitle={<IntlMessages id='common.users.headertitle.label' />}
                        icon={<InfoIcon fontSize="large" />}
                    />
                    {/* </Box> */}

                    <Box m={1} sx={{ display: "flex", justifyContent: "flex-end", }}>
                        <Controls.Button
                            sx={{
                                position: "relative",
                                minWidth: 100,
                                ml: 2.5,
                            }}
                            color="primary"
                            variant="outlined"
                            startIcon={<AddIcon />}
                            text={<IntlMessages id='addnew.label' />}
                            onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                        />
                    </Box>

                    <Box>
                        <Controls.TextInput
                            variant="filled"
                            color="primary"// success
                            label={<IntlMessages id='quicksearch.label' />}
                            sx={{
                                paddingBottom: "10px"
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>)
                            }}
                            onChange={handleSearch}
                        />
                    </Box>

                    <AppAnimate animation='transition.slideUpIn' delay={200}>

                        <TblContainer size='small' width='750' paddingTop='0px' paddingBottom='0px' >
                            <TblHead />

                            <TableBody>
                                {
                                    //rows.map((row) => (
                                    recordsAfterPagingAndSorting().map((item: any) => (
                                        <StyledTableRow key={item.id}>
                                            <StyledTableCell component='th' scope='row'> {item.display_name}</StyledTableCell>
                                            <StyledTableCell align='left'>{item.user_phone_number}</StyledTableCell>
                                            <StyledTableCell align='left'>{item.user_email}</StyledTableCell>
                                            <StyledTableCell align='left'> {Moment(item.user_registered).format("ll")}</StyledTableCell>

                                            <StyledTableCell>
                                                <Box sx={{ display: 'flex', flexDirection: 'row', p: 1, '& > :not(style)': { m: 1 }, }} >
                                                    <Controls.ActionButton
                                                        sx={{ ...editIcon }}
                                                        onClick={() => { openInPopup(item) }}>
                                                        <EditOutlinedIcon sx={{ ...iconSize }} />
                                                    </Controls.ActionButton>

                                                    <Controls.ActionButton
                                                        sx={{ ...viewIcon }}
                                                        onClick={() => { viewDetailsInPopup(item) }}>
                                                        <RemoveRedEyeSharp sx={{ ...iconSize }} />
                                                    </Controls.ActionButton>

                                                    <Controls.ActionButton

                                                        sx={{ ...deleteIcon }}

                                                        onClick={() => {
                                                            setConfirmDialog({
                                                                isOpen: true,
                                                                title: msgconfirm,
                                                                subTitle: msgconfirmsub,
                                                                onConfirm: () => { onDelete(item.id) }
                                                            })
                                                        }}>
                                                        <CloseIcon sx={{ ...iconSize }} />
                                                    </Controls.ActionButton>

                                                </Box>
                                            </StyledTableCell>

                                        </StyledTableRow>
                                    ))}
                            </TableBody>
                        </TblContainer>
                        <TblPagination />

                        <FormPopup
                            maxWidth="xs" //'xs' | 'sm' | 'md' | 'lg' | 'xl'
                            title={<IntlMessages id='common.systemusers.form.label' />}
                            openPopup={openPopup}
                            setOpenPopup={setOpenPopup}
                        >
                            <UsersForm
                                recordForEdit={recordForEdit}
                                addOrEdit={addOrEdit}
                            />
                        </FormPopup>

                        <ConfirmDialog
                            confirmDialog={confirmDialog}
                            setConfirmDialog={setConfirmDialog}
                        />

                        <FormPopup
                            maxWidth="sm" //'xs' | 'sm' | 'md' | 'lg' | 'xl'
                            title={<IntlMessages id='common.systemusers.details.label' />}
                            openPopup={viewPopup}
                            setOpenPopup={setViewPopup}
                        >
                            <SystemUsersPage
                                recordViewDetails={recordViewDetails}
                            //detailView={detailView} 
                            />
                        </FormPopup>
                    </AppAnimate>
                    <AppInfoView />
                </>
            ) : null}
        </>
    )

}
