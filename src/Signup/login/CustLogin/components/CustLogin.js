import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import Axios from 'axios'
import SendIcon from '@mui/icons-material/Send';


export const CustLogin = () => {
  // /customer/${customer}/dashboard

  const paperStyle = { padding: '30px 20px',  width: 1000, margin: "150px auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 5 }

  const [loginstatus, setLoginstatus] = useState("")
  const [redirect, setRedirect] = useState(false)
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpass: '',

    }
  })
  console.log(formik.values)
  const navigate = useNavigate();
  // const customer = localStorage.getItem("custname")
  const logincust = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:8080/logincust', {
      email: formik.values.email,
      password: formik.values.password
    }).then((response) => {
     
      console.log( response.data.name);
      
      localStorage.setItem('custname', response.data.name)
      navigate(`/customer/${response.data.name}/main`);
      if (response.data.message) {
        setLoginstatus(response.data.message)

      }
      if (loginstatus == "Correct") {
        setRedirect(true)
      }
    })

  }


  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Customer Login</h2>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography><br></br><br></br>
        </Grid>
        <form>
         
          <TextField onChange={formik.handleChange} value={formik.values.email} name="email" fullWidth label='Email ' placeholder="Enter your Email " />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.password} name="password" fullWidth label='Password' placeholder="Enter your password" />
          <br></br><br></br>
      

          <h5 style={{ fontSize: '15px' }}>Create a new account <a style={{ textDecoration: 'none' }}> {<Link style={{ textDecoration: 'none' }} to='/customer/register'>Click Here</Link>}</a></h5><br></br>
          <p style={{ color: 'red' }}>{loginstatus}</p>
          <Button onClick={logincust} type='submit' variant='contained' color='primary'>          
           Login
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}


export default CustLogin