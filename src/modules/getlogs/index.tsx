import React, { useState, useEffect } from 'react'
//import UsersForm from "./UsersForm";
//import SystemUsersPage from "./UsersDetailsPage"
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
    getSystemUsersData,
    //getDeptInchargeUsers
} from '../../redux/actions';
import { AppState } from '../../redux/store';
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
    { id: 'login', label: <IntlMessages id='lastlogin.label' /> },
    { id: 'logout', label: <IntlMessages id='lastlogout.label' /> },
    //{ id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Scoreboard() {

    const dispatch = useDispatch();
    useEffect(() => { getSystemUsersData(dispatch) }, []);

    const { systemUsersData } = useSelector<AppState, AppState['policy']>(({ policy }) => policy,);

    const [recordForEdit, setRecordForEdit] = useState(null)
    const [recordViewDetails, setrecordViewDetails] = useState(null)
    const records = systemUsersData;
    const [filterFn, setFilterFn] = useState({ fn: (items: any) => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [viewPopup, setViewPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '', onConfirm: () => { } })
    const [pages, setPages] = useState([50, 5, 50, 100, 150])

    const { messages } = appIntl();
    const msgsuccess = String(messages["common.createsuccess"])
    const msgsupdated = String(messages["common.createsuccess"])
    const msgdelete = String(messages["common.createsuccess"])
    const msgconfirm = String(messages["common.createsuccess"])
    const msgconfirmsub = String(messages["common.createsuccess"])

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

    return (
        <>

            {systemUsersData !== null ? (
                <>

                    <Box>
                        <PageHeader
                            title={<IntlMessages id='common.userslogs.label' />}
                            subTitle={<IntlMessages id='common.userslogs.headertitle.label' />}
                            icon={<InfoIcon fontSize="large" />}
                        />
                    </Box>

                    {/* sx={{display: 'flex',,flexDirection: 'row',p: 1,'& > :not(style)': {m: 1}}} */}

                    {/* <Box  m={1} sx={{ display: "flex", justifyContent: "flex-end", }}>
                        <Controls.Button
                            sx={{
                                position: "relative",
                                minWidth: 100,
                                ml: 2.5,
                            }}
                            color="primary"
                            variant="outlined"
                            startIcon={<AddIcon />}
                            text= {<IntlMessages id='addnew.label'/>} 
                            onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                            />
                </Box> */}

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
                                            <StyledTableCell align='left'>{item.login}</StyledTableCell>
                                            <StyledTableCell align='left'>{item.logout}</StyledTableCell>

                                            {/*   
                                            <StyledTableCell>
                                                <Box sx={{display: 'flex',flexDirection: 'row',p: 1,'& > :not(style)': {m: 1},}} >
                                                    <Controls.ActionButton
                                                        sx={{...editIcon}}
                                                        onClick={() => { openInPopup(item) }}>
                                                        <EditOutlinedIcon  sx={{...iconSize}} />
                                                    </Controls.ActionButton>

                                                    <Controls.ActionButton
                                                        sx={{...viewIcon}}
                                                        onClick={() => { viewDetailsInPopup(item) }}>
                                                        <RemoveRedEyeSharp  sx={{...iconSize}} />
                                                    </Controls.ActionButton>

                                                    <Controls.ActionButton
                                     
                                                        sx={{...deleteIcon}}

                                                        onClick={() => {
                                                            setConfirmDialog({
                                                                isOpen: true,
                                                                title:msgconfirm,
                                                                subTitle:msgconfirmsub, 
                                                                onConfirm:() => { onDelete(item.id) }      
                                                            })
                                                        }}>
                                                        <CloseIcon sx={{...iconSize}} />
                                                    </Controls.ActionButton>

                                                </Box>
                                            </StyledTableCell> */}

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
