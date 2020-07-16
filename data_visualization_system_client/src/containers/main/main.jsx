import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NavHeader from '../../components/nav-header/nav-header'
import HomePage from '../home-page/home-page'
import IndividualData from '../individual-data/individual-data'
import AdminCenter from '../admin-center/admin-center'
import AnomalyData from '../anomaly-data/anomaly-data'

import {getUserInfoActionCreator} from '../../redux/actions'

import './main-style.css'

class Main extends Component {


    componentDidMount() {
        const user_id = Cookies.get('user_id') ;
        const userState = this.props.userState ;

        if (user_id && !userState._id) {
            // 存在Cookies，但是不存在userState，说明用户曾经登录过，但是现在没有登录，
            // 所以需要向服务器发送请求，获取用户信息
            this.props.getUserInfoActionCreator() ;
        }
    }

    render() {

        const user_id = Cookies.get('user_id') ;


        const path = this.props.location.pathname ;

        if (!user_id) {
            // 没有Cookies，则重定向到登录页面
            return <Redirect to={'/login'} />
        }

        const userState = this.props.userState ;

        if (!userState._id) {
            // state中_id不存在，表示当前用户没有处于登录状态
            // 此时不显示任何内容
            return null ;
        } else {
            if (path === '/') {
                return <Redirect to={'/home'} />
            }
        }

        return (
            <div className="main">
                <NavHeader />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/individual' component={IndividualData}/>
                    <Route path='/anomaly' component={AnomalyData}/>
                    <Route path='/setting' component={AdminCenter}/>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userState: state.userState
    }
}

const mapDispatchToProps = {
    getUserInfoActionCreator
} ;

export default connect(mapStateToProps, mapDispatchToProps)(Main) ;