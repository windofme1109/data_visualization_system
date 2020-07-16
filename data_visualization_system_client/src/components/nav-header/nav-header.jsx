import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'

import SpecifiedUserInfoModal from '../../containers/specified-user-info-modal/specified-user-info-modal'
import LogoutModal from '../../containers/logout-modal/logout-modal'
import {resetUser, getUserHealthActionCreator, getStatisticsActionCreator} from '../../redux/actions'


import './nav-header-style.css'

const {SubMenu} = Menu ;
const MenuItem = Menu.Item ;
class NavHeader extends Component {

    state = {
        current: 'home-page',
        visible: false,
        logoutVisible: false
    } ;
    showModal = () => {
        this.setState({
            visible: true,
        });
    };



    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });

        this.props.history.push('/individual') ;
    };




    handleCancel = (e) => {
        console.log(e);
        this.props.history.push('/individual') ;
        this.setState({
            visible: false,
        });
    };

    showLogoutModal = () => {
        this.setState({
            logoutVisible: true,
        });
    };

    handleLogoutOk = (e) => {
        console.log(e);
        
        Cookies.remove('user_id') ;
        this.props.resetUser() ;
        this.setState({
            logoutVisible: false,
        });


    };

    handleLogoutCancel = (e) => {
        console.log(e);

        this.setState({
            logoutVisible: false,
        });
    };


    handleClick = (e) => {
        const {key} = e ;

        const userIDList = [25, 155, 7, 17, 251, 362, 415, 1310, 681, 974] ;
        var randomUserIDIndex = Math.floor(Math.random() * 10) ;
        var randomUserID = userIDList[randomUserIDIndex] ;
        console.log('randomUserIDIndex', randomUserIDIndex) ;
        console.log('randomUserID', randomUserID) ;
        if (key === 'home-page') {
            this.props.history.push('/home') ;
        } else if (key === 'anomaly-data') {
            this.props.history.push('/anomaly') ;
        } else if (key === 'random') {
            this.props.history.push('/individual') ;
            this.props.getUserHealthActionCreator(randomUserID, 'heartrate') ;
            this.props.getUserHealthActionCreator(randomUserID, 'bloodoxygen') ;
            this.props.getUserHealthActionCreator(randomUserID, 'step') ;
            this.props.getUserHealthActionCreator(randomUserID, 'bloodpressure') ;
            this.props.getUserHealthActionCreator(randomUserID, 'userInfo') ;
            this.props.getStatisticsActionCreator(randomUserID, 'correlation') ;

        } else if ( key === 'specified') {
            this.showModal() ;
        } else if (key === 'user-setting') {
            this.props.history.push('/setting') ;
        } else if (key === 'logout') {
            this.showLogoutModal() ;
        }
    } ;

    render() {
        const pathName = this.props.location.pathname ;


        return (
            <div>
                <Menu onClick={this.handleClick} mode="horizontal" className="my-nav-header">
                    <MenuItem key="platform-name">
                        <a href="/#/home">
                            大数据可视化平台
                        </a>
                    </MenuItem>
                    <MenuItem key="home-page">
                        <Icon type="home" />
                            首页
                    </MenuItem>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="appstore" />
                                    基础数据展示
                            </span>
                        }
                    >
                        <Menu.ItemGroup>
                            <MenuItem key="random">随机用户</MenuItem>
                            <MenuItem key="specified">
                                指定用户
                            </MenuItem>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <MenuItem key="anomaly-data">
                        <Icon type="appstore" />
                        异常数据展示
                    </MenuItem>
                    <MenuItem key="user-setting">
                        <Icon type="setting" />
                            个人中心
                    </MenuItem>
                    <MenuItem key="logout">
                        <Icon type="logout"/>
                            退出
                    </MenuItem>
                </Menu>
                <SpecifiedUserInfoModal visible={this.state.visible} handleCancel={this.handleCancel} handleOk={this.handleOk} />
                <LogoutModal logoutVisible={this.state.logoutVisible} logoutHandleCancel={this.handleLogoutCancel} logoutHandleOk={this.handleLogoutOk} />
            </div>
        )
    }
}


NavHeader =  withRouter(NavHeader) ;

function mapStateToProps(state) {
    return {
        userState: state.userState
    } ;
}

const mapDispatchToProps = {
    resetUser,
    getUserHealthActionCreator,
    getStatisticsActionCreator
} ;

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)