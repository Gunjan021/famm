import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import products from './Products'

function Cart() {

    const p1img = localStorage.getItem('p1-img')
    const p1name = localStorage.getItem('p1-name')
    const p1price = localStorage.getItem('p1-price')

    const p2img = localStorage.getItem('p2-img')
    const p2name = localStorage.getItem('p2-name')
    const p2price = localStorage.getItem('p2-price')

    const p3img = localStorage.getItem('p3-img')
    const p3name = localStorage.getItem('p3-name')
    const p3price = localStorage.getItem('p3-price')

    const p4img = localStorage.getItem('p4-img')
    const p4name = localStorage.getItem('p4-name')
    const p4price = localStorage.getItem('p4-price')

    const p5img = localStorage.getItem('p5-img')
    const p5name = localStorage.getItem('p5-name')
    const p5price = localStorage.getItem('p5-price')

    const p6img = localStorage.getItem('p6-img')
    const p6name = localStorage.getItem('p6-name')
    const p6price = localStorage.getItem('p6-price')

    const p7img = localStorage.getItem('p7-img')
    const p7name = localStorage.getItem('p7-name')
    const p7price = localStorage.getItem('p7-price')

    const p8img = localStorage.getItem('p8-img')
    const p8name = localStorage.getItem('p8-name')
    const p8price = localStorage.getItem('p8-price')

    const p9img = localStorage.getItem('p9-img')
    const p9name = localStorage.getItem('p9-name')
    const p9price = localStorage.getItem('p9-price')

    const p10img = localStorage.getItem('p10-img')
    const p10name = localStorage.getItem('p10-name')
    const p10price = localStorage.getItem('p10-price')

    const p11img = localStorage.getItem('p11-img')
    const p11name = localStorage.getItem('p11-name')
    const p11price = localStorage.getItem('p11-price')

    const p12img = localStorage.getItem('p12-img')
    const p12name = localStorage.getItem('p12-name')
    const p12price = localStorage.getItem('p12-price')

    const p1remove = () => {
        localStorage.removeItem('p1-img')
        localStorage.removeItem('p1-name')
        localStorage.removeItem('p1-price')
        window.location.reload()
    }
    const p2remove = () => {
        localStorage.removeItem('p2-img')
        localStorage.removeItem('p2-name')
        localStorage.removeItem('p2-price')
        window.location.reload()
    }
    const p3remove = () => {
        localStorage.removeItem('p3-img')
        localStorage.removeItem('p3-name')
        localStorage.removeItem('p3-price')
        window.location.reload()
    }
    const p4remove = () => {
        localStorage.removeItem('p4-img')
        localStorage.removeItem('p4-name')
        localStorage.removeItem('p4-price')
        window.location.reload()
    }
    const p5remove = () => {
        localStorage.removeItem('p5-img')
        localStorage.removeItem('p5-name')
        localStorage.removeItem('p5-price')
        window.location.reload()
    }
    const p6remove = () => {
        localStorage.removeItem('p6-img')
        localStorage.removeItem('p6-name')
        localStorage.removeItem('p6-price')
        window.location.reload()
    }
    const p7remove = () => {
        localStorage.removeItem('p7-img')
        localStorage.removeItem('p7-name')
        localStorage.removeItem('p7-price')
        window.location.reload()
    }
    const p8remove = () => {
        localStorage.removeItem('p8-img')
        localStorage.removeItem('p8-name')
        localStorage.removeItem('p8-price')
        window.location.reload()
    }
    const p9remove = () => {
        localStorage.removeItem('p9-img')
        localStorage.removeItem('p9-name')
        localStorage.removeItem('p9-price')
        window.location.reload()
    }
    const p10remove = () => {
        localStorage.removeItem('p10-img')
        localStorage.removeItem('p10-name')
        localStorage.removeItem('p10-price')
        window.location.reload()
    }
    const p11remove = () => {
        localStorage.removeItem('p11-img')
        localStorage.removeItem('p11-name')
        localStorage.removeItem('p11-price')
        window.location.reload()
    }
    const p12remove = () => {
        localStorage.removeItem('p12-img')
        localStorage.removeItem('p12-name')
        localStorage.removeItem('p12-price')
        window.location.reload()
    }

    return (
        <div><section class="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col">
                        <div class="card">
                            <div class="card-body p-4">

                                <div class="row">

                                    <div class="col-lg-12">
                                        <Link to="/Products"><h5 class="mb-3"><a href="#!" class="text-body"><i
                                            class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5></Link>
                                        <hr />

                                        <div class="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p class="mb-1">Shopping cart</p>
                                            </div>
                                            <div>
                                                <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
                                                    class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
                                            </div>
                                        </div>

                                        {
                                            p1img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p1img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p1name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p1price}</h5>
                                                            </div>
                                                            <a onClick={p1remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p2img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p2img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p2name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p2price}</h5>
                                                            </div>
                                                            <a onClick={p2remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p3img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p3img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p3name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p3price}</h5>
                                                            </div>
                                                            <a onClick={p3remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p4img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p4img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p4name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p4price}</h5>
                                                            </div>
                                                            <a onClick={p4remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p5img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p5img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p5name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p5price}</h5>
                                                            </div>
                                                            <a onClick={p5remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p6img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p6img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p6name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p6price}</h5>
                                                            </div>
                                                            <a onClick={p6remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p7img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p7img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p7name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p7price}</h5>
                                                            </div>
                                                            <a onClick={p7remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p8img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p8img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p8name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p8price}</h5>
                                                            </div>
                                                            <a onClick={p8remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p9img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p9img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p9name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p9price}</h5>
                                                            </div>
                                                            <a onClick={p9remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p10img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p10img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p10name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p10price}</h5>
                                                            </div>
                                                            <a onClick={p10remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p11img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p11img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p11name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p11price}</h5>
                                                            </div>
                                                            <a onClick={p11remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                        {
                                            p12img != null ? <div class="card mb-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src={p12img}
                                                                    class="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5>{p12name}</h5>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div style={{ width: '80px' }}>
                                                                <h5 class="mb-0">{p12price}</h5>
                                                            </div>
                                                            <a onClick={p12remove} style={{ color: '#cecece', cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>
                                        }
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Cart