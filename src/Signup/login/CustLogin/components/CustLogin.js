import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import '../../../style.css'
import { Link } from 'react-router-dom';
import logo from '../assets/rocket.png'

export const CustLogin = () => {
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
  })
  return (
    <div style={{
      position: 'relative',
      top: '100px'
    }} className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Formik
            initialValues={{

              email: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
              console.log(values)
            }}
          >
            {formik => (
              <div>
                <h1 className="my-4 font-weight-bold .display-4">Login</h1>
                <Form>

                  <TextField label="Email" name="email" type="email" />
                  <TextField label="password" name="password" type="password" />
                  <TextField label="Confirm Password" name="confirmPassword" type="password" /><br></br>
                  <h5 style={{ fontSize: '15px' }}>Create a account <a style={{ textDecoration: 'none' }}> {<Link to='/customer/register'>Click Here</Link>}</a></h5>
                  <button className="btn btn-dark mt-3" type="submit">Login</button>

                </Form>
              </div>
            )}
          </Formik>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid  w-100" src={logo} alt="image" />
        </div>
      </div>
    </div>



  )
}
