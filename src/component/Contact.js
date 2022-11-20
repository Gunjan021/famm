import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Contact() {

    const submitData = () => {

    }

    const data1 = () => {
        localStorage.setItem('d1-email')
        localStorage.setItem('d1-sub')
        localStorage.setItem('d1-msg')
        window.location.reload()
    }
    const data2 = () => {
        localStorage.setItem('d2-email')
        localStorage.setItem('d2-sub')
        localStorage.setItem('d2-msg')
        window.location.reload()
    }
    const data3 = () => {
        localStorage.setItem('d3-email')
        localStorage.setItem('d3-sub')
        localStorage.setItem('d3-msg')
        window.location.reload()
    }
    const data4 = () => {
        localStorage.setItem('d4-email')
        localStorage.setItem('d4-sub')
        localStorage.setItem('d4-msg')
        window.location.reload()
    }
    const data5 = () => {
        localStorage.setItem('d5-email')
        localStorage.setItem('d5-sub')
        localStorage.setItem('d5-msg')
        window.location.reload()
    }

    const d1email = localStorage.getItem('d1-email')
    const d1sub = localStorage.getItem('d1-sub')
    const d1msg = localStorage.getItem('d1-msg')

    const d2email = localStorage.getItem('d2-email')
    const d2sub = localStorage.getItem('d2-sub')
    const d2msg = localStorage.getItem('d2-msg')

    const d3email = localStorage.getItem('d3-email')
    const d3sub = localStorage.getItem('d3-sub')
    const d3msg = localStorage.getItem('d3-msg')

    const d4email = localStorage.getItem('d4-email')
    const d4sub = localStorage.getItem('d4-sub')
    const d4msg = localStorage.getItem('d4-msg')

    const d5email = localStorage.getItem('d5-email')
    const d5sub = localStorage.getItem('d5-sub')
    const d5msg = localStorage.getItem('d5-msg')

    return (
        <div>
            <Header></Header>
            <section class="inner_page_head">
                <div class="container_fuild">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="full">
                                <h3>Contact us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="why_section layout_padding">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="full">
                                <form onSubmit={submitData}>
                                    <fieldset>

                                        <input type="email" placeholder="Enter your email address" name="email" required />
                                        <input type="text" placeholder="Enter subject" name="subject" required />
                                        <textarea placeholder="Enter your message" required></textarea>
                                        <input onClick={data1} type="submit" value="Submit" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <table>
                <tr>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Email</th>
                </tr>
                {
                    d1email != null ? <tr>
                        <td>{d1sub}</td>
                        <td>{d1msg}</td>
                        <td>{d1email}</td>
                    </tr> : <></>
                }
                {
                    d2email != null ? <tr>
                        <td>{d2sub}</td>
                        <td>{d2msg}</td>
                        <td>{d2email}</td>
                    </tr> : <></>
                }
                {
                    d3email != null ? <tr>
                        <td>{d3sub}</td>
                        <td>{d3msg}</td>
                        <td>{d3email}</td>
                    </tr> : <></>
                }
                {
                    d4email != null ? <tr>
                        <td>{d4sub}</td>
                        <td>{d4msg}</td>
                        <td>{d4email}</td>
                    </tr> : <></>
                }
                {
                    d5email != null ? <tr>
                        <td>{d5sub}</td>
                        <td>{d5msg}</td>
                        <td>{d5email}</td>
                    </tr> : <></>
                }
            </table>
            <Footer></Footer>
        </div>
    )
}

export default Contact