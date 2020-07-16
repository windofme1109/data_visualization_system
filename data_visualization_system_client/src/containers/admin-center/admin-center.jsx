import React, {Component} from 'react'



import NavSide from '../../components/nav-side/nav-side'
import AdminSetting from '../admin-setting/admin-setting'

import './admin-center-style.css'


export default class AdminCenter extends Component {
    render() {
        return (
            <div className='setting-container'>
              <NavSide />
              <AdminSetting />
            </div>
        )
    }
}