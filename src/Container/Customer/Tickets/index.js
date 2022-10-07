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
  Button,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core";
import LayoutCustomer from "../../../MainLayout/LayoutCustomer";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  STATUSES = ["View Status"];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    content: "I don't receive my amount",
    date: "22-02-2003",
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

function Customers() {
  const style = styles();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const customername = localStorage.getItem("custname");
  const [ticketData, setTicketData] = useState([
    {
      query: "Phone Problem",
      timestamp: "",
    },
  ]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    Axios.post("http://localhost:8080/customer/tickets", {
      customername,
    }).then((response) => {
      console.log(response);
      setTicketData(response.data.message);
    });
  });

  // Axios.get("http://localhost:8080/fetch_submitquerycust", {

  //   }).then((response) => {
  //     console.log('success')

  //    console.log(response);
  //    console.log(response.data);
  //   })

  return (
    <LayoutCustomer>
      <Grid className={style.Grid}>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  Queries
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Issued Date
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ticketData.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={10}>
                        <Typography className={classes.content}>
                          {row.query}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>{row.timestamp}</TableCell>
                  <TableCell>
                    <Button
                      className={classes.status}
                      style={{
                        backgroundColor: "blue",
                      }}
                    >
                      View Status
                    </Button>
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
