import React, { Component, useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core";
import LayoutAgent from "../../MainLayout/LayoutAgent";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LayoutAdmin from "../../MainLayout/LayoutAdmin";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    width: "1220px",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#0D80D8",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

let USERS = [],
  STATUSES = ["Active", "Pending", "Blocked"];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: " Nishanth",
    email: "whitedevil",
    phone: 8754954543,
    probleminfo: "My mobile phone",
    jobTitle: "Web Designer",
    company: "tech phantoms",
    joinDate: "22-02-2003",
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

const styles = makeStyles({
  Grid: {
    position: "relative",
    top: "100px",
    width: "100%",
    height: "650px",

    padding: "18px",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
});

function CustomersAdmin() {
  const style = styles();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [customerdata, setCustomerData] = useState([
    {
      name: "Nishanth",
      email: "abc@gmail.com",
      phonenumber: "1234567890",
      region: "India",
    },
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const orgname = localStorage.getItem("orgname");

  useEffect(() => {
    Axios.post("http://localhost:8080/admin/customers", {
      orgname,
    }).then((response) => {
      setCustomerData(response.data.message);
    });
  });

  return (
    <LayoutAdmin>
      <Grid className={style.Grid}>
        <Typography variant="h5">Customers</Typography>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  UserName
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>Email</TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Phone Number
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Region
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerdata.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={2}>
                        <Avatar
                          alt={row.name}
                          src="."
                          className={classes.avatar}
                        >
                          N
                        </Avatar>
                      </Grid>
                      <Grid
                        item
                        lg={10}
                        sx={{ position: "relative", left: "10px" }}
                      >
                        <Typography className={classes.name}>
                          {row.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.phonenumber}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </LayoutAdmin>
  );
}

export default CustomersAdmin;

// const styles = makeStyles({
//     Grid: {
//         position: 'relative',
//         top: '100px',
//         width: '100%',
//         height: '650px',

//         padding: '18px',

//     },
//     link: {
//         textDecoration: 'none',
//         color: 'black'
//     }
// });

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,

//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
// ) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function Customers() {

//     const style = styles()
//     return (
//         <LayoutAgent>
//             <Grid className={style.Grid}>
//                 <Typography variant='h5'>Customers</Typography>
//                 <Typography color='#424B52' variant='body2'>Add, search, and manage your customers (end users) all in one place.</Typography><br></br>
//                 <TextField label='Search Customers' size='small'></TextField>

//                 <Grid item sm={12}>
//                     <TableContainer component={Paper}>
//                         <br></br>
//                         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                             <TableHead>
//                                 <TableRow>
//                                     <StyledTableCell>Subjects</StyledTableCell>
//                                     <StyledTableCell align="left">Requested</StyledTableCell>
//                                     <StyledTableCell align="left">Date to be Solved</StyledTableCell>
//                                     <StyledTableCell align="left">type</StyledTableCell>
//                                     <StyledTableCell align="left">Priority</StyledTableCell>

//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {rows.map((row) => (
//                                     <StyledTableRow key={row.name}>

//                                         <StyledTableCell component="th" scope="row" ><Link target='_blank' className={style.link} to="/organization/agents/tickets/1">{row.name}</Link></StyledTableCell>
//                                         <StyledTableCell align="left" component="th" scope="row">
//                                             {row.calories}
//                                         </StyledTableCell>
//                                         <StyledTableCell align="left">{row.fat}</StyledTableCell>
//                                         <StyledTableCell align="left">{row.carbs}</StyledTableCell>
//                                         <StyledTableCell align="left">{row.protein}</StyledTableCell>
//                                     </StyledTableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </Grid>
//             </Grid>
//         </LayoutAgent>
//     )

// }

// export default Customers
