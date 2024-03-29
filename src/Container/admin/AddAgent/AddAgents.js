import React, { useState } from "react";
import { Formik, Form, useFormik } from "formik";
import { TextField } from '@material-ui/core';
import logo from '../assets/rocket.png'
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core'
import { AddCircleOutlineOutlined } from '@material-ui/icons';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Axios from 'axios'
import LayoutAdmin from '../../../MainLayout/LayoutAdmin'
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, FormControlLabel, FormLabel, Radio } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../assets/rocket.png";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { InputAdornment, IconButton } from "@material-ui/core";


// import { Link } from 'react-router-dom';

const AddAgents = () => {
  const paperStyle = {
    padding: "30px 20px",
    height: "630px",
    width: 1000,
    margin: "120px auto 0px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 30 };

  const [clear,setClear]=useState(false)
  const [addStatus, setAddStatus] = useState("");
  const [redirect, setRedirect] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      password: "",
      joiningdate: "",
    },
  });
  console.log(formik.values);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const orgname = localStorage.getItem("orgname");
  const logincust = (e) => {
    e.preventDefault();
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    console.log(currentDate); // "17-6-2022"
    Axios.post("http://localhost:8080/addagents", {
      firstname: formik.values.firstname,
      lastname: formik.values.lastname,
      number: formik.values.number,
      email: formik.values.email,
      password: formik.values.password,
      orgname: orgname,
      date: currentDate,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setAddStatus(response.data.message);
      }
    });

    setClear(true);
  };

  return (
    <LayoutAdmin>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlined />
            </Avatar>
            <h2 style={headerStyle}>Add Agents</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an agent !
            </Typography>
            <br></br>
            <br></br>
          </Grid>
          <form>
            <TextField
              onChange={formik.handleChange}
              name="firstname"
              value= {clear ? "" : formik.values.firstname}
              fullWidth
              label="First Name"
              placeholder="Enter first name"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={clear ? "" : formik.values.lastname}
              name="lastname"
              fullWidth
              label="Last Name"
              placeholder="Enter last name"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={clear ? "" : formik.values.number}
              name="number"
              fullWidth
              label="Number"
              placeholder="Enter Number"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={clear ? "" : formik.values.email}
              name="email"
              fullWidth
              label="Email "
              placeholder="Enter Email "
            />
            <br></br>
            <br></br>
            <TextField
            onChange={formik.handleChange}
            value={clear ? "" :formik.values.password}
            type={showPassword ? "text" : "password"}
            name="password"
            fullWidth
            label="Password"
            placeholder="Enter your password"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="start"
                  style={{
                    position: "relative",
                    right: "130px",
                    bottom: "35px",
                  }}
                >
                  <IconButton
                    disableRipple
                    style={{ boxShadow: "none" }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}}
            />
            <br></br>
            <br></br>
            
            <Button
              onClick={logincust}
              type="submit"
              variant="contained"
              color="primary"
            >
              {" "}
              Add Agent
              {/* {
              redirect === true ? <Link style={{ color: 'white' }} to="/organization/admin/">Login</Link> : <>Login</>
            } */}
              {/* <Link target='_blank' style={{ color: 'white', textDecoration: 'none' }} to={redirect == true ? '/customer/dashboard' : ''}>Login</Link> */}
            </Button>
          </form>
        </Paper>
      </Grid>
    </LayoutAdmin>
  );
};

export default AddAgents;
