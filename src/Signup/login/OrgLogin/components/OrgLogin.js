import React from 'react';
import { useState, useEffect } from 'react';
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

export const OrgLogin = () => {

  const paperStyle = { padding: '30px 20px', height: '750px', width: 1000, margin: "30px auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 5 }


  const [loginstatus, setLoginstatus] = useState("")
  const [redirect, setRedirect] = useState(false)

  const formik = useFormik({
    initialValues: {
      organizationName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gstin: ''
    }
  })



  const orglogin = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:8080/loginorg', {
      email: formik.values.email,
      password: formik.values.password
    }).then((response) => {

      localStorage.setItem('orgname', response.data.orgname)
      if (response.data.message) {
        setLoginstatus(response.data.message)
      }
      if (loginstatus == "Correct") {
        setRedirect(true)
      }


    })

  }

  useEffect(
    () => {

    }
  )
  // useEffect(() => {
  //   Axios.get("http://localhost:8080/loginorg").then((response) => {
  //     console.log(response)
  //   })
  // }, [])


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
          {/* <p style={{ color: 'red' }}>{loginstatus}</p> */}
          <h5 style={{ fontSize: '15px' }}>Create a new account <a style={{ textDecoration: 'none' }}> {<Link style={{ textDecoration: 'none' }} to='/organization/register'>Click Here</Link>}</a></h5><br></br>
          <Button onClick={orglogin} type='submit' variant='contained' color='primary'>
            {/* {
              redirect === true ? <Link style={{ color: 'white' }} to="/organization/admin/">Login</Link> : <>Login</>
            } */}
            <Link target='_blank' style={{ color: 'white', textDecoration: 'none' }} to={redirect == true ? '/organization/admin/' : ''}>Login</Link>
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}