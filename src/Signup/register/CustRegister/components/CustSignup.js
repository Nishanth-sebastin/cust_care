import React from 'react';
import { Formik, Form, useFormik } from 'formik';
// import { TextField } from './TextField';
import { TextField } from '@material-ui/core';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/rocket.png'
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core'
import { AddCircleOutlineOutlined } from '@material-ui/icons';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const CustSignup = () => {

  const paperStyle = { padding: '30px 20px', height: '790px', width: 1000, margin: "30px auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 5 }


  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmpass: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    number: Yup.number().required('Number is Required').min(10, 'Number must be atleast 10 digits'),
    region: Yup.string().required('Region is Required')
  })

  const navigate = useNavigate();
  const addCustomer = () => {
    navigate("/customer/login");
    
    Axios.post("http://localhost:8080/signupcust", {
      firstname: formik.values.firstname,
      lastname: formik.values.lastname,
      email: formik.values.email,
      password: formik.values.password,
      confirmpassword: formik.values.confirmpass,
      number: formik.values.number,
      region: formik.values.region,

    }).then((response) => {
      console.log('success')
      localStorage.setItem('signupcustname', response.data.name)
    })
  }

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpass: '',
      number: '',
      region: ''
    },
    validationSchema: validate,
    onSubmit: () => {
      console.log("Submitted")
    }
  })


  console.log(formik.values)
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Customer Register</h2>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography><br></br><br></br>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <TextField onChange={formik.handleChange} name="firstname" value={formik.values.firstname} fullWidth label='First Name' placeholder="Enter your first name" />
          {formik.errors.firstname && formik.touched.firstname && <p style={{ color: '#161616' }}>{formik.errors.firstname}</p>}
          <br></br><br></br>
          <TextField className={formik.errors} onChange={formik.handleChange} value={formik.values.lastname} name="lastname" fullWidth label='Last Name' placeholder="Enter your last name" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.email} name="email" fullWidth label='Email ' placeholder="Enter your Email " />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.password} name="password" fullWidth label='Password' placeholder="Enter your password" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.confirmpass} name="confirmpass" fullWidth label='Confirm password' placeholder="Confirm your password" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.number} name="number" fullWidth label='Number' placeholder="Enter your Number" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.region} name="region" fullWidth label='Region' placeholder="Enter your Region" />
          <br></br><br></br>

          <h5 style={{ fontSize: '15px' }}>Already have a account<a style={{ textDecoration: 'none' }}> {<Link style={{ textDecoration: 'none' }} to='/customer/login'>Click Here</Link>}</a></h5><br></br>
          <Button onClick={addCustomer} type='submit' variant='contained' color='primary'><Link to="/"></Link>SignUp</Button>
        </form>
      </Paper>
    </Grid>
  )
}