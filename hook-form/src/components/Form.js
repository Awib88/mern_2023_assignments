import React, { useState } from 'react';

const Form = () => {

    const  [user,setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const createUser = (e) => {
        e.preventDefault();
        console.log("Welcome", user);
        setUser({...user, [e.target.name]: e.target.value})
    };
    return(
        <div className='container'>
            <form onSubmit={createUser}>
                <div className='form-group row' >
                    <label className='col-sm-2 col-form-label'>First Name: </label>
                    <input type="text" name="firstName" className="form-control" onChange={createUser}/>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Last Name: </label>
                    <input type="text" name="lastName" className="form-control" onChange={createUser}/>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Email: </label>
                    <input type="text" name="email" className="form-control" onChange={createUser}/>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Password: </label>
                    <input type="text" name="password" className="form-control" onChange={createUser}/>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Confirm Password: </label>
                    <input type="text" name="confirmPassword" className="form-control" onChange={createUser}/>
                </div>
                <input type="submit" className="btn btn-primary m-3" value="Create User"/>
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Confirm Password: {user.confirmPassword}</p>
            </div>
        </div>
    );
}

export default Form;
