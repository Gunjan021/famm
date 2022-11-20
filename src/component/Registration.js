import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SimpleReactValidator from 'simple-react-validator'
import Script from './Script'
import { useNavigate } from 'react-router-dom'
function Registration() {

    const validator = new SimpleReactValidator()
    const [reg, setreg] = useState({})
    const changeData = (event) => {
        setreg({
            ...reg,
            [event.target.name]: event.target.value
        })
    }
    const navigate = useNavigate()
    const submitData = (e) => {
        e.preventDefault()
        if (validator.allValid()) {
            if (reg.password == reg.repassword) {
                navigate('/Login')
            }
            else {
                alert('password and repeat password are not same')
            }
        }
        else {
            alert('please fill all details')
        }
    }
    return (
        <div>
            <Header></Header>
            <section class="vh-100" style={{ backgroundColor: '#eee' }}>
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black" style={{ borderRadius: '25px' }}>
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form onSubmit={submitData} class="mx-1 mx-md-4">

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" name='name' class="form-control" onChange={changeData} />
                                                        <label class="form-label" for="form3Example1c">Your Name</label>
                                                        <span style={{ color: 'red' }}>
                                                            {validator.showMessageFor('name')}{validator.message('name', reg.name, 'required|alpha|min:2')}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" name='email' class="form-control" onChange={changeData} />
                                                        <label class="form-label" for="form3Example3c">Your Email</label>
                                                        <span style={{ color: 'red' }}>
                                                            {validator.showMessageFor('email')}{validator.message('email', reg.email, 'required|email')}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" name='password' class="form-control" onChange={changeData} />
                                                        <label class="form-label" for="form3Example4c">Password</label>
                                                        <span style={{ color: 'red' }}>
                                                            {validator.showMessageFor('password')}{validator.message('password', reg.password, 'required|min:6')}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" name='repassword' class="form-control" onChange={changeData} />
                                                        <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                                        <span style={{ color: 'red' }}>
                                                            {validator.showMessageFor('repassword')}{validator.message('repassword', reg.repassword, 'required|min:6')}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-center mb-5">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label class="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" onClick={submitData} class="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                class="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
            <Script></Script>
        </div>
    )
}

export default Registration