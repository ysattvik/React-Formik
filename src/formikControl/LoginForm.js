import {React, useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'




function LoginForm() {
    const initialValues = {
        email:'',
        password:''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password:Yup.string().required('Required')
    })
    const onSubmit = (values, onSubmitProps) =>{
        console.log('Form data', values)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    }
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
            {
                formik =>{
                    return <Form>

                        <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                        />
                        <FormikControl
                        control='input'
                        type='password'
                        label='Password'
                        name='password'
                        />
                        <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                    </Form>
                }
            }
            
        </Formik>
    )
}

export default LoginForm
