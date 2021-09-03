import React, {useState} from 'react'
import { Formik , Form, Field,ErrorMessage,FieldArray} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'


const initialValues={
    name:'yns',
    email:'',
    channel:'',
    phoneNumbers: ['', ''],
    phNumbers: ['']
}

//saved value data
const savedValues={
    name:'yns',
    email:'v@gmail.com',
    channel:'codavolution',
    phoneNumbers: ['354545', '7696'],
    phNumbers: ['2345678']
}


const onSubmit = (values, onSubmitProps) =>{
    console.log('Form data',values)
    console.log('submit props', onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()//reset after submittion
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
    channel:Yup.string().required('Required')
})

function NewYouTubeForm() {
    const [formValues, setFormValues] = useState(null)
    return (
        <Formik
        // initialValues={initialValues}
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
        >
        {/* validateOnChange={false} */}
        {/* validateOnBlur={false} */}
        {
            formik => {
                console.log('Formik props', formik)
                return(
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
                    <label htmlFor='primaryPh'>Primary Phone Number</label>
                    <Field type='tel' id='primaryPh' name='phoneNumbers[0]'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='secondaryPh'>Secondary Phone Number</label>
                    <Field type='tel' id='secondaryPh' name='phoneNumbers[1]'/>
                </div>
                    <div className='form-control'>
                    <label>List of Phone Numbers</label>
                    <FieldArray name='phNumbers'>
                        {
                            fieldArrayProps =>{
                                console.log('fieldArrayProps', fieldArrayProps)
                                const{push, remove, form}=fieldArrayProps
                                const{values} = form
                                const{phNumbers} = values
                                return (
                                    <div>
                                        {
                                            phNumbers.map((phNumber, index)=>(
                                                <div key={index}>
                                                    <Field name={`phNumbers[${index}]`}/>
                                                    {
                                                        index > 0 &&
                                                        <button type='button' onClick={()=> remove(index)}>
                                                            {''}
                                                            -
                                                            {''}</button>
                                                    }
                                                    
                                                    <button type='button' onClick={() =>push('')}>
                                                        {''}
                                                        +
                                                        {''}</button>
        
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                                  
                                  
                            }
                        }
        
                    </FieldArray>
                    </div>
                        {/* <button type='button' onClick={() =>formik.validateField('channel')}>Validate channel</button>
                        <button type='button' onClick ={() =>formik.validateForm()}>Validate all</button>
                        <button type='button' onClick={() =>formik.setFieldTouched('channel')}>Visit channel</button>
                        <button type='button' onClick ={() =>formik.setTouched({
                            name:true,
                            email:true,
                            channel:true
                        })}>
                            Visit Field</button>
                     */}
                     <button type='button' onClick={() => setFormValues(savedValues)}>Load Saved data</button>
                    
                    <label></label>
                        {/* <button type='submit' disabled={!formik.isValid}>Submit</button> */}
                        {/* <button type='submit' disabled={!(formik.dirty && formik.isValid)}>Submit</button> */}
                       <button type='reset'>Reset</button>
                        <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                    </Form>
                )
            }
        }
        
        </Formik>
    )
}

export default NewYouTubeForm
