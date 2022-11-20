import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Script from './Script'
function Home() {

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
            <div>
                <section class="slider_section " style={{ height: '800px' }}>
                    <div class="slider_bg_box">
                        <img src="images/slider-bg.jpg" alt="" />
                    </div>
                    <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="container ">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-6 ">
                                            <div class="detail-box">
                                                <h1>
                                                    <span>
                                                        Sale 20% Off
                                                    </span>
                                                    <br />
                                                    On Everything
                                                </h1>
                                                <p>
                                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn1">
                                                        Shop Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div class="container ">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-6 ">
                                            <div class="detail-box">
                                                <h1>
                                                    <span>
                                                        Sale 20% Off
                                                    </span>
                                                    <br />
                                                    On Everything
                                                </h1>
                                                <p>
                                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn1">
                                                        Shop Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="container ">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-6 ">
                                            <div class="detail-box">
                                                <h1>
                                                    <span>
                                                        Sale 20% Off
                                                    </span>
                                                    <br />
                                                    On Everything
                                                </h1>
                                                <p>
                                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn1">
                                                        Shop Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <ol class="carousel-indicators">
                                <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
                                <li data-target="#customCarousel1" data-slide-to="1"></li>
                                <li data-target="#customCarousel1" data-slide-to="2"></li>
                            </ol>
                        </div>
                    </div>
                </section>

            </div>

            <section class="why_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Why Shop With Us
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="box ">
                                <div class="img-box">

                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Fast Delivery
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box ">
                                <div class="img-box">

                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Free Shiping
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box ">
                                <div class="img-box">

                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Best Quality
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="arrival_section">
                <div class="container">
                    <div class="box">
                        <div class="arrival_bg_box">
                            <img src="images/arrival-bg.png" alt="" />
                        </div>
                        <div class="row">
                            <div class="col-md-6 ml-auto">
                                <div class="heading_container remove_line_bt">
                                    <h2>
                                        #NewArrivals
                                    </h2>
                                </div>
                                <p style={{ marginTop: '20px', marginBottom: '30px' }}>
                                    Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                                </p>
                                <a href="">
                                    Shop Now
                                </a>
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

            <section class="subscribe_section">
                <div class="container-fuild">
                    <div class="box">
                        <div class="row">
                            <div class="col-md-6 offset-md-3">
                                <div class="subscribe_form ">
                                    <div class="heading_container heading_center">
                                        <h3>Subscribe To Get Discount Offers</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    <form action="">
                                        <input type="email" placeholder="Enter your email" />
                                        <button>
                                            subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="client_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Customer's Testimonial
                        </h2>
                    </div>
                    <div id="carouselExample3Controls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="box col-lg-10 mx-auto">
                                    <div class="img_container">
                                        <div class="img-box">
                                            <div class="img_box-inner">
                                                <img src="images/client.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            Anna Trevor
                                        </h5>
                                        <h6>
                                            Customer
                                        </h6>
                                        <p>
                                            Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="box col-lg-10 mx-auto">
                                    <div class="img_container">
                                        <div class="img-box">
                                            <div class="img_box-inner">
                                                <img src="images/client.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            Anna Trevor
                                        </h5>
                                        <h6>
                                            Customer
                                        </h6>
                                        <p>
                                            Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="box col-lg-10 mx-auto">
                                    <div class="img_container">
                                        <div class="img-box">
                                            <div class="img_box-inner">
                                                <img src="images/client.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            Anna Trevor
                                        </h5>
                                        <h6>
                                            Customer
                                        </h6>
                                        <p>
                                            Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel_btn_box">
                            <a class="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
                                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Script />
            <Footer></Footer>
        </div >

    )
}

export default Home