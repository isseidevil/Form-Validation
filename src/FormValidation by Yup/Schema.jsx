import * as yup from 'yup'

const pass = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$")

export let userSchema = yup.object({
    name: yup.string().min(3).required('Name is Required'),
    email: yup.string().email().required('Email is Required'),
    password: yup.string().matches(pass,'Enter Valid Password').min(5).max(10).required('Password is Required'),
    cpassword: yup.string().oneOf([yup.ref('password')],'Password not Matched').required('Enter Confirm Password')
  });