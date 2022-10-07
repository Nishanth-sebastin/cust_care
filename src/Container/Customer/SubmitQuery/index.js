import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useFormik } from "formik";
// import { TextField } from './TextField';
import LayoutCustomer from "../../../MainLayout/LayoutCustomer";
import { makeStyles, TextField } from "@material-ui/core";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, FormControlLabel, FormLabel, Radio } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/rocket.png";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Axios from "axios";

export const CustLogin = () => {
  const paperStyle = {
    padding: "30px 20px",
    height: "620px",
    position: "relative",
    top: "70px",
    width: 1000,
    margin: "30px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const buttonStyle = { display: "flex", justifyContent: "center" };

  const [loginstatus, setLoginstatus] = useState("");

  const [redirect, setRedirect] = useState(false);
  const [status, setStatus] = useState("Pending");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      orgname: "",
      query: "",
      phonenumber: "",
      region: "",
    },
  });

  const navigate = useNavigate();

  const submitquery = () => {
    Axios.post("http://localhost:8080/submitquerycust", {
      name: formik.values.name,
      email: formik.values.email,
      orgname: formik.values.orgname,
      query: formik.values.query,
      phonenumber: formik.values.phonenumber,
      region: formik.values.region,
      status: "pending",
      taken: "NOT_TAKEN",
    }).then((response) => {
      console.log("success");

      localStorage.setItem("submitquerycust", response.data.name);
    });
  };

  return (
    <LayoutCustomer>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlined />
            </Avatar>
            <h2 style={headerStyle}>Submit Query</h2>
          </Grid>
          <form>
            <TextField
              onChange={formik.handleChange}
              name="name"
              value={formik.values.name}
              fullWidth
              label="Name"
              placeholder="Enter your name"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              fullWidth
              label="Email "
              placeholder="Enter your Email "
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={formik.values.orgname}
              name="orgname"
              fullWidth
              label="OrgName"
              placeholder="Enter your orgname"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={formik.values.query}
              name="query"
              fullWidth
              label="Query"
              placeholder="Enter your Query"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={formik.values.phonenumber}
              name="phonenumber"
              fullWidth
              label="PhoneNumber"
              placeholder="Enter your Phone Number"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={formik.values.region}
              name="region"
              fullWidth
              label="Region"
              placeholder="Enter your Region"
            />
            <br></br>
            <br></br>
            <br></br>
            <Box style={buttonStyle}>
              {" "}
              <Button
                variant="contained"
                color="primary"
                style={buttonStyle}
                onClick={submitquery}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
    </LayoutCustomer>
  );
};

export default CustLogin;
