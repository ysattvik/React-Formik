import React from 'react'
import { Formik , Form, Field,ErrorMessage,FastField} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'


const initialValues={
    name:'yns',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social:{            //Nested Object
    facebook:'',
    twitter: '' 
    }
}
const onSubmit = values =>{
    console.log('Form data',values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
    channel:Yup.string().required('Required'),
    comments:Yup.string().required('Required')
})

const validatecomments = value =>{
    let error
    if(!value){
        error='Required'
    }
    return error
}
function YouTubeForm() {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
                <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <Field 
                type="text" 
                id='name' 
                name='name'
                />
                <ErrorMessage name='name' component={TextError}/>
                </div>
                <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <Field 
                type="email"
                id='email' 
                name='email' 
                />
                <ErrorMessage name='email'>
                {errorMsg =><div className='error'>{errorMsg}</div>}
                </ErrorMessage>
                
                </div>
                <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <Field 
                type="text" 
                id='channel' 
                name='channel' 
                />
                 <ErrorMessage name='channel'>
                 {errorMsg =><div className='error'>{errorMsg}</div>}
                </ErrorMessage>
                
                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    <Field as= 'textarea' id='comments' name='comments'
                    validate={validatecomments}
                    />
                {/* <ErrorMessage name='comments'>
                     {errorMsg =><div className='error'>{errorMsg}</div>}
                </ErrorMessage> */}
                <ErrorMessage name='comments' component={TextError}/>

                </div>
                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    {/* <Field name='address'> */}
                    <FastField name='address'>
                    {
                        (props) =>{
                        const { field, form, meta }= props
                        console.log('Render props',props)
                                return (
                                <div>
                                <input type='text' id='address'
                                {...field}/>
                                {
                                meta.touched && meta.error ? <div>{meta.error}</div> : null
                                }
                                </div>
                                )
                            }
                        }
                    {/* </Field> */}
                    </FastField>
                </div>
                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook Profile</label>
                    <Field type='text' id='facebook' name='social.facebook'/>
                </div>

                 <div className='form-control'>
                    <label htmlFor='twitter'>Twitter Profile</label>
                    <Field type='text' id='twitter' name='social.twitter'/>
                </div>
       

                <label></label>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}
export default YouTubeForm
