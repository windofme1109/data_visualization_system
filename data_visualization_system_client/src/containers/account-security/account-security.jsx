import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import AccountSecurityPassword from '../account-security-password/account-security-password'
import AccountSecurityEmail from '../account-security-email/account-security-email'
import AccountSecurityAvatar from '../account-security-avatar/account-security-avatar'
import AccountSecurityAuthority from '../account-security-authority/account-security-authority'


export default class AccountSecurity extends Component {
    render() {
        return (
            <div className="admin-account">
                <Switch>
                    <Route path='/setting/account-security/password' component={AccountSecurityPassword}></Route>
                    <Route path='/setting/account-security/email' component={AccountSecurityEmail}></Route>
                    <Route path='/setting/account-security/avatar' component={AccountSecurityAvatar}></Route>
                    <Route path='/setting/account-security/authority' component={AccountSecurityAuthority}></Route>
                </Switch>
            </div>
        )
    }
}
