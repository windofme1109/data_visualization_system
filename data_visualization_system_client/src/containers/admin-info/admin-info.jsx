import React, {Component} from 'react'
import {connect} from 'react-redux'


import './admin-info-style.css'

var avatar = require('../../assets/images/avatar_middle.jpg') ;

class AdminInfo extends Component {
    render() {

        const {email, username} = this.props.userState ;

        return (
            <div className="admin-info">
                <div className="basic-info">
                    <div className="admin-avatar">
                        {/*<Avatar shape="square" src={avatar} size="large"/>*/}
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="admin-name">用户名：{username}</div>
                    <div className="admin-id">userID：4417555</div>
                    <div className="admin-email">邮箱：{email}</div>
                </div>
                <div className="advanced-info">
                    <div className="admin-department">所属部门：健康事业部-可视化小组</div>
                    <div className="admin-authority">管理权限：1</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userState: state.userState
    } ;
}

const mapDispatchToProps = {

} ;

export default connect(mapStateToProps, mapDispatchToProps)(AdminInfo) ;