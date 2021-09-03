import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function EnrollmentForm() {
    const dropdownOptions = [
        {key : 'Select an Course', value :''},
        {key : 'React', value : 'react'},
        {key : 'Angular', value : 'angular'},
        {key : 'vue', value : 'vue'}
       
    ]
    
    const checkboxOptions = [
        {key : 'HTML', value : 'htnl'},
        {key : 'CSS', value : 'css'},
        {key : 'Java Script', value : 'java'}
       
    ]
    const initialValues ={
        email:'',
        bio:'',
        course:'',
        skills:[],
        courseDate:null
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email formate').required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        skills: Yup.array().required('Required'),
        courseDate: Yup.date().required('Required').nullable()

    })
    const onSubmit = (values, onSubmitProps) =>{
        console.log('Form data', values)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {
            formik =>{
                return(
                    <Form>
                        <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                        />
                        <FormikControl
                        control='textarea'
                        label='Bio'
                        name='bio'
                        />
                        <FormikControl
                        control='select'
                        label='Course'
                        name='course'
                        options={dropdownOptions}
                        />
                        <FormikControl
                        control='checkbox'
                        label='Your SkillSet'
                        name='skills'
                        options={checkboxOptions}
                        />
                        <FormikControl
                        control='date'
                        label='Course Date'
                        name='courseDate'
                        />
                        <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                    </Form>
                )
            }
        }
            
        </Formik>
    )
}

export default EnrollmentForm
