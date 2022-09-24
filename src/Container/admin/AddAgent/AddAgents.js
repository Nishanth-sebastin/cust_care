import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import logo from '../assets/rocket.png'
import { Link } from 'react-router-dom'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Icon, Button, Typography, Snackbar, IconButton } from '@mui/material'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import LayoutAgent from '../../../MainLayout/LayoutCustomer'
import { styled } from '@mui/material/styles';
import LayoutAdmin from '../../../MainLayout/LayoutAdmin';
import CloseIcon from '@mui/icons-material/Close';

// import { Link } from 'react-router-dom';



const styles = makeStyles({
    Grid: {
        position: 'relative',
        top: '100px',
        width: '100%',
        height: '650px',
        padding: '18px',

    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }

})

const AddAgents = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };


    const handleClose = (event, reason) => {
        setOpen(false)
    }
    const action = (
        <React.Fragment>
            <Button sx={{ color: '#1565C0' }} size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


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
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
        address: Yup.string()
            //   .max(15, 'Must be 15 characters or less')
            .required('Required'),
        query: Yup.string()
            //   .max(20, 'Must be 20 characters or less')
            .required('Required'),
        number: Yup.number().required('Number is Required').min(10, 'Number must be atleast 10 digits'),
        region: Yup.string().required('Region is Required')
    })
    const style = styles()
    return (
        <LayoutAdmin>

            <Box className={style.Grid} sx={{ marginLeft: '40px' }} >
                <Grid container>

                    {/* <Grid item sm={12}>
                <Typography>Submit Your Query</Typography><br></br>
                
            </Grid> */}
                </Grid>

                <Grid>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-5">
                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                        address: '',
                                        query: '',
                                        number: '',
                                        region: ''
                                    }}
                                    validationSchema={validate}
                                    onSubmit={values => {
                                        console.log(values)
                                    }}
                                >
                                    {formik => (
                                        <div style={{ position: "relative", bottom: "60px" }}>
                                            <h1 className="my-4 font-weight-bold .display-4">Add Agents</h1>
                                            <Form className>
                                                <TextField label="First Name" name="firstName" type="text" />
                                                <TextField label="Last Name" name="lastName" type="text" />
                                                <TextField label="Email" name="email" type="email" />
                                                <TextField label="Phone Number" name="number" type="phone" />
                                                <TextField label="Address" name="address" type="address" />
                                                <TextField label="Region" name="region" type="region" />


                                                <br></br>
                                                <Button onClick={handleClick} variant='contained' sx={{}} className="button">Submit</Button>
                                                <Snackbar
                                                    open={open}
                                                    autoHideDuration={6000}
                                                    onClose={handleClose}
                                                    message="Agent Added Successfully"
                                                    action={action}
                                                />

                                            </Form>
                                        </div>
                                    )}
                                </Formik>
                            </div>
                            <div className="col-md-7 my-auto">
                                <img className="img-fluid w-100" src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Box>


        </LayoutAdmin >


    )
}



export default AddAgents