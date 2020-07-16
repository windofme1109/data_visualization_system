import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'


import AccountSecurity from '../account-security/account-security'
import AdminInfo from '../admin-info/admin-info'
import './admin-setting-style.css'



export default class AdminSetting extends Component {
    render() {
        return (
            <div className="admin-setting">
                <Switch>
                    <Route path='/setting/admin-info' component={AdminInfo} />
                    <Route path='/setting/account-security' component={AccountSecurity} />
                </Switch>
            </div>


        )
    }
}