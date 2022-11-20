import React, { useState } from 'react'
import Footer from './Footer'
import './login.css'
import Script from './Script'
import Header from './Header'
import SimpleReactValidator from 'simple-react-validator'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const validator = new SimpleReactValidator()
    const navigate = useNavigate()

    const [login, setlogin] = useState({})
    const changeData = (event) => {
        setlogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }
    const submitData = (e) => {
        e.preventDefault()
        if (validator.allValid()) {
            navigate('/')
        }
        else {

            alert('please fill all details')
        }
    }

    return (
        <div>
            <Header></Header>
            <section class="vh-100">
                <div class="container py-5 h-100">
                    <div class="row d-flex align-items-center justify-content-center h-100">
                        <div class="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                class="img-fluid" alt="Phone image" />
                        </div>
                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form onSubmit={submitData}>
                                {/* <!-- Email input --> */}
                                <div class="form-outline mb-4">
                                    <input type="email" id="form1Example13" name='email' class="form-control form-control-lg" onChange={changeData} />
                                    <label class="form-label" for="form1Example13">Email address</label>
                                    <span style={{ color: 'red' }}>{validator.showMessageFor('email')}{validator.message('email', login.email, 'required|email')}</span>
                                </div>

                                {/* <!-- Password input --> */}
                                <div class="form-outline mb-4">
                                    <input type="password" id="form1Example23" name='password' onChange={changeData} class="form-control form-control-lg" />
                                    <label class="form-label" for="form1Example23">Password</label>
                                    <span style={{ color: 'red' }}>
                                        {validator.showMessageFor('password')}{validator.message('password', login.password, 'required|min:6')}
                                    </span>
                                </div>

                                <div class="d-flex justify-content-around align-items-center mb-4">
                                    {/* <!-- Checkbox --> */}
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                        <label class="form-check-label" for="form1Example3"> Remember me </label>
                                    </div>
                                    <a href="#!">Forgot password?</a>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button onClick={submitData} type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>

                                <a class="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#3b5998' }}
                                    role="button">
                                    <i class="fab me-2"></i>Register
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
            <Script></Script>
        </div>
    )
}

export default Login