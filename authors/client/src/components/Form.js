import React, { useState } from 'react';




const Form = (props) => {



    const { initialName, onSubmitProp, errors } = props;

    const [name, setName] = useState(initialName)


    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name })
        setName(initialName)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='form-fields p-3 m-3'>
                <label className="form-label">Name</label>
                <input className="form-control" type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            {
                errors.name ?
                    <p className='text-danger' >{errors.name.message}</p>
                    : null
            }
            <button className='btn btn-success ' type='submit'>Submit</button>

        </form>
    );
};




export default Form;
