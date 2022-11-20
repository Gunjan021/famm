import React from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'
function Header() {
    return (
        <div>
            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="/"><img width="250" src="images/logo.png" alt="/" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>

                                <li className="nav-item">
                                    <Link to="/Products"><a className="nav-link" href="/">Products</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Login"><a className="nav-link" href="/">Login</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Registration"><a className="nav-link" href="/">Registration</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact"><a className="nav-link" href="/">Contact</a></Link>
                                </li>
                                <form className="form-inline">
                                    <Link to="/Cart"><button className="btn  my-2 my-sm-0 nav_search-btn">
                                        <i class="fa fa-shopping-cart " aria-hidden="true"></i>
                                    </button></Link>
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header