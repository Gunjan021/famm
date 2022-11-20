import loadjs from 'loadjs'
import React, { Component } from 'react'

export class Script extends Component {
    render() {
        loadjs.reset()
        loadjs('%PUBLIC_URL%/../../js/jquery-3.4.1.min.js', { async: true })
        loadjs('%PUBLIC_URL%/../../js/popper.min.js', { async: true })
        loadjs('%PUBLIC_URL%/../../js/bootstrap.js', { async: true })
        loadjs('%PUBLIC_URL%/../../js/custom.js', { async: true })
        return ""
    }
}

export default Script