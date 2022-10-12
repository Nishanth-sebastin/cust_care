import React, { useState } from "react";
import { Formik, Form, useFormik } from "formik";
// import { TextField } from './TextField';
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, FormControlLabel, FormLabel, Radio } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/rocket.png";
import { Grid, Paper, Avatar, Typography, Button } from "@material-ui/core";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const OrgSignup = () => {
  const paperStyle = {
    padding: "30px 20px",
    height: "1050px",
    width: 1000,
    margin: "30px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  const [loginstatus, setLoginstatus] = useState("");

  const formik = useFormik({
    initialValues: {
      organizationName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      street: "",
      city: "",
      region: "",
      zipcode: "",
      website: "",
      gstin: "",
    },
  });
  console.log(formik.values);
  const navigate = useNavigate();
  const addOrg = () => {
    Axios.post("http://localhost:8080/signuporg", {
      orgname: formik.values.organizationName,
      email: formik.values.email,
      number: formik.values.phone,
      password: formik.values.password,
      confirmpassword: formik.values.confirmPassword,
      street: formik.values.street,
      city: formik.values.city,
      region: formik.values.region,
      zip: formik.values.zipcode,
      website: formik.values.website,
      gst: formik.values.gstin,
    }).then((response) => {
      navigate("/organization/login");
      console.log(response);
      localStorage.setItem("orgname", response.data.orgname);
    });
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Organization Register</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
          <br></br>
          <br></br>
        </Grid>
        <form>
          <TextField
            onChange={formik.handleChange}
            name="organizationName"
            value={formik.values.organizationName}
            fullWidth
            label="Organization name"
            placeholder="Enter Organization name"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter your email"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.phone}
            name="phone"
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            name="confirmPassword"
            fullWidth
            label="Confirm password"
            placeholder="Confirm your password"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.street}
            name="street"
            fullWidth
            label="Street"
            placeholder="Enter your street name"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.city}
            name="city"
            fullWidth
            label="City"
            placeholder="Enter your city name"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.region}
            name="region"
            fullWidth
            label="Region"
            placeholder="Enter your region name"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.zipcode}
            name="zipcode"
            fullWidth
            label="Zip code"
            placeholder="Enter Zip code"
          />
          <br></br>
          <br></br>

          <TextField
            onChange={formik.handleChange}
            value={formik.values.website}
            name="website"
            fullWidth
            label="Website Link "
            placeholder="Enter your Website Link"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.gstin}
            name="gstin"
            fullWidth
            label="GSTIn"
            placeholder="Enter GSTIn"
          />
          <br></br>
          <br></br>

          <h5 style={{ fontSize: "15px" }}>
            Already Have an Account{" "}
            <a style={{ textDecoration: "none" }}>
              {" "}
              {
                <Link
                  style={{ textDecoration: "none" }}
                  to="/organization/login"
                >
                  Click Here
                </Link>
              }
            </a>
          </h5>
          <br></br>
          <Button onClick={addOrg} variant="contained" color="primary">
            <Link to="/"></Link>SignUp
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
