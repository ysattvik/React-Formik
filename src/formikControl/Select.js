import React from 'react'
import { map } from 'lodash'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'


function Select(props) {
    const option=[]
    const {label, name, options, ...rest} = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
                { 
                   
                    options.map(option =>{
                        return(
                            <option key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                        })
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
            
        </div>
    )
}

export default Select
