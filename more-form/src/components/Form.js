import React, { useState } from 'react';

const Form = () => {

    const  [user,setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        hasSubmitted : false
    });

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const createUser = (e) => {
        e.preventDefault();
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            hasSubmitted : true
        });

        console.log("Welcome", user);

    }

    return(
        <div className='container'>
            <form onSubmit={createUser}>
                {
                    user.hasSubmitted ?
                    <h3 className="alert alert-primary" role="alert">Thank you for submitting the form!</h3> :
                    <h3 className="alert alert-warning" role="alert">Welcome, please submit the form.</h3>
                }
                <div className='form-group row' >
                    <label className='col-sm-2 col-form-label'>First Name: </label>
                    <input type="text" name="firstName" className="form-control" value={user.firstName} onChange={handleChange}/>
                    {
                        user.firstName.length < 2 && user.firstName.length > 0 ?
                        <p className='text-danger'>First Name must be at least 2 characters</p> :
                        ''
                    }
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Last Name: </label>
                    <input type="text" name="lastName" className="form-control" value={user.lastName}  onChange={handleChange}/>
                    {
                        user.lastName.length < 2 && user.lastName.length > 0 ?
                        <p className='text-danger'>Last Name must be at least 2 characters</p> :
                        ''
                    }
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Email: </label>
                    <input type="text" name="email" className="form-control" value={user.email} onChange={handleChange}/>
                    {
                        user.email.length < 5 && user.email.length > 0 ?
                        <p className='text-danger'>Email must be at least 5 characters</p> :
                        ''
                    }
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Password: </label>
                    <input type="text" name="password" className="form-control" value={user.password} onChange={handleChange}/>
                    {
                        user.password.length < 8 && user.password.length > 0 ?
                        <p className='text-danger'>Password must be at least 8 characters</p> :
                        ''
                    }
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Confirm Password: </label>
                    <input type="text" name="confirmPassword" className="form-control" value={user.confirmPassword} onChange={handleChange}/>
                    {
                        user.confirmPassword !== user.password ?
                        <p className='text-danger'>Passwords must match</p> :
                        ''
                    }
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
