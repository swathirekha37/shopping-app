import React from 'react';
import './FormInput.styles.scss'

function FormInput({handleChange,label,...otherInputProps}) {
  return (
        <div className='group'>
            <input onChange={handleChange} {...otherInputProps} className='form-input'/>
            {label ? 
                (<label className={`${otherInputProps.value.length} ? 'shrink' : ''  form-input-label` } >
                  
                </label>) : null
            }
            
        </div>
    );
}

export default FormInput;
