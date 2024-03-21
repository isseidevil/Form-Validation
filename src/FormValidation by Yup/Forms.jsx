import {Field,Form, Formik} from 'formik'
import {userSchema} from './Schema'
import './Forms.css'

const Forms = () => {
    const iniValue = {name:'',email:'',password:'',cpassword:''}

    function handle(value,action){
        console.log(value);
        action.resetForm()
    }
  return (
    <div className='Forms'>
        <Formik initialValues={iniValue} onSubmit={handle} validationSchema={userSchema}>
            {({errors,touched})=>(
                <Form className='form_cont'>
                <label htmlFor="name">Name: </label>
                <Field type='text' name='name'></Field>
                <div>
                    {errors && touched && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <br />
                <label htmlFor="email">Email: </label>
                <Field type='email' name='email'></Field>
                <div>
                    {errors && touched && (
                        <p>{errors.email}</p>
                    )}
                </div>
                <br />
                <label htmlFor="password">Password: </label>
                <Field type='password' name='password'></Field>
                <div>
                    {errors && touched && (
                        <p>{errors.password}</p>
                    )}
                </div>
                <br />
                <label htmlFor="cpassword">C.Password: </label>
                <Field type='password' name='cpassword'></Field>
                <div>
                    {errors && touched && (
                        <p>{errors.cpassword}</p>
                    )}
                </div>
                <br />
                <button type='submit'>Submit</button>
            </Form>
            )}
        </Formik>
      
    </div>
  )
}

export default Forms
