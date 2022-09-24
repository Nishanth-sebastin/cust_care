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

export const OrgLogin = () => {

  const paperStyle = { padding: '30px 20px', height: '700px', width: 1000, margin: "30px auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 5 }


  const formik = useFormik({
    initialValues: {
      organizationName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gstin: ''
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
          <h2 style={headerStyle}>Organization Login</h2>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography><br></br><br></br>
        </Grid>
        <form>
          <TextField onChange={formik.handleChange} name="organizationName" value={formik.values.organizationName} fullWidth label='Organization name' placeholder="Enter Organization name" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.email} name="email" fullWidth label='Email' placeholder="Enter your email" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.phone} name="phone" fullWidth label='Phone Number' placeholder="Enter your phone number" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.password} name="password" fullWidth label='Password' placeholder="Enter your password" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.confirmPassword} name="confirmPassword" fullWidth label='Confirm password' placeholder="Confirm your password" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.gstin} name="gstin" fullWidth label='GSTIn' placeholder="Enter GSTIn" />
          <br></br><br></br>

          <h5 style={{ fontSize: '15px' }}>Create a new account <a style={{ textDecoration: 'none' }}> {<Link style={{ textDecoration: 'none' }} to='/organization/register'>Click Here</Link>}</a></h5><br></br>
          <Button type='submit' variant='contained' color='primary'><Link to="/"></Link>Login</Button>
        </form>
      </Paper>
    </Grid>
  )
}
