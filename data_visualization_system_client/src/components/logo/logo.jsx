import React, {Component} from 'react'

import logo from './logo-test.jpg'
import './logo-test.css'

export default class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="" className="logo-test"/>
            </div>
        )
    }
}