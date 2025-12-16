import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { postUser } from '../slice/userSlices'

function Register() {

    const [user, setUser] = useState({ name: "", email: "", password: "" })
    const errorMessage = useSelector(state=>state.user.errorMessage)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleChange(el) {
        setUser({ ...user, [el.target.name]: el.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postUser(user))
        // navigate("/")
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">

                                    <div className="form-floating mb-3">
                                        <input onChange={handleChange} className="form-control" id="inputName" type="text" placeholder="Enter your first name" name='name' />
                                        <label htmlFor="inputName">Name</label>
                                    </div>


                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} className="form-control" id="inputEmail" type="email" placeholder="name@example.com" name='email' />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-0">
                                            <input onChange={handleChange} className="form-control" id="inputPassword" type="password" placeholder="Create a password" name='password' />
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-0">
                                            <input className="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                            <label for="inputPasswordConfirm">Confirm Password</label>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="mt-4 mb-0">
                                    <div className="d-grid"><button type='submit' className="btn Link btn-block">Create Account</button></div>
                                </div>
                            </form>
                            {errorMessage && (<div className='alert alert-danger'>
                                error : {errorMessage}
                            </div>)}
                        </div>
                        <div className="card-footer text-center py-3">
                            <div className="small"><Link to="/Blog-Frontend/login">Have an account? Go to login</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register