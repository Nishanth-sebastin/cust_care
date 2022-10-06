import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, useFormik } from 'formik';
// import { TextField } from './TextField';
import LayoutCustomer from '../../../MainLayout/LayoutCustomer'
import { makeStyles, TextField } from '@material-ui/core';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/rocket.png'
import { Grid, Paper, Avatar, Typography, Button ,Box} from '@material-ui/core'
import { AddCircleOutlineOutlined } from '@material-ui/icons';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Axios from 'axios'

export const CustLogin = () => {


  const paperStyle = { padding: '30px 20px', height: '620px',position:'relative',top:'70px', width: 1000, margin: "30px auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 5 }
  const buttonStyle = {display:'flex',justifyContent :'center'}

  const [loginstatus, setLoginstatus] = useState("")
  const [redirect, setRedirect] = useState(false)
  const formik = useFormik({
    initialValues: {
      name:'',
      email: '',
      companyname :'',
      query:'',
      phonenumber:'',
      region:'',

    }
  })
  console.log(formik.values)

  // const logincust = (e) => {
  //   e.preventDefault();
  //   Axios.post('http://localhost:8080/logincust', {
  //     email: formik.values.email,
  //     password: formik.values.password
  //   }).then((response) => {


  //     localStorage.setItem('logincustname', response.data.name)
  //     if (response.data.message) {
  //       setLoginstatus(response.data.message)

  //     }
  //     if (loginstatus == "Correct") {
  //       setRedirect(true)
  //     }
  //   })

  // }

  
  return (
    <LayoutCustomer >
    <Grid >
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Submit Query</h2>
          
        </Grid>
        <form>
          <TextField onChange={formik.handleChange} name="name" value={formik.values.name} fullWidth label='Name' placeholder="Enter your name" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.email} name="email" fullWidth label='Email ' placeholder="Enter your Email " />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.companyname} name="companyname" fullWidth label='CompanyName' placeholder="Enter your companyname" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.query} name="query" fullWidth label='Query' placeholder="Enter your Query" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.phonenumber} name="phonenumber" fullWidth label="PhoneNumber" placeholder="Enter your Phone Number" />
          <br></br><br></br>
          <TextField onChange={formik.handleChange} value={formik.values.region} name="region" fullWidth label="Region" placeholder="Enter your Region" />
          <br></br><br></br><br></br>
         <Box style={buttonStyle}> <Button type='submit' variant='contained' color='primary' style={buttonStyle}>
           Submit
          </Button></Box>
         
        </form>
      </Paper>
    </Grid>
    </LayoutCustomer>
  )
}


export default CustLogin