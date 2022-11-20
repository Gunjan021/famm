import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Script from './Script'

function Products() {
    const product1 = () => {
        localStorage.setItem('p1-img', 'images/p1.png')
        localStorage.setItem('p1-name', `Men's Shirt`)
        localStorage.setItem('p1-price', '$75')
    }
    const product2 = () => {
        localStorage.setItem('p2-img', 'images/p2.png')
        localStorage.setItem('p2-name', `Men's Shirt`)
        localStorage.setItem('p2-price', '$80')
    }
    const product3 = () => {
        localStorage.setItem('p3-img', 'images/p3.png')
        localStorage.setItem('p3-name', `Women's Dress`)
        localStorage.setItem('p3-price', '$68')
    }
    const product4 = () => {
        localStorage.setItem('p4-img', 'images/p4.png')
        localStorage.setItem('p4-name', `Women's Dress`)
        localStorage.setItem('p4-price', '$70')
    }
    const product5 = () => {
        localStorage.setItem('p5-img', 'images/p5.png')
        localStorage.setItem('p5-name', `Women's Dress`)
        localStorage.setItem('p5-price', '$75')
    }
    const product6 = () => {
        localStorage.setItem('p6-img', 'images/p6.png')
        localStorage.setItem('p6-name', `Women's Dress`)
        localStorage.setItem('p6-price', '$58')
    }
    const product7 = () => {
        localStorage.setItem('p7-img', 'images/p7.png')
        localStorage.setItem('p7-name', `Women's Dress`)
        localStorage.setItem('p7-price', '$80')
    }
    const product8 = () => {
        localStorage.setItem('p8-img', 'images/p8.png')
        localStorage.setItem('p8-name', `Men's Shirt`)
        localStorage.setItem('p8-price', '$65')
    }
    const product9 = () => {
        localStorage.setItem('p9-img', 'images/p9.png')
        localStorage.setItem('p9-name', `Men's Shirt`)
        localStorage.setItem('p9-price', '$65')
    }
    const product10 = () => {
        localStorage.setItem('p10-img', 'images/p10.png')
        localStorage.setItem('p10-name', `Men's Shirt`)
        localStorage.setItem('p10-price', '$65')
    }
    const product11 = () => {
        localStorage.setItem('p11-img', 'images/p11.png')
        localStorage.setItem('p11-name', `Men's Shirt`)
        localStorage.setItem('p11-price', '$65')
    }
    const product12 = () => {
        localStorage.setItem('p12-img', 'images/p12.png')
        localStorage.setItem('p12-name', `Women's Dress`)
        localStorage.setItem('p12-price', '$65')
    }
    return (
        <div>
            <Header></Header>
            <section class="inner_page_head">
                <div class="container_fuild">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="full">
                                <h3>Product Grid</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="product_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Our <span>products</span>
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product1}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p1.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $75
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product2}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p2.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $80
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product3}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p3.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $68
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product4}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p4.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $70
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product5}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p5.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $75
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product6}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p6.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $58
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product7}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p7.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $80
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product8}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p8.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $65
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product9}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p9.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $65
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product10}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p10.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $65
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product11}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p11.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Men's Shirt
                                    </h5>
                                    <h6>
                                        $65
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="box">
                                <div class="option_container">
                                    <div class="options">
                                        <a href="" class="option1" onClick={product12}>
                                            Add To Cart
                                        </a>

                                    </div>
                                </div>
                                <div class="img-box">
                                    <img src="images/p12.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Women's Dress
                                    </h5>
                                    <h6>
                                        $65
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn-box">
                        <a href="">
                            View All products
                        </a>
                    </div>
                </div>
            </section>
            <footer class="footer_section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 footer-col">
                            <div class="footer_contact">
                                <h4>
                                    Reach at..
                                </h4>
                                <div class="contact_link_box">
                                    <a href="">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            Location
                                        </span>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Call +01 1234567890
                                        </span>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                                            demo@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 footer-col">
                            <div class="footer_detail">
                                <Link to="/"><a class="footer-logo">
                                    Famms
                                </a></Link>
                                <p>
                                    Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                                </p>
                                <div class="footer_social">
                                    <a href="">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa fa-pinterest" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 footer-col">
                            <div class="map_container">
                                <div class="map">
                                    <div id="googleMap"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-info">
                        <div class="col-lg-7 mx-auto px-0">
                            <p>
                                &copy; <span id="displayYear"></span> All Rights Reserved By
                                <a href="https://html.design/"> Gunjan Rupapara</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <Script></Script>
        </div>
    )
}

export default Products