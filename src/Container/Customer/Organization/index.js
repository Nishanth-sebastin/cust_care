import React, { Component } from 'react'
import chatbot from '../../Customer/assets/chat.png'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Avatar,
    Button,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core'
import LayoutCustomer from '../../../MainLayout/LayoutCustomer'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Search } from '@mui/icons-material';
import { Link} from 'react-router-dom'




const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        width: '1220px'
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: '#0D80D8',
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
}));

let USERS = [], STATUSES = ['View Status'];
for (let i = 0; i < 14; i++) {
    USERS[i] = {
        content: "Evoluer",
        
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

const styles = makeStyles({
    Grid: {
        position: 'relative',
        top: '100px',
        width: '100%',
        height: '650px',

        padding: '18px',

    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
});

function Customers() {
    const style = styles();
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <LayoutCustomer>
            <Grid className={style.Grid}>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeaderCell}>Companies</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Chatbot</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Call</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>
                                        <Grid container>
                                           
                                            <Grid item lg={10}>
                                                <Typography className={classes.content}>{row.content}</Typography>
                                                
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    
                                   
                                    <TableCell>
                                        <Link to='/customer/chatbot'> <Box
                                                        component="img"
                                                       
                                                        alt="chatbot"
                                                        src={chatbot}
                                                    />
                                        </Link>
                                      
                                    </TableCell>
                                    <TableCell>
                                        <Link to='/customer/ticketstatus'><PhoneInTalkOutlinedIcon sx={{position:"relative",left:"-1px",top:"-1px"}}/>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    
                    </Table>
                </TableContainer>
            </Grid>
        </LayoutCustomer>

    );
}

export default Customers;
