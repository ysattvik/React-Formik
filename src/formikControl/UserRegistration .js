import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function UserRegistration () {
    const dropdownOptions = [
        {key : 'Select Your gender', value :''},
        {key : 'Male', value : 'male'},
        {key : 'Female', value : 'female'}
    ]
    const initialValues = {
        email:'',
        password:'',
        confirmPassword:'',
        fname:'',
        lname:'',
        gender:'',
        phone:'',
        address:''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email formate').required('Required'),
        password:Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),''],
        'Password must match').required('Required'),
        fname:Yup.string().required('Required'),
        lname:Yup.string().required('Required'),
        gender:Yup.string().required('Required'),
        phone:Yup.string().required('Required'),
        address:Yup.string().required('Required')

    })
    const onSubmit = (values, onSubmitProps) =>{
        console.log('Form data',values)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    }
    return (
       <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit}>
       {
           formik => {
               return <Form>
                   <FormikControl
                   control='input'
                   label='Email'
                   name='email'
                   type='email'
                   />
                   <FormikControl
                   control='input'
                   type='password'
                   label='Password'
                   name='password'
                   />
                   <FormikControl
                   control='input'
                   type='password'
                   label='Confirm Password'
                   name='confirmPassword'
                   />
                    <FormikControl
                   control='input'
                   label='First Name'
                   name='fname'
                   type='text'
                   />
                    <FormikControl
                   control='input'
                   label='last Name'
                   name='lname'
                   type='text'
                   />
                     <FormikControl
                        control='select'
                        label='Gender'
                        name='gender'
                        options={dropdownOptions}
                        />
                    <FormikControl
                   control='input'
                   label='Phone Number'
                   name='phone'
                   type='text'
                   />
                    <FormikControl
                   control='input'
                   label='Address'
                   name='address'
                   type='text'
                   />
                    <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
               </Form>
                  
               
           }
       }

       </Formik>
    )
}

export default UserRegistration 
