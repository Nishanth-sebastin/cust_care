import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material';
import { Link } from 'react-router-dom';

export const OrgSignup = () => {
  const validate = Yup.object({
    organizationName: Yup.string()
      .max(15, 'Must be 15 characters or less')
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
    street: Yup.string().max(25, 'Address must be atmost 15 characters'),
    city: Yup.string().required('City is Required'),
    region: Yup.string().required('Region is Required'),
    zipcode: Yup.number().required("Zipcode is Required").max(6, "Zipcode must be atmost 6 characters"),
    website: Yup.string(),
    gstin: Yup.number().required('GSTIN is Required')
  })
  return (

    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Formik
            initialValues={{
              organizationName: '',
              email: '',
              password: '',
              confirmPassword: '',
              street: '',
              city: '',
              region: '',
              zipcode: '',
              website: '',
              gstin: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
              console.log(values)
            }}
          >
            {formik => (
              <div>
                <h1 className="my-4 font-weight-bold .display-4"> Register</h1>
                <Form>
                  <TextField label="Organization Name" name="organizationName" type="text" />
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="password" name="password" type="password" />
                  <TextField label="Confirm Password" name="confirmPassword" type="password" />
                  <TextField label="Address" place="Street Address " name="street" type='address' />
                  <TextField name="city" place="City" type='address' />
                  <TextField place="Region" name="region" type='address' />
                  <TextField place=" Post / Zip Code" name="zipcode" type='address' />
                  <TextField label='Website' name="website" type='address' />
                  <TextField label='GSTIN' name="gstin" type='address' />

                  <h5 style={{ fontSize: '15px' }}>Already Have an Account <a style={{ textDecoration: 'none' }}> {<Link to='/organization/login'>Click Here</Link>}</a></h5>
                  <button style={{ marginRight: '30px', padding: '5px 23px' }} className="btn btn-dark mt-3" type="submit">Register</button>

                </Form>
              </div>
            )}
          </Formik>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src='rocket.png' alt="" />
        </div>
      </div>
    </div>


  )
}
