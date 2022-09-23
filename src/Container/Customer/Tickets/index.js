import React, { Component } from 'react'
import LayoutAgent from '../../../MainLayout/LayoutCustomer'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core';
import { Box, Icon, Button, Typography } from '@mui/material'
import { Tooltip } from '@mui/material';
import { IconButton } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import Grid from '@mui/material/Grid';
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
        color: 'black'
    }

})
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
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

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



function Tickets() {

    const style = styles()
    return (
        <LayoutAgent>

            <Box className={style.Grid} >
                <Grid container>

                    <Grid item sm={12}>
                        <Typography>Raised tickets</Typography><br></br>
                        <Button variant='contained' sx={{ height: '30px' }} >
                            Filter
                        </Button>

                    </Grid>

                    <Grid item sm={12}>
                        <TableContainer component={Paper}>
                            <br></br>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Subjects</StyledTableCell>
                                        <StyledTableCell align="right">Requested</StyledTableCell>
                                        <StyledTableCell align="right">Date to be Solved</StyledTableCell>
                                        <StyledTableCell align="right">type</StyledTableCell>
                                        <StyledTableCell align="right">Priority</StyledTableCell>



                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>

                                            <StyledTableCell component="th" scope="row" ><Link target='_blank' className={style.link} to="/organization/agents/tickets/1">{row.name}</Link></StyledTableCell>
                                            <StyledTableCell align="right" component="th" scope="row">
                                                {row.calories}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>


            </Box>
        </LayoutAgent >
    )
}

export default Tickets