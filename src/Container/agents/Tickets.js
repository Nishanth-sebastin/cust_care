import React, { Component } from 'react'
import LayoutAgent from '../../MainLayout/LayoutAgent'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core';
import { Box, Icon, Button, Typography, SpeedDialIcon } from '@mui/material'
import { Tooltip } from '@mui/material';
import { IconButton } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import Grid from '@mui/material/Grid';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Avatar } from '@mui/material';
import { TableFooter } from '@mui/material';
import { TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';

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
        color: 'black',

    },
    links: {
        textDecorationLine: 'none'
    }

})

const useStyles = makeStyles((theme) => ({

    tableContainer: {
        borderRadius: 15,

        width: '1200px'
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: '#0D80D8',


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

let USERS = [], STATUSES = ['Low', 'Medium', 'High'];
for (let i = 0; i < 14; i++) {
    USERS[i] = {
        name: ' Nishanth',
        email: 'whitedevil',
        phone: 8754954543,
        probleminfo: 'My mobile phone',
        jobTitle: 'Web Designer',
        company: "tech phantoms",
        joinDate: '22-02-2003',
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}






function Tickets() {

    const style = styles()
    const [age, setAge] = React.useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
    };


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
        <LayoutAgent>

            <Grid className={style.Grid}>
                <Typography variant='h5'>Tickets</Typography><br></br>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Problem Info</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Job Info</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Joining Date</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>
                                        <Grid container>
                                            <Grid item lg={2}>
                                                <Avatar alt={row.name} src='' className={classes.avatar} >NS</Avatar>
                                            </Grid>
                                            <Grid item sx={{ position: 'relative', left: '10px' }} lg={10}>
                                                <Typography className={classes.name}>{row.name}</Typography>
                                                <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                                                <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="primary" variant="subtitle2"><Link to="/organization/agents/tickets/1" target='_blank' className={style.links}>{row.probleminfo}</Link></Typography>

                                    </TableCell>
                                    <TableCell>
                                        <Typography color="primary" variant="subtitle2">{row.jobTitle}</Typography>
                                        <Typography color="textSecondary" variant="body2">{row.company}</Typography>
                                    </TableCell>
                                    <TableCell>{row.joinDate}</TableCell>
                                    <TableCell>
                                        <Typography
                                            className={classes.status}
                                            style={{
                                                backgroundColor:
                                                    ((row.status === 'Low' && 'green') ||
                                                        (row.status === 'Medium' && 'blue') ||
                                                        (row.status === 'High' && 'orange'))
                                            }}
                                        >{row.status}</Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Grid>




        </LayoutAgent >
    )
}

export default Tickets