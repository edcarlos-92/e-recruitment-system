import React, { useState, useEffect } from 'react'
import PageHeader from "@mactech/libs/@mactech/components/Controls/PageHeader";
import InfoIcon from '@mui/icons-material/Info';
import useTable from "@mactech/libs/@mactech/components/UseTables";
import Controls from "@mactech/libs/@mactech/components/Controls/Controls";
import { Search } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import { FormPopup } from "@mactech/libs/@mactech/components/Popups";
import ConfirmDialog from "@mactech/libs/@mactech/components/ConfirmDialog";
import { defaultTheme } from '@mactech/utility/AppContextProvider/defaultConfig';
import AppAnimate from '@mactech/core/AppAnimate';
import { niceDateDefault, niceDateWithTime } from '@mactech/utility/Utils';//appIntl
import IntlMessages from '@mactech/utility/IntlMessages';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Paper, TableBody, TableRow, Toolbar, InputAdornment, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from "@mui/material/Button";
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
    doSelect,
    getSystemUsersData,
    //getDeptInchargeUsers
} from '../../redux/actions';
import { AppState } from '../../redux/store';
import { GET_LOGS_ACTIVITIES, } from '../../types/actions/Policy.actions';
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
    { id: 'id', label: <IntlMessages id='common.record_id' /> },
    { id: 'description', label: <IntlMessages id='common.activity_logs' /> },
    //{ id: 'staffid', label: <IntlMessages id='common.user_in_charge'/> },
    //{ id: 'date', label: <IntlMessages id='activity_date.label'/>  },
    //{ id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Scoreboard() {

    const dispatch = useDispatch();
    useEffect(() => {
        //getSystemUsersData(dispatch)
        dispatch(doSelect('users/userlogs/get_user_log_activities', '', GET_LOGS_ACTIVITIES));
    }, []);

    const { logActivityData } = useSelector<AppState, AppState['policy']>(({ policy }) => policy,);

    const { messages } = appIntl();

    const [recordForEdit, setRecordForEdit] = useState(null)
    const [recordViewDetails, setrecordViewDetails] = useState(null)
    const records = logActivityData;
    const [filterFn, setFilterFn] = useState({ fn: (items: any) => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [viewPopup, setViewPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', onConfirm: () => { } })
    const [pages, setPages] = useState([50, 5, 50, 100, 150])
    //const[printTitle, setPrinTitle] = useState('Table Title')

    //const printTitle = 'Table Title'

    const msgsuccess = String(messages["common.createsuccess"])
    const msgsupdated = String(messages["common.createsuccess"])
    const msgdelete = String(messages["common.createsuccess"])

    const msgconfirm = String(messages["common.msgconfirm"])
    const msgconfirmsub = String(messages["common.msgconfirmsub"])

    const ResetLog = String(messages["common.resetlog"])
    const printTitle = String(messages["logHistory.printTitle"])

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
                        //x.id.includes(target.value) ||
                        x.description.toLowerCase().includes(target.value) ||
                        x.date.toLowerCase().includes(target.value) ||
                        x.staffid.toLowerCase().includes(target.value)
                        //x.activity_logs.toLowerCase().includes(target.value)
                    )
            }
        })
    }

    const resetAllLogs = () => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        dispatch(doDelete(`users/userlogs/reset_user_log_activites`, 'logsactivity', ResetLog));

        setNotify({
            isOpen: true,
            message: msgdelete,
            type: 'error'
        })
    }

    return (
        <>

            {logActivityData !== null ? (
                <>

                    <Box>
                        <PageHeader
                            title={<IntlMessages id='common.usershistorylogs.label' />}
                            subTitle={<IntlMessages id='common.usershistorylogs.headertitle.label' />}
                            icon={<InfoIcon fontSize="large" />}
                        />
                    </Box>

                    {/* sx={{display: 'flex',,flexDirection: 'row',p: 1,'& > :not(style)': {m: 1}}} */}

                    <Box m={1} sx={{ display: "flex", justifyContent: "flex-end", }}>
                        <Controls.Button
                            sx={{
                                position: "relative",
                                minWidth: 100,
                                ml: 2.5,
                            }}
                            color="error"
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            text={<IntlMessages id='reset.historylog' />}
                            //onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                            onClick={() => {
                                setConfirmDialog({
                                    isOpen: true,
                                    title: msgconfirm,
                                    subTitle: msgconfirmsub,
                                    onConfirm: () => { resetAllLogs() }
                                })
                            }}
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

                        <TblContainer id='tableid' size='small' width='750' paddingTop='0px' paddingBottom='0px' printTitle={printTitle} >
                            <TblHead />

                            <TableBody>
                                {
                                    //rows.map((row) => (
                                    recordsAfterPagingAndSorting().map((item: any) => (
                                        <StyledTableRow key={item.id}>
                                            <StyledTableCell component='th' scope='row'> {item.id}</StyledTableCell>
                                            <StyledTableCell align='left'>{`${item.description} ${item.staffid} On ${item.date}`}</StyledTableCell>
                                            {/* <StyledTableCell align='left'>{item.staffid}</StyledTableCell>
                                            <StyledTableCell align='left'>{item.date}</StyledTableCell> */}
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
                            {/* <UsersForm
                        recordForEdit={recordForEdit}
                        addOrEdit={addOrEdit} 
                    /> */}
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

                        </FormPopup>
                    </AppAnimate>
                    <AppInfoView />
                </>
            ) : null}
        </>
    )

}
