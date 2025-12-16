import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../slice/userSlices'

function Login() {

    const [user, setUser] = useState({ email: "", password: "" })
    const errorMessage = useSelector(state => state.user.errorMessage)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleChange(el) {
        setUser({ ...user, [el.target.name]: el.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(loginUser(user)).then((res)=>{
            console.log(res);
            if (res.payload.token) {
                navigate("/")
            }
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} className="form-control" id="inputEmail" type="email" placeholder="name@example.com" name='email' />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleChange} className="form-control" id="inputPassword" type="password" placeholder="Password" name='password' />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                    <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <button type='submit' className="btn Link">Login</button>
                                </div>
                            </form>
                            {errorMessage && (<div className='alert alert-danger'>{errorMessage}</div>)}
                        </div>
                        <div className="card-footer text-center py-3">
                            <div className="small"><Link to="/Blog-Frontend/register">Need an account? Sign up!</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login