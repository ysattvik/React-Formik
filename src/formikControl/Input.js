import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { rest } from 'lodash'
import TextError from './TextError'

function Input(props) {
    const {label, name, ...rest}= props
    return (
        <div className='form-control'>
            <label htnlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
            
        </div>
    )
}

export default Input
